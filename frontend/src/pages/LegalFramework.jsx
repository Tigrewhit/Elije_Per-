import React from 'react'
import { Link } from 'react-router-dom'

export default function LegalFramework() {
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
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800 mb-2 sm:mb-3 md:mb-4 lg:mb-6 px-1 sm:px-2">⚖️ Marco Legal Electoral 2026</h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 mb-2 sm:mb-3 md:mb-4 px-1 sm:px-2">
              <strong>Normativa que rige las Elecciones Generales 2026</strong> - Conoce tus derechos, obligaciones y el marco jurídico electoral
            </p>
          </div>

          {/* Constitución y Leyes Principales */}
          <section className="bg-blue-50 border border-blue-200 p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 mb-4 sm:mb-5 md:mb-6 lg:mb-8" style={{borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}}>
            <h2 className="text-xl font-semibold mb-4 text-blue-800">📜 Normativa Electoral Fundamental</h2>
            
            <div className="space-y-4">
              <div className="bg-white p-4 border border-blue-200" style={{borderRadius: '12px'}}>
                <h3 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                  <span>🏛️</span>
                  Constitución Política del Perú - Artículos Electorales
                </h3>
                <ul className="text-gray-700 text-sm space-y-1 ml-4">
                  <li>• <strong>Art. 31:</strong> Derecho de participación política y sufragio</li>
                  <li>• <strong>Art. 176-187:</strong> Sistema electoral, JNE, ONPE y RENIEC</li>
                  <li>• <strong>Art. 90-91:</strong> Congreso bicameral (60 Senadores, 130 Diputados)</li>
                  <li>• <strong>Art. 110-118:</strong> Presidente y Vicepresidentes de la República</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 border border-blue-200" style={{borderRadius: '12px'}}>
                <h3 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                  <span>📋</span>
                  Ley Orgánica de Elecciones (LOE) - Ley N° 26859
                </h3>
                <ul className="text-gray-700 text-sm space-y-1 ml-4">
                  <li>• Regula el derecho de sufragio y sus garantías</li>
                  <li>• Establece el proceso electoral completo</li>
                  <li>• Define inscripción de candidaturas y organizaciones políticas</li>
                  <li>• Norma la propaganda electoral y fiscalización del proceso</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Derechos y Obligaciones */}
          <section className="bg-green-50 border border-green-200 p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 mb-4 sm:mb-5 md:mb-6 lg:mb-8" style={{borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}}>
            <h2 className="text-xl font-semibold mb-4 text-green-800">✋ Derechos y Obligaciones del Elector</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 border border-green-200" style={{borderRadius: '12px'}}>
                <h3 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                  <span>✅</span>
                  Tus Derechos Electorales
                </h3>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li><strong>• Sufragio activo:</strong> Elegir a tus representantes</li>
                  <li><strong>• Sufragio pasivo:</strong> Ser elegido (si cumples requisitos)</li>
                  <li><strong>• Información:</strong> Acceder a planes de gobierno y hojas de vida</li>
                  <li><strong>• Voto libre:</strong> Decidir sin presiones ni condicionamientos</li>
                  <li><strong>• Voto secreto:</strong> Tu decisión es confidencial</li>
                  <li><strong>• Elegir local:</strong> Seleccionar dónde votar (ETLV)</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 border border-green-200" style={{borderRadius: '12px'}}>
                <h3 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                  <span>⚠️</span>
                  Tus Obligaciones Electorales
                </h3>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li><strong>• Votar obligatorio:</strong> Para mayores de 18 años hasta 70 años</li>
                  <li><strong>• Portar DNI:</strong> Original y vigente el día de votación</li>
                  <li><strong>• Ser miembro de mesa:</strong> Si eres sorteado (18-70 años)</li>
                  <li><strong>• Respetar el proceso:</strong> No interferir ni presionar</li>
                  <li><strong>• Multa por no votar:</strong> S/88.00 soles (actualizada 2024)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Organismos Electorales */}
          <section className="bg-purple-50 border border-purple-200 p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 mb-4 sm:mb-5 md:mb-6 lg:mb-8" style={{borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}}>
            <h2 className="text-xl font-semibold mb-4 text-purple-800">🏛️ Sistema Electoral Peruano</h2>
            
            <div className="space-y-4">
              <div className="bg-white p-4 border border-purple-200" style={{borderRadius: '12px'}}>
                <h3 className="font-semibold text-purple-800 mb-2">🏛️ Jurado Nacional de Elecciones (JNE)</h3>
                <p className="text-gray-700 text-sm mb-2"><strong>Función:</strong> Máximo órgano de administración de justicia electoral</p>
                <ul className="text-gray-700 text-sm space-y-1 ml-4">
                  <li>• Inscribe organizaciones políticas y candidatos</li>
                  <li>• Resuelve apelaciones y recursos de nulidad</li>
                  <li>• Proclama candidatos electos</li>
                  <li>• Sanciona infracciones a la normativa electoral</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 border border-purple-200" style={{borderRadius: '12px'}}>
                <h3 className="font-semibold text-purple-800 mb-2">🗳️ Oficina Nacional de Procesos Electorales (ONPE)</h3>
                <p className="text-gray-700 text-sm mb-2"><strong>Función:</strong> Organiza y ejecuta los procesos electorales</p>
                <ul className="text-gray-700 text-sm space-y-1 ml-4">
                  <li>• Organiza comicios y escrutinios</li>
                  <li>• Implementa tecnología electoral (voto electrónico)</li>
                  <li>• Capacita personal electoral y ciudadanía</li>
                  <li>• Brinda resultados oficiales</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 border border-purple-200" style={{borderRadius: '12px'}}>
                <h3 className="font-semibold text-purple-800 mb-2">📋 Registro Nacional de Identificación y Estado Civil (RENIEC)</h3>
                <p className="text-gray-700 text-sm mb-2"><strong>Función:</strong> Mantiene el registro de electores</p>
                <ul className="text-gray-700 text-sm space-y-1 ml-4">
                  <li>• Padrón electoral actualizado</li>
                  <li>• Emisión de DNI y certificados</li>
                  <li>• Identificación de electores el día de votación</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Infracciones y Sanciones */}
          <section className="bg-red-50 border border-red-200 p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 mb-4 sm:mb-5 md:mb-6 lg:mb-8" style={{borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}}>
            <h2 className="text-xl font-semibold mb-4 text-red-800">🚫 Infracciones Electorales y Sanciones</h2>
            
            <div className="space-y-4">
              <div className="bg-white p-4 border border-red-200" style={{borderRadius: '12px'}}>
                <h3 className="font-semibold text-red-800 mb-3">⚠️ Infracciones Comunes</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-red-700 mb-2">Para Electores:</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• No votar: <strong>Multa S/88.00</strong></li>
                      <li>• No ser miembro de mesa: <strong>Multa S/220.00</strong></li>
                      <li>• Votar por otra persona: <strong>Delito penal</strong></li>
                      <li>• Alterar el orden: <strong>Multa y proceso penal</strong></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-red-700 mb-2">Para Candidatos/Partidos:</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Propaganda fuera de plazo: <strong>Multa y retiro</strong></li>
                      <li>• Exceso en gastos de campaña: <strong>Multa UIT</strong></li>
                      <li>• Uso indebido de recursos públicos: <strong>Inhabilitación</strong></li>
                      <li>• Compra de votos: <strong>Delito penal</strong></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Procesos de Impugnación */}
          <section className="bg-orange-50 border border-orange-200 p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 mb-4 sm:mb-5 md:mb-6 lg:mb-8" style={{borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}}>
            <h2 className="text-xl font-semibold mb-4 text-orange-800">⚖️ Recursos y Procedimientos Legales</h2>
            
            <div className="space-y-4">
              <div className="bg-white p-4 border border-orange-200" style={{borderRadius: '12px'}}>
                <h3 className="font-semibold text-orange-800 mb-2">📝 Recursos Disponibles</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-orange-700 mb-2">Recursos Administrativos:</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• <strong>Tachas:</strong> Contra candidatos inhabilitados</li>
                      <li>• <strong>Apelaciones:</strong> Contra resoluciones de JEE</li>
                      <li>• <strong>Quejas:</strong> Por irregularidades del proceso</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-orange-700 mb-2">Recursos Post-Electoral:</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• <strong>Nulidad de mesa:</strong> Irregularidades graves</li>
                      <li>• <strong>Nulidad de elección:</strong> Vicios sustanciales</li>
                      <li>• <strong>Solicitud de nulidad:</strong> Ante resultados</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Regulaciones de Campaña */}
          <section className="bg-yellow-50 border border-yellow-200 p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 mb-4 sm:mb-5 md:mb-6 lg:mb-8" style={{borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}}>
            <h2 className="text-xl font-semibold mb-4 text-yellow-800">📢 Regulaciones de Campaña Electoral</h2>
            
            <div className="space-y-4">
              <div className="bg-white p-4 border border-yellow-200" style={{borderRadius: '12px'}}>
                <h3 className="font-semibold text-yellow-800 mb-2">💰 Financiamiento de Campañas</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• <strong>Límite presidencial:</strong> Máximo 35 UIT por candidato</li>
                  <li>• <strong>Límite congresal:</strong> Según población del distrito</li>
                  <li>• <strong>Fuentes permitidas:</strong> Aportes propios, donaciones declaradas</li>
                  <li>• <strong>Prohibiciones:</strong> Recursos públicos, anónimos, extranjeros</li>
                  <li>• <strong>Transparencia:</strong> Declaración obligatoria de ingresos y gastos</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 border border-yellow-200" style={{borderRadius: '12px'}}>
                <h3 className="font-semibold text-yellow-800 mb-2">📺 Propaganda Electoral</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• <strong>Periodo:</strong> 90 días antes de elecciones</li>
                  <li>• <strong>Medios de comunicación:</strong> Tiempo gratuito en radio/TV</li>
                  <li>• <strong>Espacios públicos:</strong> Paneles y ubicaciones autorizadas</li>
                  <li>• <strong>Prohibiciones:</strong> Propaganda en centros educativos, templos</li>
                  <li>• <strong>Veda electoral:</strong> 3 días antes y día de elecciones</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Enlaces Oficiales */}
          <section className="bg-indigo-50 border border-indigo-200 p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8" style={{borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}}>
            <h2 className="text-xl font-semibold mb-4 text-indigo-800">🔗 Consulta la Normativa Completa</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <a href="https://www.jne.gob.pe/oc/2025/Compendio-de-Legislacion-Electoral/12-Ley-Organica-Elecciones-Ley-N26859.pdf" target="_blank" rel="noopener noreferrer" 
                 className="flex items-center gap-3 text-white p-4 transition-colors" style={{borderRadius: '12px', backgroundColor: '#1e3a8a'}}>
                <span className="text-2xl">📜</span>
                <div>
                  <p className="font-bold" style={{color: 'white'}}>Ley Orgánica de Elecciones</p>
                  <p className="text-sm font-bold" style={{color: '#bfdbfe'}}>Texto completo actualizado - JNE</p>
                </div>
              </a>
              
              <a href="https://diariooficial.elperuano.pe/Normas/obtenerDocumento?idNorma=5" target="_blank" rel="noopener noreferrer" 
                 className="flex items-center gap-3 text-white p-4 transition-colors" style={{borderRadius: '12px', backgroundColor: '#1e3a8a'}}>
                <span className="text-2xl">⚖️</span>
                <div>
                  <p className="font-bold" style={{color: 'white'}}>Legislación Electoral</p>
                  <p className="text-sm font-bold" style={{color: '#bfdbfe'}}>Compendio normativo - JNE</p>
                </div>
              </a>
              
              <a href="https://www.gob.pe/institucion/onpe/informes-publicaciones/3957320-compendio-electoral-peruano" target="_blank" rel="noopener noreferrer" 
                 className="flex items-center gap-3 text-white p-4 transition-colors" style={{borderRadius: '12px', backgroundColor: '#1e3a8a'}}>
                <span className="text-2xl">📋</span>
                <div>
                  <p className="font-bold" style={{color: 'white'}}>Compendio Electoral</p>
                  <p className="text-sm font-bold" style={{color: '#bfdbfe'}}>Normativa ONPE</p>
                </div>
              </a>
              
              <Link to="/calendar" className="flex items-center gap-3 bg-blue-600 text-white p-4 hover:bg-blue-700 transition-colors" style={{borderRadius: '12px'}}>
                <span className="text-2xl">📅</span>
                <div>
                  <p className="font-semibold">Cronograma Oficial</p>
                  <p className="text-sm text-blue-100">Fechas del proceso electoral</p>
                </div>
              </Link>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}