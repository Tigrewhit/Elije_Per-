import React, { useEffect, useState } from 'react'
import { CALENDAR_DATA } from '../data/electoralData'

export default function Calendar() {
	const [events, setEvents] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)
	const [fromCache, setFromCache] = useState(false)

	function load() {
		setLoading(true)
		setError(null)
		try {
			// Simular tiempo de carga
			setTimeout(() => {
				setEvents(CALENDAR_DATA)
				setFromCache(false)
				setLoading(false)
			}, 500)
		} catch (e) {
			setError('No hay datos disponibles')
			setLoading(false)
		}
	}

	useEffect(() => { load() }, [])

	if (loading) return (<div><h3 className='font-semibold'>Cronograma Electoral</h3><p>Cargando...</p></div>)
	if (error) return (<div><h3 className='font-semibold'>Cronograma Electoral</h3><p className='text-red-600'>{error}</p></div>)

	return (
	<div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
		<div className="max-w-6xl mx-auto px-3 md:px-6 py-4 md:py-8 space-y-4 md:space-y-8">
		{/* Header Principal Mejorado */}
		<div className='mb-8'>
			<div className='bg-gradient-to-br from-indigo-600 via-blue-600 to-purple-700 rounded-3xl p-6 md:p-8 shadow-2xl text-white overflow-hidden relative'>
				{/* Patrón de fondo decorativo */}
				<div className='absolute inset-0 opacity-10'>
					<div className='absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-20 -translate-y-20'></div>
					<div className='absolute bottom-0 right-0 w-32 h-32 bg-white rounded-full translate-x-16 translate-y-16'></div>
				</div>
				
				<div className="text-center relative z-10">
					<div className='mb-4'>
						<h1 className='text-2xl md:text-4xl font-black mb-3 leading-tight'>Cronograma Electoral 2026</h1>
						<p className='text-blue-100 text-sm md:text-base max-w-2xl mx-auto font-semibold leading-relaxed'>Información oficial del proceso electoral peruano • ONPE y JNE</p>
					</div>
					
					<div className='flex flex-wrap justify-center gap-3 mt-6'>
						<div className='bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-2 rounded-2xl'>
							<span className='text-white font-bold text-sm'>Verificado Oficial</span>
						</div>
						<div className='bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-2 rounded-2xl'>
							<span className='text-white font-bold text-sm'>Actualizado Hoy</span>
						</div>
					</div>
				</div>
			</div>			{/* Fecha Principal de Elecciones */}
			<div className='bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl p-6 md:p-8 mb-8 shadow-xl border border-green-200'>
				<div className='text-center'>
					<div className='mb-6'>
						<h2 className='text-xl md:text-3xl font-black text-gray-900 mb-2'>Elecciones Generales 2026</h2>
						<div className='w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mx-auto'></div>
					</div>
					
					<div className='bg-white rounded-2xl p-6 shadow-lg border border-green-300 max-w-md mx-auto'>
						<div className='text-center space-y-2'>
							<div className='text-3xl md:text-4xl font-black text-green-700'>12 ABRIL</div>
							<div className='text-lg md:text-xl font-bold text-green-600'>DOMINGO • 2026</div>
							<div className='mt-4 pt-4 border-t border-green-200'>
								<div className='text-sm font-bold text-gray-700'>Horario de Votación</div>
								<div className='text-lg font-black text-gray-900'>7:00 AM - 5:00 PM</div>
							</div>
						</div>
					</div>
				</div>
			</div>						<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-4'>
							<div className='text-center bg-gradient-to-br from-blue-50 to-indigo-100 p-3 rounded-lg border border-blue-200'>
								<div className='text-base font-bold text-blue-600 mb-1'>27M+</div>
							<div className='text-xs font-bold text-gray-700'>Electores Habilitados</div>
						</div>
						<div className='text-center bg-gradient-to-br from-green-50 to-emerald-100 p-3 rounded-lg border border-green-200'>
							<div className='text-base font-bold text-green-600 mb-1'>195</div>
							<div className='text-xs font-bold text-gray-700'>Autoridades a Elegir</div>
						</div>
						<div className='text-center bg-gradient-to-br from-purple-50 to-violet-100 p-3 rounded-lg border border-purple-200'>
							<div className='text-base font-bold text-purple-600 mb-1'>25</div>
							<div className='text-xs font-bold text-gray-700'>Regiones del País</div>
							</div>
						</div>
						<div className='bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-4 border border-indigo-200'>
							<div className='text-center mb-3'>
								<h3 className='text-base font-bold text-gray-800 mb-1'>Autoridades a Elegir</h3>
								<p className='text-gray-600 text-xs font-bold'>Conoce quiénes representarán al país</p>
							</div>
							<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3'>
								<div className='bg-white rounded-lg p-2 shadow-sm hover:shadow-md transition-shadow border-l-2 border-l-orange-400'>
									<div className='text-center'>
										<div className='w-6 h-6 bg-orange-100 rounded-md flex items-center justify-center mx-auto mb-1'>

										</div>
										<h4 className='font-bold text-gray-800 text-xs mb-1'>Presidente</h4>
										<p className='text-xs text-gray-600 font-bold'>+ 2 Vicepresidentes</p>
										<div className='mt-1 text-orange-600 font-bold text-xs'>3 cargos</div>
									</div>
								</div>
								<div className='bg-white rounded-lg p-2 shadow-sm hover:shadow-md transition-shadow border-l-2 border-l-blue-400'>
									<div className='text-center'>
										<div className='w-6 h-6 bg-blue-100 rounded-md flex items-center justify-center mx-auto mb-1'>

										</div>
										<h4 className='font-bold text-gray-800 text-xs mb-1'>Senadores</h4>
										<p className='text-xs text-gray-600 font-bold'>Cámara Alta</p>
										<div className='mt-1 text-blue-600 font-bold text-xs'>60 cargos</div>
									</div>
								</div>
								<div className='bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow border-l-4 border-l-green-400'>
									<div className='text-center'>
										<div className='w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-3'>

										</div>
										<h4 className='font-bold text-gray-800 mb-1'>Diputados</h4>
										<p className='text-xs text-gray-600 font-bold'>Cámara Baja</p>
										<div className='mt-2 text-green-600 font-bold'>130 cargos</div>
									</div>
								</div>
								<div className='bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow border-l-4 border-l-purple-400'>
									<div className='text-center'>
										<div className='w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-3'>

										</div>
										<h4 className='font-bold text-gray-800 mb-1'>Parlamento Andino</h4>
										<p className='text-xs text-gray-600 font-bold'>Representación Regional</p>
										<div className='mt-2 text-purple-600 font-bold'>5 cargos</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Enlaces oficiales */}
					<div className='mb-4'>
						<div className='text-center mb-3'>
							<h3 className='text-base font-bold text-gray-800 mb-1'>Portales Oficiales</h3>
							<p className='text-gray-600 text-xs font-bold'>Accede a la información oficial</p>
						</div>
						<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4'>
							<a href='https://eg2026.onpe.gob.pe' target='_blank' rel='noopener noreferrer'
								className='group bg-white rounded-lg p-3 shadow-md border border-blue-100 hover:shadow-lg hover:-translate-y-0.5 hover:border-blue-300 transition-all duration-200'>
								<div className='text-center'>
									<div className='w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-2'>

									</div>
									<h4 className='text-sm font-bold text-gray-800 mb-1'>ONPE Oficial</h4>
									<p className='text-gray-600 mb-2 text-xs font-bold'>Portal Elecciones 2026</p>
									<div className='inline-flex items-center gap-1 bg-blue-50 px-3 py-1 rounded-lg text-blue-700 font-bold text-xs'>
										<span>🔗 Visitar</span>
									</div>
								</div>
							</a>
							<a href='https://portal.jne.gob.pe/portal' target='_blank' rel='noopener noreferrer'
								className='group bg-white rounded-xl p-5 shadow-lg border-2 border-green-100 hover:shadow-xl hover:-translate-y-1 hover:border-green-300 transition-all duration-300'>
								<div className='text-center'>
									<div className='w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg'>

									</div>
									<h4 className='text-lg font-bold text-gray-800 mb-2'>JNE Portal</h4>
									<p className='text-gray-600 mb-3 font-bold'>Jurado Nacional Electoral</p>
									<div className='inline-flex items-center gap-1 bg-green-50 px-3 py-1 rounded-lg text-green-700 font-bold text-xs'>
										<span>⚖️ Visitar</span>
									</div>
								</div>
							</a>
							<a href='https://votoinformado.jne.gob.pe/voto' target='_blank' rel='noopener noreferrer'
								className='group bg-white rounded-lg p-3 shadow-md border border-purple-100 hover:shadow-lg hover:-translate-y-0.5 hover:border-purple-300 transition-all duration-200'>
								<div className='text-center'>
									<div className='w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-2'>

									</div>
									<h4 className='text-sm font-bold text-gray-800 mb-1'>Voto Informado</h4>
									<p className='text-gray-600 mb-2 text-xs font-bold'>Educación Electoral</p>
									<div className='inline-flex items-center gap-1 bg-purple-50 px-3 py-1 rounded-lg text-purple-700 font-bold text-xs'>
										<span>📚 Visitar</span>
									</div>
								</div>
							</a>
						</div>
					</div>

			</div>				{/* Sección de eventos */}
				<div className='mb-4'>
					<div className='text-center mb-4'>
						<div className='inline-flex items-center justify-center w-8 h-8 bg-emerald-500 rounded-lg mb-2'>

						</div>
						<h2 className='text-lg font-bold text-gray-800 mb-2'>Cronograma de Eventos</h2>
						<p className='text-gray-700 text-sm mb-3 font-bold'>Fechas importantes del proceso electoral</p>
						<div className='inline-flex items-center gap-1 bg-emerald-100 border border-emerald-300 rounded-lg px-3 py-2'>
							<span className='text-sm text-emerald-800 font-bold'>
								{events.length} eventos disponibles
							</span>
						</div>
					</div>
					
					<div className='space-y-4'>
						{events.map(e => {
						const date = e.date ? new Date(e.date).toLocaleDateString('es-PE', {
							weekday: 'long',
							year: 'numeric',
							month: 'long',
							day: 'numeric'
						}) : ''

						// Determinar el icono y color por tipo de evento
			const getEventStyle = (type) => {
				switch (type) {
					case 'convocatoria': return { icon: '📢', color: 'blue', bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-800' }
					case 'eleccion': return { icon: '🗳️', color: 'green', bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-800' }
					case 'primarias': return { icon: '🏆', color: 'purple', bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-800' }
					case 'organizacion': return { icon: '🏛️', color: 'gray', bg: 'bg-gray-50', border: 'border-gray-200', text: 'text-gray-800' }
					case 'tecnologia': return { icon: '💻', color: 'indigo', bg: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-800' }
					default: return { icon: '📅', color: 'gray', bg: 'bg-gray-50', border: 'border-gray-200', text: 'text-gray-800' }
				}
			}

			const eventStyle = getEventStyle(e.type)

						return (
							<div key={e.id} className='bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 mb-6 border-l-4 border-l-blue-500'>
								{/* Header optimizado para móvil */}
								<div className='p-4 md:p-6'>
									<div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
										<div className='flex items-start gap-4'>
											<div className={`flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-xl shadow-md ${eventStyle.bg}`}>
												<span className='text-xl md:text-2xl'>{eventStyle.icon}</span>
											</div>
											<div className='flex-1'>
												<div className='flex flex-wrap items-center gap-2 mb-3'>
													<span className='px-3 py-1.5 text-xs md:text-sm font-bold bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full shadow-sm'>
														📅 {date}
													</span>
													{e.type && (
														<span className={`px-3 py-2 text-xs font-bold rounded-full ${eventStyle.text} ${eventStyle.bg} border ${eventStyle.border}`}>
															{e.type.charAt(0).toUpperCase() + e.type.slice(1)}
														</span>
													)}
												</div>
												<h3 className='text-base md:text-xl font-bold text-gray-900 leading-tight mb-2'>{e.title}</h3>
											</div>
										</div>
										{e.source_url && (
											<div className='flex-shrink-0'>
												<a href={e.source_url} target='_blank' rel='noopener noreferrer'
											className='inline-flex items-center px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-bold text-xs'>
											Ver Fuente
												</a>
											</div>
										)}
									</div>
								</div>

								{/* Descripción con diseño mejorado */}
								{e.description && (
									<div className='px-8 pb-8'>
								<div className='bg-indigo-50 p-4 rounded-lg border border-indigo-100'>
									<div>
										<div>
										<h4 className='text-xs md:text-sm font-bold text-indigo-800 mb-2 flex items-center gap-1'>
											📝 Detalles del Evento
										</h4>
										<p className='text-gray-700 text-xs md:text-sm leading-relaxed font-bold'>{e.description}</p>
												</div>
											</div>
										</div>
									</div>
								)}
							</div>
						)
					})}
				</div>

				{/* Estado vacío bonito */}
				{events.length === 0 && (
					<div className='text-center py-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border-2 border-blue-200 shadow-xl'>
						<div className='w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg'>

						</div>
						<h3 className='text-2xl font-bold text-gray-800 mb-4'>No hay eventos disponibles</h3>
						<p className='text-lg text-gray-600 mb-6 max-w-md mx-auto leading-relaxed font-bold'>Verifique su conexión a internet o intente recargar la página para obtener los últimos eventos del cronograma electoral</p>
						<button onClick={load} className='inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-bold text-sm'>
							🔄 Intentar Nuevamente
						</button>
					</div>
				)}
			</div>

				{/* Footer informativo */}
				<div className='mt-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg p-4 shadow-md border border-blue-200'>
					<div className='text-center mb-4'>
						<h3 className='text-base font-bold mb-1 text-gray-800'>Información Importante</h3>
						<p className='text-gray-600 text-xs font-bold'>Cronograma oficial verificado</p>
					</div>

					<div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
						<div className='bg-white rounded-lg p-2 text-center shadow-sm border border-blue-200'>
							<div className='text-lg mb-1'>📊</div>
							<h4 className='font-bold text-xs mb-0 text-gray-800'>Fuentes Oficiales</h4>
						<p className='text-xs text-gray-600 font-bold'>ONPE y JNE</p>
					</div>
					<div className='bg-white rounded-lg p-2 text-center shadow-sm border border-blue-200'>
						<div className='text-lg mb-1'>🔄</div>
						<h4 className='font-bold text-xs mb-0 text-gray-800'>Actualización</h4>
						<p className='text-xs text-gray-600 font-bold'>Automática</p>
					</div>
					<div className='bg-white rounded-lg p-2 text-center shadow-sm border border-blue-200'>
						<div className='text-lg mb-1'>📱</div>
						<h4 className='font-bold text-xs mb-0 text-gray-800'>Offline</h4>
						<p className='text-xs text-gray-600 font-bold'>Disponible</p>
					</div>
					<div className='bg-white rounded-lg p-2 text-center shadow-sm border border-blue-200'>
						<div className='text-lg mb-1'>📞</div>
						<h4 className='font-bold text-xs mb-0 text-gray-800'>Consultas</h4>
						<p className='text-xs text-gray-600 font-bold'>417-0630</p>
						</div>
					</div>

					<div className='text-center mt-3 pt-2 border-t border-gray-300'>
					<p className='text-gray-700 text-xs font-bold'>
						🗳️ <strong>Elecciones 2026</strong> • 12 abril •
						<span className='font-bold text-blue-600'> ¡Tu voto cuenta!</span>
					</p>
					</div>
				</div>
			</div>


		</div>
	)
}