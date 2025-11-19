import React, {useEffect, useState} from 'react'
import { get } from '../services/api'

export default function Comparator(){
  const [candidates, setCandidates] = useState([])
  const [left, setLeft] = useState(null)
  const [right, setRight] = useState(null)

  useEffect(()=>{
    let mounted=true
    get('/candidates').then(res=>{
      if(!mounted) return
      const list = (res.data && res.data.candidates) ? res.data.candidates : (res.data || [])
      setCandidates(list)
    }).catch(()=>{})
    return ()=> mounted=false
  },[])

  function compareBySector(){
    if(!left || !right) return null
    const sectors = new Set()
    (left.proposals||[]).forEach(p=>sectors.add(p.sector))
    (right.proposals||[]).forEach(p=>sectors.add(p.sector))
    const rows = [...sectors].map(sec=>({
      sector: sec,
      left: (left.proposals||[]).find(p=>p.sector===sec) || null,
      right: (right.proposals||[]).find(p=>p.sector===sec) || null
    }))
    return rows
  }

  const rows = compareBySector()

  return (
    <div>
      <h3 className='font-semibold'>Comparador de propuestas</h3>
      <div style={{display:'flex',gap:12,marginTop:12}}>
        <select onChange={e=>setLeft(candidates.find(c=>String(c.id)===e.target.value))} value={left?.id||''}>
          <option value=''>Seleccionar candidato A</option>
          {candidates.map(c=>(<option key={c.id} value={c.id}>{c.name}</option>))}
        </select>
        <select onChange={e=>setRight(candidates.find(c=>String(c.id)===e.target.value))} value={right?.id||''}>
          <option value=''>Seleccionar candidato B</option>
          {candidates.map(c=>(<option key={c.id} value={c.id}>{c.name}</option>))}
        </select>
      </div>

      {rows && rows.length>0 && (
        <table className='mt-4' style={{width:'100%',borderCollapse:'collapse'}}>
          <thead>
            <tr><th style={{textAlign:'left'}}>Sector</th><th style={{textAlign:'left'}}>Candidato A</th><th style={{textAlign:'left'}}>Candidato B</th></tr>
          </thead>
          <tbody>
            {rows.map(r=>(
              <tr key={r.sector} style={{borderTop:'1px solid #e5e7eb'}}>
                <td style={{padding:8}}>{r.sector}</td>
                <td style={{padding:8}}>{r.left? (<div><strong>{r.left.title}</strong><div>{r.left.description}</div></div>):'—'}</td>
                <td style={{padding:8}}>{r.right? (<div><strong>{r.right.title}</strong><div>{r.right.description}</div></div>):'—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
