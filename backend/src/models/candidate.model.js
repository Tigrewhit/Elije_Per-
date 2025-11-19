import { pool } from '../config/db.js'
export async function listCandidates(){
  const res = await pool.query('SELECT id, name, party, bio FROM candidatos ORDER BY name')
  return res.rows
}

export async function getCandidateById(id){
  const res = await pool.query('SELECT id, name, party, bio FROM candidatos WHERE id = $1', [id])
  return res.rows[0]
}
