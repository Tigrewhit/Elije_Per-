import React, {useEffect, useState} from 'react'
import { get } from '../services/api'
import { Link } from 'react-router-dom'

export default function Estaciones(){
  const [list,setList]=useState([])
  const [loading,setLoading]=useState(true)
  const [error,setError]=useState(null)

  useEffect(()=>{
    let mounted=true
    get('/estaciones').then(res=>{
      if(!mounted) return
      const data = res.data && res.data.length ? res.data : (res.data && res.data.estaciones ? res.data.estaciones : res.data)
      setList(data)
    }).catch(e=>{ if(mounted) setError('No hay estaciones disponibles') }).finally(()=>{ if(mounted) setLoading(false) })
    return ()=> mounted=false
  },[])

  if(loading) return (<div><h3 className='font-semibold'>Estaciones de votación</h3><p>Cargando...</p></div>)
  if(error) return (<div className='text-red-600'>{error}</div>)

  return (
    <div>
      <h3 className='font-semibold'>Estaciones de votación</h3>
      <ul className='mt-2 space-y-2'>
        {list.map(s=> (
          <li key={s.id} className='p-2 border rounded'>
            <Link to={`/estaciones/${s.id}`} className='font-medium text-primary underline'>{s.name || s.nombre}</Link>
            <div className='text-sm text-gray-600'>{s.address || s.direccion}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
