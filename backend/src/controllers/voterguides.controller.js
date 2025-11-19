import { MOCK_VOTER_GUIDES } from '../mockData.js'

export async function listVoterGuides(req,res){
  try{
    // DB not implemented for guides yet; return mocks
    return res.json({ok:true, count: MOCK_VOTER_GUIDES.length, guides: MOCK_VOTER_GUIDES})
  }catch(e){ console.error(e); res.status(500).json({error:'server'}) }
}

export async function getVoterGuide(req,res){
  try{
    const id = parseInt(req.params.id,10)
    const found = MOCK_VOTER_GUIDES.find(g=>g.id===id)
    if(!found) return res.status(404).json({error:'not found'})
    return res.json(found)
  }catch(e){ console.error(e); res.status(500).json({error:'server'}) }
}
