import { MOCK_NEWS } from '../mockData.js'
import { pool } from '../config/db.js'

export async function getNews(req,res){
  try{
    const client = await pool.connect()
    try{
      const r = await client.query('SELECT id, titulo, cuerpo, fuente, url, publicado_en FROM noticias ORDER BY publicado_en DESC LIMIT 50')
      return res.json({ok:true, count: r.rowCount, news: r.rows})
    }finally{ client.release() }
  }catch(e){
    console.warn('DB unavailable, returning mock news', e && e.message)
    return res.json({ok:true, count: MOCK_NEWS.length, news: MOCK_NEWS})
  }
}
