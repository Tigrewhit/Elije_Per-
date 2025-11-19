import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { get } from '../services/api'

export default function Estacion(){
  const { id } = useParams()
  const [station, setStation] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(()=>{
    let mounted=true
    get(`/estaciones/${id}`).then(res=>{
      if(!mounted) return
      const data = res.data && res.data.id ? res.data : (res.data && res.data.estacion ? res.data.estacion : res.data)
      setStation(data)
    }).catch(e=>{ if(mounted) setError('No se encontró la estación') }).finally(()=>{ if(mounted) setLoading(false) })
    return ()=> mounted=false
  },[id])

  if(loading) return <div>Cargando estación...</div>
  if(error) return <div className='text-red-600'>{error}</div>
  if(!station) return <div>Estación no encontrada</div>

  return (
    <div>
      <h3 className='font-semibold'>{station.name || station.nombre}</h3>
      <div className='text-sm text-gray-600'>{station.address || station.address}</div>
      <div style={{marginTop:12}}>
        <strong>Horario:</strong> {station.hours || station.horario || '07:00-17:00'}
      </div>
      <div style={{marginTop:8}}>
        <strong>Contacto:</strong> {station.contact || station.contacto || 'N/A'}
      </div>
      <div style={{marginTop:8}}>
        <strong>Accesibilidad:</strong> {station.accessibility? 'Sí':'No'}
      </div>
      {station.lat && station.lng && (
        <div style={{marginTop:12}}>
          <a href={`https://www.openstreetmap.org/?mlat=${station.lat}&mlon=${station.lng}#map=18/${station.lat}/${station.lng}`} target='_blank' rel='noreferrer' className='underline'>Ver en mapa</a>
        </div>
      )}
    </div>
  )
}
