import { MOCK_INCIDENTS } from '../mockData.js'
import { pool } from '../config/db.js'

let INCIDENT_SEQ = MOCK_INCIDENTS.length + 1

export async function listIncidents(req,res){
  try{
    const client = await pool.connect()
    try{
      const r = await client.query('SELECT id, lat, lng, description, photo_url, created_at, status FROM incidents ORDER BY created_at DESC LIMIT 200')
      return res.json({ok:true, count: r.rowCount, incidents: r.rows})
    }finally{ client.release() }
  }catch(e){
    return res.json({ok:true, count: MOCK_INCIDENTS.length, incidents: MOCK_INCIDENTS})
  }
}

export async function postIncident(req,res){
  try{
    const { lat,lng,description,photo_url } = req.body
    // Attempt DB insert
    const client = await pool.connect()
    try{
      const r = await client.query('INSERT INTO incidents (lat,lng,description,photo_url,created_at,status) VALUES ($1,$2,$3,$4,now(),$5) RETURNING id, lat,lng,description,photo_url,created_at,status',[lat,lng,description,photo_url,'pending'])
      return res.json({ok:true, incident: r.rows[0]})
    }finally{ client.release() }
  }catch(e){
    // fallback to mock array
    const id = INCIDENT_SEQ++
    const rec = { id, lat, lng, description, photo_url, created_at: new Date().toISOString(), status: 'pending' }
    MOCK_INCIDENTS.unshift(rec)
    return res.json({ok:true, incident: rec})
  }
}
