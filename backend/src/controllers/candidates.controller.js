import * as model from '../models/candidate.model.js'
import { MOCK_CANDIDATES } from '../mockData.js'

export async function getCandidates(req,res){
  // try DB first, fall back to mocks on error
  try{
    const list = await model.listCandidates()
    return res.json({ ok: true, count: Array.isArray(list)? list.length : 0, candidates: list })
  }catch(e){
    console.warn('DB unavailable, returning mock candidates', e && e.message)
    return res.json({ ok: true, count: MOCK_CANDIDATES.length, candidates: MOCK_CANDIDATES })
  }
}

export async function getCandidate(req,res){
  try{
    const id = req.params.id
    const c = await model.getCandidateById(id)
    if(!c) return res.status(404).json({error:'not found'})
    res.json({ ok:true, candidate: c })
  }catch(e){
    console.warn('DB unavailable, returning mock candidate')
    const id = parseInt(req.params.id,10)
    const found = MOCK_CANDIDATES.find(x=>x.id===id)
    if(!found) return res.status(404).json({error:'not found'})
    res.json({ ok:true, candidate: found })
  }
}
