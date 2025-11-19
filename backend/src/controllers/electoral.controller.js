import * as model from '../models/calendar.model.js'
export async function getCalendar(req, res) {
  try { const ev = await model.getCalendar(); res.json(ev) } catch (e) { console.error(e); res.status(500).json({ error: 'server' }) }
}
