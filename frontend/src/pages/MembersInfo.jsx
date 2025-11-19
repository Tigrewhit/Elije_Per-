import React from 'react'
import { Link } from 'react-router-dom'

export default function MembersInfo() {
  return (
    <div className="px-3 sm:px-4 md:px-6 lg:px-8" style={{
			padding: '12px',
			maxWidth: 1200,
			margin: '0 auto',
			borderRadius: '20px',
			background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)'
		}}>
			<div className="p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10">
				<div className='bg-white shadow-xl border border-gray-200 p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10' style={{borderRadius: '18px', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'}}>
					<div className='mb-6'>
						<h1 className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6'>🇵🇪 Guía Completa para Miembros de Mesa: Elecciones 2026</h1>
						<p className='text-gray-600 mb-4 sm:mb-5 md:mb-6 lg:mb-8 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed px-1 sm:px-2'>Información oficial y recursos esenciales para su servicio cívico. Información verificada con fuentes oficiales JNE/ONPE.</p>
					</div>

      {/* Derechos y Beneficios */}
      <section className='bg-blue-50 border border-blue-200 p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 mb-4 sm:mb-5 md:mb-6 lg:mb-8' style={{borderRadius: '16px', marginTop: '24px sm:32px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}}>
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold mb-3 sm:mb-4 md:mb-5 lg:mb-6 text-blue-800 px-1 sm:px-2">1. ⚖️ Derechos y Beneficios del Miembro de Mesa</h2>
                <div className="overflow-x-auto mobile-scroll" style={{borderRadius: '12px', margin: '0 -10px', padding: '0 10px'}}>
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className='w-full bg-white border border-gray-200' style={{fontSize: '7px', tableLayout: 'fixed', width: '100%', maxWidth: '100%'}}>
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left font-semibold text-gray-800 border-b" style={{fontSize: '7px', width: '25%', padding: '4px 2px', wordWrap: 'break-word', overflow: 'hidden'}}>Beneficio</th>
                    <th className="text-left font-semibold text-gray-800 border-b" style={{fontSize: '7px', width: '45%', padding: '4px 2px', wordWrap: 'break-word', overflow: 'hidden'}}>Detalle</th>
                    <th className="text-left font-semibold text-gray-800 border-b" style={{fontSize: '7px', width: '30%', padding: '4px 2px', wordWrap: 'break-word', overflow: 'hidden'}}>Obligación</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="font-medium text-blue-800" style={{fontSize: '7px', padding: '4px 2px', wordWrap: 'break-word', overflow: 'hidden', lineHeight: '1.1'}}>Compensación Económica</td>
                    <td className="text-gray-700" style={{fontSize: '7px', padding: '4px 2px', wordWrap: 'break-word', overflow: 'hidden', lineHeight: '1.1'}}>S/ 120.00 (ref. 2021). 2026 por confirmar.</td>
                    <td className="text-gray-700" style={{fontSize: '7px', padding: '4px 2px', wordWrap: 'break-word', overflow: 'hidden', lineHeight: '1.1'}}>Jornada 6:30 AM hasta ODPE</td>
                  </tr>
                  <tr className="border-b">
                    <td className="font-medium text-blue-800" style={{fontSize: '7px', padding: '4px 2px', wordWrap: 'break-word', overflow: 'hidden', lineHeight: '1.1'}}>Justificación Laboral</td>
                    <td className="text-gray-700" style={{fontSize: '7px', padding: '4px 2px', wordWrap: 'break-word', overflow: 'hidden', lineHeight: '1.1'}}>Justifica inasistencia legal trabajo/estudios</td>
                    <td className="text-gray-700" style={{fontSize: '7px', padding: '4px 2px', wordWrap: 'break-word', overflow: 'hidden', lineHeight: '1.1'}}>Certificado ONPE a empleador</td>
                  </tr>
                  <tr className="border-b">
                    <td className="font-medium text-blue-800" style={{fontSize: '7px', padding: '4px 2px', wordWrap: 'break-word', overflow: 'hidden', lineHeight: '1.1'}}>Capacitación</td>
                    <td className="text-gray-700" style={{fontSize: '7px', padding: '4px 2px', wordWrap: 'break-word', overflow: 'hidden', lineHeight: '1.1'}}>Manuales, videos Voto Digital</td>
                    <td className="text-gray-700" style={{fontSize: '7px', padding: '4px 2px', wordWrap: 'break-word', overflow: 'hidden', lineHeight: '1.1'}}>Asistir capacitaciones ONPE</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-blue-800" style={{fontSize: '7px', padding: '4px 2px', wordWrap: 'break-word', overflow: 'hidden', lineHeight: '1.1'}}>Refrigerio</td>
                    <td className="text-gray-700" style={{fontSize: '7px', padding: '4px 2px', wordWrap: 'break-word', overflow: 'hidden', lineHeight: '1.1'}}>Alimentos + apoyo PNP y FF.AA.</td>
                    <td className="text-gray-700" style={{fontSize: '7px', padding: '4px 2px', wordWrap: 'break-word', overflow: 'hidden', lineHeight: '1.1'}}>Mantener protocolos</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-yellow-50 border border-yellow-200 p-4 sm:p-6 md:p-8 mb-6 sm:mb-8" style={{borderRadius: '16px'}}>
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold mb-3 sm:mb-4 md:mb-5 lg:mb-6 text-green-800 px-1 sm:px-2">2. 📅 Cronograma y Deberes Clave (2026)</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-lg border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-2 sm:px-4 py-2 sm:py-3 text-left font-semibold text-gray-800 border-b text-xs sm:text-sm">Actividad</th>
                <th className="px-2 sm:px-4 py-2 sm:py-3 text-left font-semibold text-gray-800 border-b text-xs sm:text-sm">Detalle y Objetivo</th>
                <th className="px-2 sm:px-4 py-2 sm:py-3 text-left font-semibold text-gray-800 border-b text-xs sm:text-sm">Fecha Tentativa</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-2 sm:px-4 py-2 sm:py-3 font-medium text-green-800 text-xs sm:text-sm">Sorteo de Miembros de Mesa</td>
                <td className="px-2 sm:px-4 py-2 sm:py-3 text-gray-700 text-xs sm:text-sm">Anuncio oficial de los ciudadanos seleccionados (titulares y suplentes).</td>
                <td className="px-2 sm:px-4 py-2 sm:py-3 text-green-700 font-medium text-xs sm:text-sm">29 de enero de 2026</td>
              </tr>
              <tr className="border-b">
                <td className="px-2 sm:px-4 py-2 sm:py-3 font-medium text-green-800 text-xs sm:text-sm">Capacitación Obligatoria</td>
                <td className="px-2 sm:px-4 py-2 sm:py-3 text-gray-700 text-xs sm:text-sm">Instrucción presencial sobre la instalación de mesa y el proceso de sufragio.</td>
                <td className="px-2 sm:px-4 py-2 sm:py-3 text-gray-600 text-xs sm:text-sm">Enero / Febrero</td>
              </tr>
              <tr className="border-b">
                <td className="px-2 sm:px-4 py-2 sm:py-3 font-medium text-green-800 text-xs sm:text-sm">Capacitación Voto Digital</td>
                <td className="px-2 sm:px-4 py-2 sm:py-3 text-gray-700 text-xs sm:text-sm">Entrenamiento en los procedimientos de voto electrónico y escrutinio (clave para 2026).</td>
                <td className="px-2 sm:px-4 py-2 sm:py-3 text-gray-600 text-xs sm:text-sm">Febrero / Marzo</td>
              </tr>
              <tr className="border-b">
                <td className="px-2 sm:px-4 py-2 sm:py-3 font-medium text-green-800 text-xs sm:text-sm">Simulacro General</td>
                <td className="px-2 sm:px-4 py-2 sm:py-3 text-gray-700 text-xs sm:text-sm">Ensayo práctico del proceso electoral completo.</td>
                <td className="px-2 sm:px-4 py-2 sm:py-3 text-gray-600 text-xs sm:text-sm">Marzo</td>
              </tr>
              <tr className="border-b">
                <td className="px-2 sm:px-4 py-2 sm:py-3 font-medium text-green-800 text-xs sm:text-sm">Entrega de Material</td>
                <td className="px-2 sm:px-4 py-2 sm:py-3 text-gray-700 text-xs sm:text-sm">Recojo de paquetes electorales en la ODPE y última orientación.</td>
                <td className="px-2 sm:px-4 py-2 sm:py-3 text-green-700 font-medium text-xs sm:text-sm">11 de abril</td>
              </tr>
              <tr className="bg-green-100">
                <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-green-900 text-xs sm:text-sm">DÍA DE LAS ELECCIONES</td>
                <td className="px-2 sm:px-4 py-2 sm:py-3 font-medium text-green-900 text-xs sm:text-sm">Jornada de Servicio Cívico: Llegada: 6:30 AM. Cierre de Votación: 5:00 PM.</td>
                <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-green-900 text-xs sm:text-sm">12 de abril de 2026</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="mt-4 text-center">
          <Link to="/calendar" className="text-green-600 hover:underline font-medium text-sm sm:text-base">
            📅 Ver calendario electoral completo →
          </Link>
        </div>
      </section>

      {/* Pasos del Servicio */}
      <section className="bg-yellow-50 border border-yellow-200 p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 mb-4 sm:mb-5 md:mb-6 lg:mb-8" style={{borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}}>
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold mb-3 sm:mb-4 md:mb-5 lg:mb-6 text-yellow-800 px-1 sm:px-2">3. ✅ Pasos del Servicio: Flujo de la Jornada Electoral</h2>
        <p className="text-gray-700 mb-6 text-sm sm:text-base">Esta es su guía rápida para el día de la elección.</p>
        
        <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
          <div className="bg-white p-2 sm:p-3 md:p-4 lg:p-5 border border-yellow-200" style={{borderRadius: '12px'}}>
            <h3 className="font-semibold text-blue-800 mb-2 sm:mb-3 text-xs sm:text-sm md:text-base">I. Instalación de Mesa (6:30 AM - 7:00 AM)</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
              <li>• Llegar puntualmente a las 6:30 AM con su DNI y Credencial.</li>
              <li>• Verificar que el material electoral esté completo (ánfora, cabina, sellos, etc.).</li>
              <li>• Comprobar que el ánfora esté vacía y sellarla correctamente.</li>
              <li>• Llenar y firmar el Acta de Instalación.</li>
            </ul>
          </div>
          
          <div className="bg-white p-2 sm:p-3 md:p-4 lg:p-5 border border-yellow-200" style={{borderRadius: '12px'}}>
            <h3 className="font-semibold text-green-800 mb-2 sm:mb-3 text-xs sm:text-sm md:text-base">II. Durante el Sufragio (7:00 AM - 5:00 PM)</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
              <li>• Verificar la identidad del elector (DNI y padrón) y confirmar que le corresponde votar en su mesa.</li>
              <li>• Entregar la cédula de sufragio firmada.</li>
              <li>• Asegurar la secrecía y el orden.</li>
              <li>• Recibir la cédula doblada y depositarla en el ánfora.</li>
              <li>• Marcar la participación y colocar el holograma en el DNI del elector.</li>
            </ul>
          </div>
          
          <div className="bg-white p-2 sm:p-3 md:p-4 lg:p-5 border border-yellow-200" style={{borderRadius: '12px'}}>
            <h3 className="font-semibold text-red-800 mb-2 sm:mb-3 text-xs sm:text-sm md:text-base">III. Cierre y Escrutinio (5:00 PM en adelante)</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
              <li>• Declarar el cierre de la votación puntualmente a las 5:00 PM.</li>
              <li>• Proceder al conteo de votos (escrutinio) en presencia de personeros.</li>
              <li>• Llenar con absoluta claridad y sin errores las Actas de Escrutinio.</li>
              <li>• Entregar copias a personeros y autoridades.</li>
              <li>• Entregar el paquete electoral final a la ODPE (Oficina Descentralizada de Procesos Electorales).</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Materiales de Referencia */}
      <section className="bg-purple-50 border border-purple-200 p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 mb-4 sm:mb-5 md:mb-6 lg:mb-8" style={{borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}}>
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold mb-3 sm:mb-4 md:mb-5 lg:mb-6 text-purple-800 px-1 sm:px-2">4. 📚 Materiales de Referencia y Soporte</h2>
        
        <div className="overflow-x-auto -mx-3 sm:-mx-4 md:-mx-5 lg:-mx-6 xl:-mx-8" style={{borderRadius: '12px'}}>
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className='min-w-full bg-white border border-gray-200' style={{fontSize: '11px'}}>
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-1 py-1 text-left font-semibold text-gray-800 border-b" style={{fontSize: '10px', width: '70px'}}>Tipo</th>
                    <th className="px-1 py-1 text-left font-semibold text-gray-800 border-b" style={{fontSize: '10px', width: '130px'}}>Descripción</th>
                    <th className="px-1 py-1 text-left font-semibold text-gray-800 border-b" style={{fontSize: '10px', width: '100px'}}>Enlace</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-1 py-1 font-medium text-purple-800" style={{fontSize: '10px'}}>Manual Oficial</td>
                    <td className="px-1 py-1 text-gray-700" style={{fontSize: '10px'}}>Guía completa de procedimientos y llenado de actas.</td>
                    <td className="px-1 py-1">
                      <a href="/documentos/pdfs/guia-del-elector-2026.pdf" download className="text-blue-600 hover:underline" style={{fontSize: '9px'}}>
                        📥 Descargar PDF
                      </a>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-1 py-1 font-medium text-purple-800" style={{fontSize: '10px'}}>Guía Voto Digital</td>
                    <td className="px-1 py-1 text-gray-700" style={{fontSize: '10px'}}>Instrucciones específicas para el manejo del sistema de votación electrónica (si aplica a su local).</td>
                    <td className="px-1 py-1">
                      <a href="/documentos/pdfs/voto-digital-2026.pdf" download className="text-blue-600 hover:underline" style={{fontSize: '9px'}}>
                        📥 Descargar PDF
                      </a>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-1 py-1 font-medium text-purple-800" style={{fontSize: '10px'}}>Soporte Telefónico</td>
                    <td className="px-1 py-1 text-gray-700" style={{fontSize: '10px'}}>Línea de atención exclusiva para consultas y emergencias el día de la elección.</td>
                    <td className="px-1 py-1 text-gray-700" style={{fontSize: '9px'}}>📞 0800-MESA (0800-6372)</td>
                  </tr>
                  <tr>
                    <td className="px-1 py-1 font-medium text-purple-800" style={{fontSize: '10px'}}>Policía Nacional</td>
                    <td className="px-1 py-1 text-gray-700" style={{fontSize: '10px'}}>Para situaciones de orden público y seguridad.</td>
                    <td className="px-1 py-1 text-gray-700" style={{fontSize: '9px'}}>📞 105</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-50 border border-green-200 p-4 sm:p-6 md:p-8 mb-6 sm:mb-8" style={{borderRadius: '16px'}}>
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold mb-3 sm:mb-4 md:mb-5 lg:mb-6 text-green-800 px-1 sm:px-2">5. 🗺️ ¡Pronto Podrás Elegir Dónde Votar!</h2>
        <p className="text-sm sm:text-base text-gray-700 mb-4">La Oficina Nacional de Procesos Electorales (ONPE) está por habilitar la herramienta más importante para los ciudadanos: "Elige Tu Local de Votación" (ETLV).</p>
        
        <div className="overflow-x-auto -mx-3 sm:-mx-4 md:-mx-5 lg:-mx-6 xl:-mx-8" style={{borderRadius: '12px'}}>
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className='min-w-full bg-white border border-gray-200' style={{fontSize: '11px'}}>
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-1 py-1 text-left font-semibold text-gray-800 border-b" style={{fontSize: '10px', width: '80px'}}>Herramienta</th>
                    <th className="px-1 py-1 text-left font-semibold text-gray-800 border-b" style={{fontSize: '10px', width: '120px'}}>Acción del Elector</th>
                    <th className="px-1 py-1 text-left font-semibold text-gray-800 border-b" style={{fontSize: '10px', width: '120px'}}>Estado Actual (Nov 2025)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-1 py-1 font-medium text-green-800" style={{fontSize: '10px'}}>Elige Tu Local de Votación (ETLV)</td>
                    <td className="px-1 py-1 text-gray-700" style={{fontSize: '10px'}}>Utiliza un mapa interactivo para seleccionar hasta 3 locales cercanos a tu domicilio o trabajo.</td>
                    <td className="px-1 py-1" style={{fontSize: '9px'}}>
                      <div className="bg-yellow-100 border border-yellow-300 px-1 py-0.5" style={{borderRadius: '4px'}}>
                        <span className="text-yellow-800 font-medium">🚀 Lanzamiento Inminente:</span>
                        <span className="text-yellow-700"> Se proyecta su activación a finales de noviembre de 2025.</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-1 py-1 font-medium text-green-800" style={{fontSize: '10px'}}>Consulta tu Local Final</td>
                    <td className="px-1 py-1 text-gray-700" style={{fontSize: '10px'}}>Herramienta para confirmar tu local de votación, dirección y número de mesa asignada por la ONPE.</td>
                    <td className="px-1 py-1" style={{fontSize: '9px'}}>
                      <div className="bg-blue-100 border border-blue-300 px-1 py-0.5" style={{borderRadius: '4px'}}>
                        <span className="text-blue-800 font-medium">📅 Próximamente:</span>
                        <span className="text-blue-700"> Disponible después de que concluya el plazo del ETLV.</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8 mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-16 p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10">
        <Link to="/calendar" className="p-2 sm:p-3 md:p-4 lg:p-5 bg-blue-500 text-black border hover:bg-blue-600 transition-all duration-200 text-center font-semibold shadow-md hover:shadow-lg" style={{borderRadius: '12px'}}>
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2 sm:mb-3 md:mb-4">📅</div>
          <h3 className="font-semibold text-xs sm:text-sm md:text-base lg:text-lg">Calendario Electoral</h3>
          <p className="text-xs sm:text-sm md:text-base text-black">Ver fechas completas</p>
        </Link>
        
        <Link to="/elector-info" className="p-3 sm:p-4 md:p-5 lg:p-6 xl:p-7 bg-green-500 text-black border hover:bg-green-600 transition-all duration-200 text-center font-semibold shadow-md hover:shadow-lg" style={{borderRadius: '12px'}}>
          <div className="text-xl sm:text-2xl mb-2">📋</div>
          <h3 className="font-semibold text-xs sm:text-sm md:text-base lg:text-lg">Info Electores</h3>
          <p className="text-xs sm:text-sm md:text-base text-black">Guías generales</p>
        </Link>
        
        <a href="https://eg2026.onpe.gob.pe" target="_blank" rel="noopener noreferrer" className="p-3 sm:p-4 md:p-5 lg:p-6 xl:p-7 bg-purple-500 text-black border hover:bg-purple-600 transition-all duration-200 text-center font-semibold shadow-md hover:shadow-lg" style={{borderRadius: '12px'}}>
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2 sm:mb-3 md:mb-4">🌐</div>
          <h3 className="font-semibold text-xs sm:text-sm md:text-base lg:text-lg">Portal ONPE 2026</h3>
          <p className="text-xs sm:text-sm md:text-base text-black">Sitio oficial</p>
        </a>
      </section>
				</div>
			</div>
		</div>
  )
}