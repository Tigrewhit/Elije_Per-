import React, {useState} from 'react'
import { enqueueIncident } from '../services/incidents.service'

export default function Incidents(){
  const [lat,setLat]=useState('')
  const [lng,setLng]=useState('')
  const [desc,setDesc]=useState('')
  const [msg,setMsg]=useState(null)

  function onUseGeoloc(){
    if(!navigator.geolocation) return setMsg('Geolocalización no disponible')
    navigator.geolocation.getCurrentPosition(pos=>{
      setLat(pos.coords.latitude)
      setLng(pos.coords.longitude)
      setMsg('Ubicación capturada')
    }, err=> setMsg('Permiso denegado o error'))
  }

  async function onSubmit(e){
    e.preventDefault()
    const rec = { lat, lng, description: desc }
    await enqueueIncident(rec)
    setMsg('Reporte guardado en cola (se enviará cuando haya conexión)')
    setDesc('')
  }

  return (
    <div>
      <h3 className='font-semibold'>Reportar incidencia</h3>
      <form onSubmit={onSubmit} className='mt-4'>
        <div>
          <label>Latitud</label>
          <input value={lat} onChange={e=>setLat(e.target.value)} className='w-full p-2 border rounded' />
        </div>
        <div className='mt-2'>
          <label>Longitud</label>
          <input value={lng} onChange={e=>setLng(e.target.value)} className='w-full p-2 border rounded' />
        </div>
        <div className='mt-2'>
          <label>Descripción</label>
          <textarea value={desc} onChange={e=>setDesc(e.target.value)} className='w-full p-2 border rounded' />
        </div>
        <div className='mt-2 flex gap-2'>
          <button type='button' onClick={onUseGeoloc} className='px-3 py-1 bg-gray-200 rounded'>Usar mi ubicación</button>
          <button type='submit' className='px-3 py-1 bg-blue-600 text-white rounded'>Reportar</button>
        </div>
      </form>
      {msg && <div className='mt-2 text-sm text-gray-700'>{msg}</div>}
    </div>
  )
}
