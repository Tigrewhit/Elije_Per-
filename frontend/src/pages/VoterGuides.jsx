import React, {useEffect, useState} from 'react'
import { get } from '../services/api'
import { Link } from 'react-router-dom'

export default function VoterGuides(){
  const [list,setList]=useState([])
  const [loading,setLoading]=useState(true)
  const [error,setError]=useState(null)

  useEffect(()=>{
    let mounted=true
    get('/voter-guides').then(res=>{
      if(!mounted) return
      const data = res.data && res.data.guides ? res.data.guides : (res.data || [])
      setList(data)
    }).catch(e=>{ if(mounted) setError('No hay guías disponibles') }).finally(()=>{ if(mounted) setLoading(false) })
    return ()=> mounted=false
  },[])

  if(loading) return (<div><h3 className='font-semibold'>Guías del votante</h3><p>Cargando...</p></div>)
  if(error) return (<div className='text-red-600'>{error}</div>)

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="mb-6">
        <h1 className='text-2xl font-bold text-gray-800 mb-2'>Guías del Votante</h1>
        <p className="text-gray-600">Instrucciones oficiales sobre la cédula de sufragio, voto digital y procedimientos para las Elecciones Generales 2026</p>
        
        {/* Enlaces a plataformas oficiales */}
        <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">🏛️ Fuentes Oficiales JNE</h3>
          <div className="flex flex-wrap gap-2">
            <a 
              href="https://votoinformado.jne.gob.pe/voto" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors"
            >
              🗳️ Voto Informado JNE
            </a>
            <Link 
              to="/official-platforms"
              className="inline-flex items-center gap-1 bg-gray-600 text-white px-3 py-1 rounded text-sm hover:bg-gray-700 transition-colors"
            >
              🌐 Ver Todas las Plataformas
            </Link>
          </div>
        </div>
      </div>

      {/* Guía destacada - Cédula de sufragio */}
      <section className="mb-8 p-6 bg-blue-50 rounded-lg">
        <h2 className="text-xl font-semibold mb-4 text-blue-800">📝 Instrucciones sobre la cédula de sufragio</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3">La cédula tiene 5 secciones:</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-white rounded border">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</span>
                <div>
                  <p className="font-medium">Presidente y Vicepresidentes</p>
                  <p className="text-sm text-gray-600">Marca una plancha completa (1 Presidente + 2 Vicepresidentes)</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-white rounded border">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</span>
                <div>
                  <p className="font-medium">Senadores</p>
                  <p className="text-sm text-gray-600">60 senadores a nivel nacional + voto preferencial opcional</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-white rounded border">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</span>
                <div>
                  <p className="font-medium">Diputados</p>
                  <p className="text-sm text-gray-600">130 diputados por distrito + voto preferencial opcional</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-white rounded border">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">4</span>
                <div>
                  <p className="font-medium">Parlamento Andino</p>
                  <p className="text-sm text-gray-600">5 representantes peruanos a nivel nacional</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-white rounded border">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">5</span>
                <div>
                  <p className="font-medium">Observaciones</p>
                  <p className="text-sm text-gray-600">Opción para voto en blanco</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="p-4 bg-white rounded border">
              <h4 className="font-semibold mb-3">Ejemplo de cédula:</h4>
              <div className="border-2 border-gray-300 p-4 rounded bg-gray-50 text-center">
                <div className="text-xs text-gray-500 mb-2">ELECCIONES GENERALES 2026</div>
                <div className="space-y-2 text-left text-xs">
                  <div className="border p-2 bg-yellow-100">1. PRESIDENTE Y VICEPRESIDENTES</div>
                  <div className="border p-2 bg-green-100">2. SENADORES (60)</div>
                  <div className="border p-2 bg-blue-100">3. DIPUTADOS (130)</div>
                  <div className="border p-2 bg-purple-100">4. PARLAMENTO ANDINO (5)</div>
                  <div className="border p-2 bg-gray-100">5. OBSERVACIONES</div>
                </div>
                <div className="text-xs text-gray-500 mt-2">Imagen referencial</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guías oficiales */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">📚 Documentos oficiales descargables</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {list.map(g=> (
            <div key={g.id} className='p-4 bg-white border rounded-lg hover:shadow-md transition-shadow'>
              <div className="text-2xl mb-2">📖</div>
              <h3 className="font-semibold mb-2">{g.title || g.titulo}</h3>
              <p className="text-sm text-gray-600 mb-3">{g.body}</p>
              <div className="text-xs text-gray-500 mb-3">
                Publicado: {g.published_at ? new Date(g.published_at).toLocaleDateString() : 'N/A'}
              </div>
              <div className="flex gap-2">
                <Link to={`/voter-guides/${g.id}`} className='text-blue-600 hover:underline text-sm'>
                  📄 Ver detalles
                </Link>
                {g.attachments && g.attachments.length > 0 && (
                  <a href={g.attachments[0]} target="_blank" rel="noreferrer" className='text-green-600 hover:underline text-sm'>
                    📥 Descargar PDF
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Información adicional */}
      <section className="grid md:grid-cols-2 gap-6">
        <div className="p-6 bg-green-50 rounded-lg">
          <h3 className="text-lg font-semibold mb-3 text-green-800">✅ Cómo marcar correctamente</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><span className="text-green-600">✓</span> Usa solo el lápiz proporcionado</li>
            <li className="flex items-center gap-2"><span className="text-green-600">✓</span> Marca con una X o rellena el círculo</li>
            <li className="flex items-center gap-2"><span className="text-green-600">✓</span> Una sola marca por sección</li>
            <li className="flex items-center gap-2"><span className="text-green-600">✓</span> El voto es secreto</li>
          </ul>
        </div>
        
        <div className="p-6 bg-red-50 rounded-lg">
          <h3 className="text-lg font-semibold mb-3 text-red-800">❌ Evita estos errores</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><span className="text-red-600">✗</span> No hagas marcas fuera de las casillas</li>
            <li className="flex items-center gap-2"><span className="text-red-600">✗</span> No uses otros útiles de escritura</li>
            <li className="flex items-center gap-2"><span className="text-red-600">✗</span> No marques más de una opción por sección</li>
            <li className="flex items-center gap-2"><span className="text-red-600">✗</span> No fotografíes tu voto</li>
          </ul>
        </div>
      </section>
    </div>
  )
}
