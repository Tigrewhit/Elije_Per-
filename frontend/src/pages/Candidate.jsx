import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { get } from '../services/api'
import ProvenanceModal from '../components/ProvenanceModal'

export default function Candidate(){
  const { id } = useParams()
  const [candidate, setCandidate] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [provOpen, setProvOpen] = useState(false)
  const [provData, setProvData] = useState(null)

  useEffect(()=>{
    let mounted=true
    setLoading(true)
    get(`/candidates/${id}`).then(res=>{
      if(!mounted) return
      setCandidate(res.data)
    }).catch(e=>{ if(mounted) setError('No se pudo cargar el candidato') }).finally(()=>{ if(mounted) setLoading(false) })
    return ()=> mounted=false
  },[id])

  async function openProven(){
    try{
      const r = await get(`/proveniencia/${id}`)
      setProvData(r.data && r.data.proveniencia ? r.data.proveniencia : r.data)
    }catch(e){ setProvData(null) }
    setProvOpen(true)
  }

  if(loading) return <div><h3 className='font-semibold'>Perfil</h3><p>Cargando...</p></div>
  if(error) return <div className='text-red-600'>{error}</div>
  if(!candidate) return <div>No encontrado</div>

  return (
    <div>
      <div style={{display:'flex',gap:16,alignItems:'center'}}>
        <img src={candidate.photo_url || '/icon-192.png'} alt='' style={{width:96,height:96,borderRadius:8}} />
        <div>
          <h2 style={{margin:0}}>{candidate.name}</h2>
          <div style={{color:'#6b7280'}}>{candidate.party}</div>
          {candidate.cv_url && <a href={candidate.cv_url} target='_blank' rel='noreferrer' className='underline'>Descargar CV</a>}
          <div style={{marginTop:8}}><button onClick={openProven} className='px-2 py-1 bg-gray-200 rounded'>Ver procedencia</button></div>
        </div>
      </div>

      <section style={{marginTop:16}}>
        <h3 className='font-semibold'>Propuestas</h3>
        {candidate.proposals && candidate.proposals.length>0 ? (
          <div>
            {candidate.proposals.map((p,i)=>(
              <div key={i} style={{padding:12,border:'1px solid #e5e7eb',borderRadius:6,marginTop:8}}>
                <div style={{fontWeight:700}}>{p.title} <small style={{color:'#6b7280',marginLeft:8}}>({p.sector})</small></div>
                <div style={{color:'#374151'}}>{p.description}</div>
              </div>
            ))}
          </div>
        ) : <div>No hay propuestas disponibles.</div>}
      </section>

      <section style={{marginTop:16}}>
        <h3 className='font-semibold'>Actividades</h3>
        {candidate.activities && candidate.activities.length>0 ? (
          <ul className='mt-2 space-y-2'>
            {candidate.activities.map((a,i)=>(<li key={i} className='p-2 border rounded'>{a.date} — {a.title}</li>))}
          </ul>
        ) : <div>No hay actividades registradas.</div>}
      </section>
    </div>
  )
}

