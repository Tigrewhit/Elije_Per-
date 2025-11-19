#!/usr/bin/env node
import { ingestONPECalendar } from '../src/services/ingest.js'
import { fetchAndSave, sha256hex } from '../src/utils/fetchAndSave.js'
import { MOCK_CALENDAR, MOCK_PROVENIENCIA, MOCK_AUDIT } from '../src/mockData.js'
import fs from 'fs'
import path from 'path'

export async function fallbackIngest(url){
  console.log('Fallback ingest: descargando y guardando en mockData')
  const meta = await fetchAndSave(url, 'onpe')
  const fetched_at = new Date().toISOString()
  const provId = (MOCK_PROVENIENCIA.length? MOCK_PROVENIENCIA[MOCK_PROVENIENCIA.length-1].id : 0) + 1
  let rawPayload = null
  try{ rawPayload = meta.rawText ? JSON.parse(meta.rawText) : { raw_file: meta.filename } }catch(e){ rawPayload = { raw_file: meta.filename } }
  MOCK_PROVENIENCIA.push({ id: provId, fuente: 'ONPE', raw_payload: rawPayload, parsed_hash: meta.hash, source_url: url, fetched_at })

  // Try to detect items array similar to services/ingest.js
  const parsed = rawPayload
  let items = []
  if(Array.isArray(parsed)) items = parsed
  else if(parsed.events) items = parsed.events
  else if(parsed.items) items = parsed.items
  else if(parsed.data) items = parsed.data
  else {
    for(const k of Object.keys(parsed||{})) if(Array.isArray(parsed[k])) { items = parsed[k]; break }
  }

  let imported = 0
  for(const it of items){
    const title = it.title || it.titulo || it.name || it.event || null
    const dateStr = it.date || it.fecha || it.day || null
    const desc = it.description || it.descripcion || it.body || null
    if(!title || !dateStr) continue
    let date = null
    try{ date = new Date(dateStr).toISOString().slice(0,10) }catch(e){ date = null }
    const nextId = (MOCK_CALENDAR.length? MOCK_CALENDAR[MOCK_CALENDAR.length-1].id : 0) + 1
    MOCK_CALENDAR.push({ id: nextId, title, date, description: desc, source_url: url, parsed_hash: meta.hash })
    MOCK_AUDIT.push({ id: (MOCK_AUDIT.length? MOCK_AUDIT[MOCK_AUDIT.length-1].id : 0) + 1, resource_type: 'calendario', resource_id: nextId, action: 'insert', note: `ingest:onpe prov:${provId}`, created_at: new Date().toISOString() })
    imported++
  }

  return { ok:true, provId, imported }
}

export async function main(){
  const argv = process.argv.slice(2)
  const urlArgIndex = argv.findIndex(a=>a==='--url')
  const url = urlArgIndex>=0 && argv[urlArgIndex+1] ? argv[urlArgIndex+1] : 'https://api.mock/onpe/calendario.json'

  try{
    console.log('Intentando ingest DB-first via services/ingest.js')
    const res = await ingestONPECalendar({ sourceUrl: url })
    console.log('Ingest DB result:', res)
  }catch(err){
    console.warn('DB ingest failed or not available, performing fallback. Error:', err.message || err)
    const res = await fallbackIngest(url)
    console.log('Fallback ingest result:', res)
  }
}

if(require.main === module){
  main().catch(e=>{ console.error(e); process.exit(1) })
}
