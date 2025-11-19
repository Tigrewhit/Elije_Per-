import { pool } from '../config/db.js'

export async function listEstaciones(){
  const res = await pool.query('SELECT id, name, address, latitude, longitude FROM estaciones_votacion ORDER BY name')
  return res.rows
}

export async function getEstacionById(id){
  const res = await pool.query('SELECT id, name, address, latitude, longitude FROM estaciones_votacion WHERE id = $1', [id])
  return res.rows[0]
}
