import { MOCK_PROVENIENCIA, MOCK_AUDIT } from '../mockData.js'
import { pool } from '../config/db.js'

export async function getProveniencia(req,res){
  try{
    const id = parseInt(req.params.id,10)
    const client = await pool.connect()
    try{
      const r = await client.query('SELECT id, fuente, raw_payload, parsed_hash, fetched_at FROM proveniencia WHERE id=$1 LIMIT 1',[id])
      if(r.rows.length) return res.json({ok:true, proveniencia: r.rows[0]})
    }finally{ client.release() }
  }catch(e){ /* ignore, fallback to mocks */ }

  const id = parseInt(req.params.id,10)
  const found = MOCK_PROVENIENCIA.find(p=>p.id===id)
  if(!found) return res.status(404).json({ok:false, error:'not found'})
  return res.json({ok:true, proveniencia: found})
}

export async function getAuditoria(req,res){
  try{
    const client = await pool.connect()
    try{
      const r = await client.query('SELECT id, resource_type, resource_id, action, note, created_at FROM auditoria ORDER BY created_at DESC LIMIT 200')
      return res.json({ok:true, count: r.rowCount, audit: r.rows})
    }finally{ client.release() }
  }catch(e){
    return res.json({ok:true, count: MOCK_AUDIT.length, audit: MOCK_AUDIT})
  }
}
