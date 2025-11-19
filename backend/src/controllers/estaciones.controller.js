import * as model from '../models/estacion.model.js'
import { MOCK_POLLING_STATIONS } from '../mockData.js'

export async function getEstaciones(req,res){
  try{
    const list = await model.listEstaciones()
    return res.json({ ok:true, count: Array.isArray(list)? list.length:0, estaciones: list })
  }catch(e){
    console.warn('DB unavailable, returning mock polling stations', e && e.message)
    return res.json({ ok:true, count: MOCK_POLLING_STATIONS.length, estaciones: MOCK_POLLING_STATIONS })
  }
}

export async function getEstacion(req,res){
  try{
    const id = req.params.id
    const e = await model.getEstacionById(id)
    if(!e) return res.status(404).json({error:'not found'})
    res.json({ ok:true, estacion: e })
  }catch(e){
    console.warn('DB unavailable, returning mock polling station')
    const id = parseInt(req.params.id,10)
    const found = MOCK_POLLING_STATIONS.find(x=>x.id===id)
    if(!found) return res.status(404).json({error:'not found'})
    res.json({ ok:true, estacion: found })
  }
}
