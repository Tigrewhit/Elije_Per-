import { pool } from '../config/db.js'
export async function getCalendar(){
  const res = await pool.query('SELECT id, title, date, description FROM calendario ORDER BY date')
  return res.rows
}
