import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { get } from '../services/api'

export default function Party(){
  const { id } = useParams()
  const [party,setParty]=useState(null)
  const [loading,setLoading]=useState(true)
  const [error,setError]=useState(null)

  useEffect(()=>{
    let mounted=true
    get(`/partidos/${id}`).then(res=>{
      if(!mounted) return
      const data = res.data && res.data.party ? res.data.party : res.data
      setParty(data)
    }).catch(e=>{ if(mounted) setError('No se encontró la agrupación') }).finally(()=>{ if(mounted) setLoading(false) })
    return ()=> mounted=false
  },[id])

  if(loading) return <div>Cargando agrupación...</div>
  if(error) return <div className='text-red-600'>{error}</div>
  if(!party) return <div>Agrupación no encontrada</div>

  return (
    <div>
      <h3 className='font-semibold'>{party.name}</h3>
      <div className='text-sm text-gray-600'>{party.abbreviation}</div>
      <div style={{marginTop:12}}>{party.description}</div>
      {party.logo_url && <img src={party.logo_url} alt='' style={{width:120,marginTop:12}} />}
      {party.source_url && <div style={{marginTop:12}}>Fuente: <a href={party.source_url} target='_blank' rel='noreferrer' className='underline'>{party.source_url}</a></div>}
    </div>
  )
}
