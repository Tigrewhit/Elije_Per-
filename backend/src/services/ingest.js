import fetch from 'node-fetch'
import crypto from 'node:crypto'
import { pool } from '../config/db.js'

async function ensureFuente(nombre, endpoint, tipo='oficial'){
  const client = await pool.connect()
  try{
    const res = await client.query('SELECT id FROM fuentes WHERE nombre=$1 LIMIT 1',[nombre])
    if(res.rows.length) return res.rows[0].id
    const ins = await client.query(`INSERT INTO fuentes(nombre, tipo, endpoint, verificado, last_fetch) VALUES($1,$2,$3, $4, now()) RETURNING id`,[nombre,tipo,endpoint,true])
    return ins.rows[0].id
  }finally{client.release()}
}

function sha256hex(text){
  return crypto.createHash('sha256').update(text).digest('hex')
}

function guessItems(parsed){
  if(!parsed) return []
  if(Array.isArray(parsed)) return parsed
  if(parsed.events) return parsed.events
  if(parsed.items) return parsed.items
  if(parsed.data) return parsed.data
  // fallback: try to find an array value
  for(const k of Object.keys(parsed)) if(Array.isArray(parsed[k])) return parsed[k]
  return []
}

export async function ingestONPECalendar({sourceUrl}){
  const client = await pool.connect()
  try{
    const fuenteId = await ensureFuente('ONPE', sourceUrl, 'oficial')

    const res = await fetch(sourceUrl, {headers:{'Accept':'application/json'}})
    if(!res.ok) throw new Error(`Fetch failed ${res.status}`)
    const rawText = await res.text()
    let parsed = null
    try{ parsed = JSON.parse(rawText) }catch(e){ parsed = null }
    const rawPayload = parsed ?? { raw_text: rawText }
    const parsedStr = typeof rawPayload === 'string' ? rawPayload : JSON.stringify(rawPayload)
    const hash = sha256hex(parsedStr)

    // store provenance
    const provRes = await client.query(`INSERT INTO proveniencia(fuente_id, tipo_recurso, recurso_id, raw_payload, parsed_hash, source_url, status, fetched_at) VALUES($1,$2,$3,$4,$5,$6,$7, now()) RETURNING id`,[fuenteId,'calendario', null, rawPayload, hash, sourceUrl, 'fetched'])
    const provId = provRes.rows[0].id

    // parse items
    const items = guessItems(parsed)
    const results = []
    for(const it of items){
      // normalize candidate fields to title/date/description
      const title = it.title || it.titulo || it.name || it.event || null
      const dateStr = it.date || it.fecha || it.day || null
      const desc = it.description || it.descripcion || it.body || null
      if(!title || !dateStr) continue
      let date = null
      try{ date = new Date(dateStr).toISOString().slice(0,10) }catch(e){ date = null }
      // try find existing by title+date
      const find = await client.query('SELECT id FROM calendario WHERE title=$1 AND date=$2 LIMIT 1',[title,date])
      if(find.rows.length){
        const id = find.rows[0].id
        await client.query('UPDATE calendario SET description=$1, proveniencia_id=$2 WHERE id=$3',[desc, provId, id])
        await client.query('INSERT INTO auditoria(entidad, entidad_id, operacion, usuario, payload_hash, notas) VALUES($1,$2,$3,$4,$5,$6)',['calendario', id, 'update', 'system_ingest', hash, `proveniencia:${provId}`])
        results.push({id, action:'update'})
      } else {
        const ins = await client.query('INSERT INTO calendario(title, date, description, proveniencia_id) VALUES($1,$2,$3,$4) RETURNING id',[title,date,desc, provId])
        const id = ins.rows[0].id
        await client.query('INSERT INTO auditoria(entidad, entidad_id, operacion, usuario, payload_hash, notas) VALUES($1,$2,$3,$4,$5,$6)',['calendario', id, 'insert', 'system_ingest', hash, `proveniencia:${provId}`])
        results.push({id, action:'insert'})
      }
    }

    // update fuentes last_fetch
    await client.query('UPDATE fuentes SET last_fetch=now(), endpoint=$1 WHERE id=$2',[sourceUrl, fuenteId])

    return {ok:true, provId, imported: results.length, details: results}
  }catch(err){
    throw err
  }finally{ client.release() }
}

export default { ingestONPECalendar }
