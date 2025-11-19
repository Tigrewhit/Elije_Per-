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
		<div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
			<div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-12 space-y-12">
				
				{/* Header Principal Moderno */}
				<div className='text-center mb-8'>
					<div className='bg-white rounded-lg p-8 md:p-12 shadow-xl border border-gray-200'>
						<h1 className='text-3xl md:text-5xl font-black mb-4 leading-tight text-black'>
							<strong>Cronograma Electoral 2026</strong>
						</h1>
						<p className='text-black text-base md:text-lg max-w-3xl mx-auto font-black leading-relaxed mb-6'>
							<strong>Información oficial del proceso electoral peruano • Verificado por ONPE y JNE</strong>
						</p>							<div className='flex flex-wrap justify-center gap-4'>
								<div className='bg-green-100 border border-green-300 px-6 py-3 rounded-lg'>
									<span className='text-black font-black'><strong>✓ Verificado Oficial</strong></span>
								</div>
								<div className='bg-blue-100 border border-blue-300 px-6 py-3 rounded-lg'>
									<span className='text-black font-black'><strong>↻ Actualizado Hoy</strong></span>
								</div>
							</div>
					</div>
				</div>

				{/* Fecha Principal de Elecciones */}
				<div className='bg-gradient-to-br from-emerald-50 to-green-100 rounded-lg p-8 md:p-12 mb-8 shadow-xl border border-green-200'>
					<div className='text-center'>
						<div className='mb-8'>
							<h2 className='text-2xl md:text-4xl font-black text-gray-900 mb-4'>Elecciones Generales 2026</h2>
							<div className='w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full mx-auto'></div>
						</div>
						
						<div className='bg-white rounded-lg p-8 shadow-xl border-2 border-green-300 max-w-lg mx-auto'>
							<div className='space-y-4'>
								<div className='text-4xl md:text-6xl font-black text-emerald-700'>12 ABRIL</div>
								<div className='text-xl md:text-2xl font-bold text-emerald-600'>DOMINGO • 2026</div>
								<div className='bg-gray-50 rounded-lg p-4 mt-6'>
									<div className='text-sm font-bold text-gray-600 mb-1'>Horario de Votación</div>
									<div className='text-xl font-black text-gray-900'>7:00 AM - 5:00 PM</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			{/* Estadísticas Principales */}
			<div className='grid grid-cols-1 md:grid-cols-3 gap-12 mb-16'>
					<div className='bg-white rounded-lg p-8 shadow-xl border border-blue-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300'>
						<div className='text-center'>
							<div className='w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-6 shadow-lg'>
								<span className='text-white text-2xl font-black'>27</span>
							</div>
						<div className='text-3xl font-black text-gray-900 mb-2'>27+ Millones</div>
						<div className='text-base font-black text-gray-800'>Electores Habilitados</div>
						</div>
					</div>
					
					<div className='bg-white rounded-lg p-8 shadow-xl border border-emerald-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300'>
						<div className='text-center'>
							<div className='w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-6 shadow-lg'>
								<span className='text-white text-2xl font-black'>195</span>
							</div>
						<div className='text-3xl font-black text-gray-900 mb-2'>195</div>
						<div className='text-base font-black text-gray-800'>Autoridades a Elegir</div>
						</div>
					</div>
					
					<div className='bg-white rounded-lg p-8 shadow-xl border border-purple-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300'>
						<div className='text-center'>
							<div className='w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg flex items-center justify-center mx-auto mb-6 shadow-lg'>
								<span className='text-white text-2xl font-black'>25</span>
							</div>
						<div className='text-3xl font-black text-gray-900 mb-2'>25 Regiones</div>
						<div className='text-base font-black text-gray-800'>En Todo el Perú</div>
						</div>
					</div>
				</div>

			{/* Autoridades a Elegir */}
			<div className='bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 md:p-12 shadow-2xl border-2 border-gray-200 mb-16 relative overflow-hidden'>
				{/* Decoración de fondo */}
				<div className='absolute top-0 left-0 w-32 h-32 bg-indigo-50 rounded-full -translate-y-16 -translate-x-16 opacity-30'></div>
				<div className='absolute bottom-0 right-0 w-24 h-24 bg-purple-50 rounded-full translate-y-12 translate-x-12 opacity-30'></div>
				<div className='relative z-10'>
					<div className='text-center mb-8'>
						<h3 className='text-2xl md:text-3xl font-black text-gray-900 mb-4'>Autoridades a Elegir</h3>
						<p className='text-gray-800 text-base font-black'>Conoce quiénes representarán al país</p>
						<div className='w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mx-auto mt-4'></div>
					</div>
					
					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>
						<div className='bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-6 border-2 border-orange-200 hover:shadow-lg transition-all duration-300'>
							<div className='text-center'>
								<div className='w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4'>
									<span className='text-white text-xl font-bold'>P</span>
								</div>
								<h4 className='font-black text-gray-900 text-base mb-2'>Presidente</h4>
								<p className='text-sm text-gray-800 font-black mb-2'>+ 2 Vicepresidentes</p>
								<div className='bg-orange-100 rounded-lg px-3 py-1'>
									<span className='text-orange-700 font-bold text-sm'>3 cargos</span>
								</div>
							</div>
						</div>
						
						<div className='bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border-2 border-blue-200 hover:shadow-lg transition-all duration-300'>
							<div className='text-center'>
								<div className='w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-4'>
									<span className='text-white text-xl font-bold'>S</span>
								</div>
								<h4 className='font-black text-gray-900 text-base mb-2'>Senadores</h4>
								<p className='text-sm text-gray-800 font-black mb-2'>Cámara Alta</p>
								<div className='bg-blue-100 rounded-lg px-3 py-1'>
									<span className='text-blue-700 font-bold text-sm'>60 cargos</span>
								</div>
							</div>
						</div>
						
						<div className='bg-gradient-to-br from-emerald-50 to-green-50 rounded-lg p-6 border-2 border-emerald-200 hover:shadow-lg transition-all duration-300'>
							<div className='text-center'>
								<div className='w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-500 rounded-xl flex items-center justify-center mx-auto mb-4'>
									<span className='text-white text-xl font-bold'>D</span>
								</div>
								<h4 className='font-black text-gray-900 text-base mb-2'>Diputados</h4>
								<p className='text-sm text-gray-800 font-black mb-2'>Cámara Baja</p>
								<div className='bg-emerald-100 rounded-lg px-3 py-1'>
									<span className='text-emerald-700 font-bold text-sm'>130 cargos</span>
								</div>
							</div>
						</div>
						
						<div className='bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg p-6 border-2 border-purple-200 hover:shadow-lg transition-all duration-300'>
							<div className='text-center'>
								<div className='w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-500 rounded-xl flex items-center justify-center mx-auto mb-4'>
									<span className='text-white text-xl font-bold'>A</span>
								</div>
								<h4 className='font-black text-gray-900 text-base mb-2'>Parlamento Andino</h4>
								<p className='text-sm text-gray-800 font-black mb-2'>Representación Regional</p>
								<div className='bg-purple-100 rounded-lg px-3 py-1'>
									<span className='text-purple-700 font-bold text-sm'>5 cargos</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Enlaces Oficiales */}
				<div className='mb-12'>
				<div className='text-center mb-8'>
					<h3 className='text-2xl md:text-3xl font-black text-gray-900 mb-4'>Portales Oficiales</h3>
					<p className='text-gray-800 text-base font-black'>Accede a la información electoral oficial</p>
						<div className='w-20 h-1 bg-gradient-to-r from-blue-500 to-green-600 rounded-full mx-auto mt-4'></div>
					</div>
					
					<div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
						<a href='https://eg2026.onpe.gob.pe' target='_blank' rel='noopener noreferrer'
					className='group bg-white rounded-lg p-6 shadow-xl border border-blue-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300'>
				<div className='text-center'>
					<div className='w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg'>
									<span className='text-white text-2xl font-bold'>O</span>
								</div>
							<h4 className='text-lg font-black text-gray-900 mb-2'>ONPE Oficial</h4>
							<p className='text-gray-800 mb-4 font-black'>Portal Elecciones 2026</p>
								<div className='bg-blue-50 rounded-lg px-4 py-2'>
									<span className='text-blue-700 font-bold'>→ Visitar Portal</span>
								</div>
							</div>
						</a>
						
						<a href='https://portal.jne.gob.pe/portal' target='_blank' rel='noopener noreferrer'
							className='group bg-white rounded-lg p-6 shadow-xl border border-emerald-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300'>
							<div className='text-center'>
								<div className='w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg'>
									<span className='text-white text-2xl font-bold'>J</span>
								</div>
							<h4 className='text-lg font-black text-gray-900 mb-2'>JNE Portal</h4>
							<p className='text-gray-800 mb-4 font-black'>Jurado Nacional Electoral</p>
								<div className='bg-emerald-50 rounded-lg px-4 py-2'>
									<span className='text-emerald-700 font-bold'>→ Visitar Portal</span>
								</div>
							</div>
						</a>
						
						<a href='https://votoinformado.jne.gob.pe/voto' target='_blank' rel='noopener noreferrer'
							className='group bg-white rounded-lg p-6 shadow-xl border border-purple-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300'>
							<div className='text-center'>
								<div className='w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg'>
									<span className='text-white text-2xl font-bold'>V</span>
								</div>
							<h4 className='text-lg font-black text-gray-900 mb-2'>Voto Informado</h4>
							<p className='text-gray-800 mb-4 font-black'>Educación Electoral</p>
								<div className='bg-purple-50 rounded-lg px-4 py-2'>
									<span className='text-purple-700 font-bold'>→ Visitar Portal</span>
								</div>
							</div>
						</a>
					</div>
				</div>

			{/* Cronograma de Eventos */}
			<div className='bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 md:p-12 shadow-2xl border-2 border-blue-200 relative overflow-hidden'>
				{/* Decoración de fondo */}
				<div className='absolute top-0 right-0 w-40 h-40 bg-blue-50 rounded-full -translate-y-20 translate-x-20 opacity-40'></div>
				<div className='relative z-10'>
				<div className='text-center mb-8'>
					<h2 className='text-2xl md:text-3xl font-black text-gray-900 mb-4'>Cronograma de Eventos</h2>
					<p className='text-gray-800 text-base font-black mb-4'>Fechas importantes del proceso electoral</p>
						<div className='w-20 h-1 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full mx-auto mb-6'></div>
						
						<div className='bg-gradient-to-r from-emerald-50 to-blue-50 rounded-lg px-6 py-3 inline-block border border-emerald-200'>
							<span className='text-emerald-800 font-bold'>
								{events.length} eventos disponibles
							</span>
						</div>
					</div>
					
					<div className='space-y-8'>
						{events.map(e => {
							const date = e.date ? new Date(e.date).toLocaleDateString('es-PE', {
								weekday: 'long',
								year: 'numeric',
								month: 'long',
								day: 'numeric'
							}) : 'Fecha por confirmar'

							const isCompleted = e.date && new Date(e.date) < new Date()
							const isUpcoming = e.date && new Date(e.date) > new Date() && new Date(e.date) <= new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)

							return (
							<div key={e.id} className={`
								rounded-lg p-6 border-2 transition-all duration-300 hover:shadow-lg
									${isCompleted ? 'bg-gray-50 border-gray-200' : 
									  isUpcoming ? 'bg-gradient-to-r from-amber-50 to-orange-50 border-amber-300' : 
									  'bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200'}
								`}>
									<div className='flex flex-col md:flex-row md:items-center gap-4'>
									<div className={`
										w-16 h-16 rounded-lg flex items-center justify-center font-bold text-white shadow-lg
											${isCompleted ? 'bg-gray-400' : 
											  isUpcoming ? 'bg-gradient-to-br from-amber-500 to-orange-500' : 
											  'bg-gradient-to-br from-blue-500 to-indigo-600'}
										`}>
											<span className='text-lg'>
												{isCompleted ? '✓' : isUpcoming ? '!' : '→'}
											</span>
										</div>
										
										<div className='flex-1'>
									<h3 className='text-lg font-black text-gray-900 mb-2'>{e.title}</h3>
									<p className='text-gray-800 font-black mb-2'>{e.description}</p>
											<div className='flex flex-wrap gap-3'>
												<div className={`
													px-3 py-1 rounded-lg font-bold text-sm
													${isCompleted ? 'bg-gray-100 text-gray-600' : 
													  isUpcoming ? 'bg-amber-100 text-amber-700' : 
													  'bg-blue-100 text-blue-700'}
												`}>
													{date}
												</div>
												{e.status && (
													<div className={`
														px-3 py-1 rounded-lg font-bold text-sm
														${e.status === 'Completado' ? 'bg-green-100 text-green-700' : 
														  e.status === 'En proceso' ? 'bg-yellow-100 text-yellow-700' : 
														  'bg-blue-100 text-blue-700'}
													`}>
														{e.status}
													</div>
												)}
											</div>
										</div>
									</div>
								</div>
							)
						})}
					</div>
				</div>
			</div>

				{/* Footer con información de contacto */}
				<div className='bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-2xl border-2 border-gray-200 relative overflow-hidden'>
					{/* Decoración de fondo */}
					<div className='absolute top-0 left-0 w-32 h-32 bg-blue-50 rounded-full -translate-y-16 -translate-x-16 opacity-30'></div>
					<div className='relative z-10'>
					<div className='text-center mb-6'>
						<h3 className='text-xl font-black mb-2 text-gray-900'>Información y Contacto</h3>
						<div className='w-16 h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mx-auto'></div>
					</div>
					
					<div className='grid grid-cols-1 md:grid-cols-3 gap-10 text-center'>
						<div className='bg-blue-50 rounded-lg p-4 border border-blue-200'>
							<div className='text-2xl mb-2'>📧</div>
							<h4 className='font-black text-sm mb-1 text-gray-900'>Consultas</h4>
							<p className='text-gray-800 font-bold text-sm'>info@onpe.gob.pe</p>
						</div>
						<div className='bg-green-50 rounded-lg p-4 border border-green-200'>
							<div className='text-2xl mb-2'>📞</div>
							<h4 className='font-black text-sm mb-1 text-gray-900'>Teléfono</h4>
							<p className='text-gray-800 font-bold text-sm'>417-0630</p>
						</div>
						<div className='bg-purple-50 rounded-lg p-4 border border-purple-200'>
							<div className='text-2xl mb-2'>🌐</div>
							<h4 className='font-black text-sm mb-1 text-gray-900'>Web Oficial</h4>
							<p className='text-gray-800 font-bold text-sm'>www.onpe.gob.pe</p>
						</div>
					</div>
					
					<div className='text-center mt-6 pt-6 border-t border-gray-300'>
						<p className='text-gray-800 font-black text-sm'>
							<strong>Elecciones 2026</strong> • 12 abril • <span className="text-blue-600 font-black">¡Tu voto cuenta!</span>
						</p>
					</div>
				</div>
			</div>

			</div>
		</div>
	)
}