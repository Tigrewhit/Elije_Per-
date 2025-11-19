import { ingestONPECalendar } from '../services/ingest.js'
import crypto from 'node:crypto'
import { pool } from '../config/db.js'

export async function postIngestONPE(req,res,next){
  try{
    const { sourceUrl } = req.body
    if(!sourceUrl) return res.status(400).json({ok:false, msg:'sourceUrl required'})
    try{
      const result = await ingestONPECalendar({sourceUrl})
      return res.json({ok:true, result})
    }catch(err){
      // fallback to script-based ingest that writes to mockData/storage when DB isn't available
      try{
        const script = await import('../../scripts/ingest_onpe.js')
        const fallback = script.fallbackIngest
        const result = await fallback(sourceUrl)
        return res.json({ok:true, fallback:true, result})
      }catch(err2){
        return res.status(500).json({ok:false, msg:'ingest failed', error: err2.message || String(err2)})
      }
    }
  }catch(err){ next(err) }
}

export async function getFuentes(req,res,next){
  try{
    
    const { pool } = await import('../config/db.js')
    const client = await pool.connect()
    try{
      const r = await client.query('SELECT id,nombre,tipo,endpoint,verificado,last_fetch FROM fuentes ORDER BY id DESC')
      res.json({ok:true, fuentes: r.rows})
    }finally{client.release()}
  }catch(err){next(err)}
}

export async function verifyProveniencia(req,res,next){
  try{
    const provId = req.params.provId
    const client = await pool.connect()
    try{
      const r = await client.query('SELECT id, raw_payload, parsed_hash FROM proveniencia WHERE id=$1 LIMIT 1',[provId])
      if(!r.rows.length) return res.status(404).json({ok:false, msg:'not found'})
      const row = r.rows[0]
      const raw = row.raw_payload
      const serialized = typeof raw === 'string' ? raw : JSON.stringify(raw)
      const hash = crypto.createHash('sha256').update(serialized).digest('hex')
      const match = hash === row.parsed_hash
      res.json({ok:true, provId: row.id, match, computed: hash, stored: row.parsed_hash})
    }finally{ client.release() }
  }catch(err){ next(err) }
}

export async function postIngestBatch(req,res,next){
  try{
    const { sources } = req.body
    if(!Array.isArray(sources) || !sources.length) return res.status(400).json({ok:false, msg:'sources array required'})
    const results = []
    try{
      const script = await import('../../scripts/ingest_onpe.js')
      const fallback = script.fallbackIngest
      for(const s of sources){
        try{
          const url = s.url || s.sourceUrl
          const r = await fallback(url)
          results.push({ source: s.name || url, ok:true, result: r })
        }catch(err){
          results.push({ source: s.name || s.url, ok:false, error: err.message || String(err) })
        }
      }
      return res.json({ ok:true, results })
    }catch(err){
      return res.status(500).json({ok:false, msg:'batch ingest failed', error: err.message || String(err)})
    }
  }catch(err){ next(err) }
}


