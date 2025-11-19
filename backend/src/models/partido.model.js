import { pool } from '../config/db.js'

export async function listPartidos(){
  const res = await pool.query('SELECT id, name, abbreviation, description FROM partidos ORDER BY name')
  return res.rows
}

export async function getPartidoById(id){
  const res = await pool.query('SELECT id, name, abbreviation, description FROM partidos WHERE id = $1', [id])
  return res.rows[0]
}
