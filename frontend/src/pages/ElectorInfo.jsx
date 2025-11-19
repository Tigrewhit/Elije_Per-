import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function ElectorInfo() {
  const [location, setLocation] = useState(null)
  const [loading, setLoading] = useState(false)

  const requestLocation = () => {
    if (!navigator.geolocation) {
      alert('La geolocalización no está disponible en este navegador')
      return
    }
    
    setLoading(true)
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        })
        setLoading(false)
      },
      (error) => {
        alert('No se pudo obtener la ubicación: ' + error.message)
        setLoading(false)
      }
    )
  }

  return (
    <div className="container-mobile" style={{
      padding: '0',
      borderRadius: '16px',
      background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
      minHeight: '100vh'
    }}>
      <div className="p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10">
        <div className="bg-white shadow-xl border border-gray-200 p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10" style={{borderRadius: '18px', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'}}>
      <div className="mb-6">
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800 mb-2 sm:mb-3 md:mb-4 lg:mb-6 px-1 sm:px-2">🇵🇪 Elecciones Generales 2026: Información Clave para Electores</h1>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 mb-2 sm:mb-3 md:mb-4 px-1 sm:px-2"><strong>Fecha de la Jornada Electoral:</strong> Domingo, 12 de abril de 2026</p>
      </div>

      <section className="bg-blue-50 border border-blue-200 p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 mb-4 sm:mb-5 md:mb-6 lg:mb-8" style={{borderRadius: '16px', marginTop: '20px sm:24px md:32px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}}>
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold mb-3 sm:mb-4 md:mb-5 lg:mb-6 text-blue-800 px-1 sm:px-2">🗳️ Consulta tu mesa y geolocalización de donde votar</h2>
        <p className="text-sm sm:text-base text-gray-700 mb-4">Encuentra tu centro de votación, mesa asignada y ubicación precisa para las Elecciones Generales 2026</p>
        
        <div style={{marginTop: '24px'}}>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 sm:gap-8 mb-6 sm:mb-8">
            <a 
              href="https://consultaelectoral.onpe.gob.pe/inicio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 sm:gap-3 md:gap-4 bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200 font-medium px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4 m-1 sm:m-2 text-xs sm:text-sm md:text-base shadow-md hover:shadow-lg"
              style={{borderRadius: '12px', minWidth: 'auto'}}
            >
              <span className="text-2xl">📋</span>
              <div>
                <div className="font-semibold">Ubicación del lugar de votación</div>
                <div className="text-sm text-blue-100">Consulta con tu DNI - ONPE Oficial</div>
              </div>
            </a>
            
            <div className="bg-green-600 text-black transition-all duration-200 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4 m-1 sm:m-2" style={{borderRadius: '12px', border: '2px solid #16a34a', boxShadow: '0 6px 15px rgba(34, 197, 94, 0.25)'}}>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🗺️</span>
                <div>
                  <div className="font-semibold text-black">Si eres miembro de mesa</div>
                  <div className="text-sm text-black">Geolocalización de votaciones</div>
                </div>
              </div>
              <a 
                href="https://eg2026.onpe.gob.pe/para-electores/elige-tu-local-de-votacion/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-3 bg-white text-black px-4 py-2 hover:bg-green-50 transition-colors font-medium text-sm"
                style={{borderRadius: '8px'}}
              >
                Acceder al servicio →
              </a>
            </div>
          </div>

          <div className="bg-white border border-blue-200 p-4 sm:p-6" style={{borderRadius: '12px', marginTop: '16px'}}>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-blue-600">ℹ️</span>
              <strong className="text-blue-800">Información importante:</strong>
            </div>
            <ul className="text-xs sm:text-sm text-gray-700 space-y-1">
              <li>• <strong>Primera opción:</strong> Para consultar tu lugar de votación y mesa específica</li>
              <li>• <strong>Segunda opción:</strong> Para miembros de mesa y localización geográfica precisa</li>
              <li>• Ambos servicios son oficiales de ONPE para las Elecciones Generales 2026</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ¡Pronto Podrás Elegir Dónde Votar! */}
      <section className="bg-yellow-50 border border-yellow-200 p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 mb-4 sm:mb-5 md:mb-6 lg:mb-8" style={{borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}}>
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-yellow-800">1. 🗺️ ¡Pronto Podrás Elegir Dónde Votar!</h2>
        <p className="text-gray-700 mb-4 text-sm sm:text-base">La Oficina Nacional de Procesos Electorales (ONPE) está por habilitar la herramienta más importante para los ciudadanos: <strong>"Elige Tu Local de Votación" (ETLV)</strong>.</p>
        
        <div className="overflow-x-auto">
          <table className="w-full bg-white border border-gray-200" style={{borderRadius: '12px'}}>
            <thead className="bg-gray-50">
              <tr>
                <th className="px-2 sm:px-4 py-2 sm:py-3 text-left font-semibold text-gray-800 border-b text-xs sm:text-sm">Herramienta</th>
                <th className="px-2 sm:px-4 py-2 sm:py-3 text-left font-semibold text-gray-800 border-b text-xs sm:text-sm">Acción del Elector</th>
                <th className="px-2 sm:px-4 py-2 sm:py-3 text-left font-semibold text-gray-800 border-b text-xs sm:text-sm">Estado Actual (Noviembre 2025)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-2 sm:px-4 py-2 sm:py-3 font-medium text-blue-800 text-xs sm:text-sm">Elige Tu Local de Votación (ETLV)</td>
                <td className="px-2 sm:px-4 py-2 sm:py-3 text-gray-700 text-xs sm:text-sm">Utiliza un mapa interactivo para seleccionar hasta 3 locales cercanos a tu domicilio o trabajo, optimizando tu tiempo el día de la elección.</td>
                <td className="px-2 sm:px-4 py-2 sm:py-3 text-yellow-700 font-medium text-xs sm:text-sm">🚀 Lanzamiento Inminente: Se proyecta su activación a finales de noviembre de 2025. ¡Atento al portal!</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-green-800">Consulta tu Local Final</td>
                <td className="px-4 py-3 text-gray-700">Herramienta para confirmar tu local de votación, dirección y número de mesa asignada por la ONPE.</td>
                <td className="px-4 py-3 text-gray-600">Estará disponible después de que concluya el plazo del ETLV y la ONPE haga la asignación final.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Noticias y Contexto Político */}
      <section className="bg-purple-50 border border-purple-200 p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 mb-4 sm:mb-5 md:mb-6 lg:mb-8" style={{borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}}>
        <h2 className="text-xl font-semibold mb-4 text-purple-800">2. 📰 Noticias y Contexto Político</h2>
        <p className="text-gray-700 mb-4">Para mantenerte informado sobre el avance de las candidaturas, el desarrollo de las primarias y el análisis político de los comicios:</p>
        
        <div className="bg-white p-4 border border-purple-200" style={{borderRadius: '12px'}}>
          <div className="flex items-center gap-3">
            <span className="text-2xl">📰</span>
            <div>
              <p className="font-medium text-purple-800">Cobertura de El Comercio:</p>
              <a href="https://elcomercio.pe/politica/" target="_blank" rel="noopener noreferrer" 
                 className="text-purple-600 hover:text-purple-800 hover:underline">
                Revisa la sección de Política y Elecciones 2026 en el diario El Comercio aquí →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Video Informativo */}
      <section id="video-tutorial" className="bg-red-50 border border-red-200 p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 mb-4 sm:mb-5 md:mb-6 lg:mb-8" style={{borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}}>
        <h2 className="text-xl font-semibold mb-4 text-red-800">3. 📺 Video Informativo: Guía Electoral</h2>
        <p className="text-gray-700 mb-4">Conoce más detalles sobre el proceso electoral 2026:</p>
        
        <div className="bg-white p-4 border" style={{borderRadius: '12px'}}>
          <video 
            controls
            width="100%"
            height="auto"
            preload="metadata"
            style={{borderRadius: '8px', maxWidth: '100%', height: 'auto'}}
          >
            <source src="/videos/Cedula_votacion.mp4" type="video/mp4" />
            Tu navegador no soporta la reproducción de video HTML5. 
            <a href="/videos/Cedula_votacion.mp4" style={{color: '#3b82f6', textDecoration: 'underline'}}>
              Descargar video
            </a>
          </video>
        </div>
      </section>

      {/* Los Cargos que Elegirás */}
      <section className="bg-green-50 border border-green-200 p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 mb-4 sm:mb-5 md:mb-6 lg:mb-8" style={{borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}}>
        <h2 className="text-xl font-semibold mb-4 text-green-800">4. 🏛️ Los Cargos que Elegirás y Novedades Tecnológicas</h2>
        
        <div className="space-y-4">
          <div className="bg-white p-4 border border-green-200" style={{borderRadius: '12px'}}>
            <h3 className="font-semibold text-green-800 mb-2">Cargos a Elegir:</h3>
            <p className="text-gray-700">Se restablece el sistema bicameral. Votarás por <strong>Presidente, Vicepresidentes, 60 Senadores, 130 Diputados y Representantes al Parlamento Andino</strong>.</p>
          </div>
          
          <div className="bg-white p-4 border border-green-200" style={{borderRadius: '12px'}}>
            <h3 className="font-semibold text-green-800 mb-2">Voto Digital:</h3>
            <p className="text-gray-700">Se amplía la aplicación del Voto Digital para grupos específicos (militares, policiales, salud, peruanos en el extranjero) para modernizar el proceso y asegurar un conteo más rápido.</p>
          </div>
        </div>
      </section>

      {/* Próximos Eventos Clave */}
      <section className="bg-orange-50 border border-orange-200 p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 mb-4 sm:mb-5 md:mb-6 lg:mb-8" style={{borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}}>
        <h2 className="text-xl font-semibold mb-4 text-orange-800">5. 🔔 Próximos Eventos Clave</h2>
        
        <div className="space-y-3">
          <div className="bg-white p-4 border border-orange-200" style={{borderRadius: '12px'}}>
            <div className="flex items-center gap-3">
              <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</span>
              <div>
                <p className="font-semibold text-orange-800">Inscripción de Candidatos Finales:</p>
                <p className="text-gray-700">23 de diciembre de 2025</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 border border-orange-200" style={{borderRadius: '12px'}}>
            <div className="flex items-center gap-3">
              <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</span>
              <div>
                <p className="font-semibold text-orange-800">Sorteo de Miembros de Mesa:</p>
                <p className="text-gray-700">29 de enero de 2026. (Podrás consultar si fuiste seleccionado en la misma web de la ONPE)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentos para Descargar */}
      <section className="bg-indigo-50 border border-indigo-200 p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 mb-4 sm:mb-5 md:mb-6 lg:mb-8" style={{borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}}>
        <h2 className="text-xl font-semibold mb-4 text-indigo-800">📄 Documentos Oficiales para Descargar</h2>
        <p className="text-gray-700 mb-4">Descarga los documentos oficiales relacionados con las Elecciones Generales 2026:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="/documentos/pdfs/guia-del-elector-2026.pdf" download="guia-del-elector-2026.pdf" className="flex items-center gap-3 bg-indigo-500 text-black p-4 border border-indigo-200 hover:bg-indigo-600 transition-colors font-semibold" style={{borderRadius: '12px'}}>
            <span className="text-2xl">📋</span>
            <div>
              <p className="font-semibold">Presidenciales</p>
              <p className="text-sm text-black">Conoce más sobre el proceso electoral</p>
            </div>
          </a>
          
          <a href="/documentos/pdfs/cronograma-electoral-2026.pdf" download="cronograma-electoral-2026.pdf" className="flex items-center gap-3 bg-green-500 text-black p-4 border border-green-200 hover:bg-green-600 transition-colors font-semibold" style={{borderRadius: '12px'}}>
            <span className="text-2xl">📊</span>
            <div>
              <p className="font-semibold">Congresales</p>
              <p className="text-sm text-black">Conoce más sobre el proceso electoral</p>
            </div>
          </a>
          
          <a href="/documentos/pdfs/sistema-bicameral-2026.pdf" download="sistema-bicameral-2026.pdf" className="flex items-center gap-3 bg-purple-500 text-black p-4 border border-purple-200 hover:bg-purple-600 transition-colors font-semibold" style={{borderRadius: '12px'}}>
            <span className="text-2xl">🏛️</span>
            <div>
              <p className="font-semibold">Parlamento Andino</p>
              <p className="text-sm text-black">Conoce más sobre el proceso electoral</p>
            </div>
          </a>
          
          <a href="/documentos/pdfs/voto-digital-2026.pdf" download="voto-digital-2026.pdf" className="flex items-center gap-3 bg-blue-500 text-black p-4 border border-blue-200 hover:bg-blue-600 transition-colors font-semibold" style={{borderRadius: '12px'}}>
            <span className="text-2xl">💻</span>
            <div>
              <p className="font-semibold">Voto digital</p>
              <p className="text-sm text-black">Conoce todo acerca del voto digital</p>
            </div>
          </a>
        </div>
      </section>

      {/* Recomendación Final */}
      <section className="bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8" style={{borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}}>
        <div className="flex items-center gap-3 mb-3">
          <span className="text-2xl">💡</span>
          <h2 className="text-xl font-semibold text-blue-800">Recomendación:</h2>
        </div>
        <p className="text-gray-700">
          No olvides visitar el portal oficial de la ONPE para las Elecciones 2026 
          <a href="https://eg2026.onpe.gob.pe" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium"> 
            (eg2026.onpe.gob.pe)
          </a> a finales de noviembre para ser de los primeros en usar la herramienta ETLV y seleccionar tu local de votación.
        </p>
      </section>
        </div>
      </div>
    </div>
  )
}