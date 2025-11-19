import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { get } from '../services/api'

export default function VoterGuide(){
  const { id } = useParams()
  const [guide,setGuide]=useState(null)
  const [loading,setLoading]=useState(true)
  const [error,setError]=useState(null)

  useEffect(()=>{
    let mounted=true
    get(`/voter-guides/${id}`).then(res=>{
      if(!mounted) return
      const data = res.data && res.data.id ? res.data : res.data
      setGuide(data)
    }).catch(e=>{ if(mounted) setError('No se encontró la guía') }).finally(()=>{ if(mounted) setLoading(false) })
    return ()=> mounted=false
  },[id])

  if(loading) return <div>Cargando guía...</div>
  if(error) return <div className='text-red-600'>{error}</div>
  if(!guide) return <div>Guía no encontrada</div>

  return (
    <div>
      <h3 className='font-semibold'>{guide.title || guide.titulo}</h3>
      <div className='text-sm text-gray-600'>{guide.language || guide.language}</div>
      <div style={{marginTop:12}}>{guide.body}</div>
      {guide.attachments && guide.attachments.length>0 && (
        <div style={{marginTop:12}}>
          <strong>Descargas:</strong>
          <ul>
            {guide.attachments.map((a,i)=>(<li key={i}><a href={a} target='_blank' rel='noreferrer' className='underline'>{a}</a></li>))}
          </ul>
        </div>
      )}
    </div>
  )
}
