import * as model from '../models/partido.model.js'
import { MOCK_PARTIES } from '../mockData.js'

export async function getPartidos(req,res){
  try{
    const list = await model.listPartidos()
    return res.json({ ok:true, count: Array.isArray(list)? list.length:0, parties: list })
  }catch(e){ console.error(e); res.status(500).json({error:'server'}) }
}

export async function getPartido(req,res){
  try{
    const id = req.params.id
    const p = await model.getPartidoById(id)
    if(!p) return res.status(404).json({error:'not found'})
    return res.json({ ok:true, party: p })
  }catch(e){ console.error(e); res.status(500).json({error:'server'}) }
}
