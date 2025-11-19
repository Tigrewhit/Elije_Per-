import React, { useEffect, useState } from 'react'
import { CALENDAR_DATA } from '../data/electoralData'
import { useOffline } from '../hooks/useOffline'
import OfflineIndicator from '../components/OfflineIndicator'

export default function Calendar() {
	const [events, setEvents] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)
	const [fromCache, setFromCache] = useState(false)
	const [selectedPhase, setSelectedPhase] = useState("")
	
	const { 
		isOnline, 
		isServiceWorkerReady, 
		cacheStatus, 
		getDataWithFallback 
	} = useOffline()

	async function load() {
		setLoading(true)
		setError(null)
		
		try {
			await new Promise(resolve => setTimeout(resolve, isOnline ? 300 : 100))
			const calendarData = await getDataWithFallback('calendar', CALENDAR_DATA)
			
			setEvents(calendarData)
			setFromCache(!isOnline)
			setLoading(false)
			
		} catch (e) {
			console.error('Error cargando calendario:', e)
			setError(isOnline ? 'Error de conexión' : 'Datos no disponibles offline')
			setLoading(false)
		}
	}

	useEffect(() => { load() }, [])

	if (loading) return (
		<div className='flex items-center justify-center min-h-screen'>
			<div className='text-center'>
				<div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4'></div>
				<h3 className='font-semibold text-lg mb-2'>Cronograma Electoral</h3>
				<p className='text-gray-600'>{isOnline ? 'Cargando datos...' : 'Cargando desde cache...'}</p>
			</div>
		</div>
	)
	
	if (error) return (
		<div className='max-w-2xl mx-auto p-6'>
			<OfflineIndicator isOnline={isOnline} isServiceWorkerReady={isServiceWorkerReady} cacheStatus={cacheStatus} />
			<div className='bg-red-50 border border-red-200 p-4' style={{borderRadius: '16px'}}>
				<h3 className='font-semibold text-red-800 mb-2'>Error al cargar el cronograma</h3>
				<p className='text-red-600'>{error}</p>
				<button 
					onClick={load}
					className='mt-3 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors'
				>
					Reintentar
				</button>
			</div>
		</div>
	)

	return (
		<div style={{ 
			padding: '28px', 
			maxWidth: 1100, 
			margin: '0 auto',
			borderRadius: '16px',
			background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)'
		}}>
			<div className="p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10">
				<OfflineIndicator isOnline={isOnline} isServiceWorkerReady={isServiceWorkerReady} cacheStatus={cacheStatus} />
			
				<div className='bg-white rounded-2xl shadow-xl border border-gray-200 mb-4 sm:mb-6 md:mb-8 p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10' style={{boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'}}>
					<h2 className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-5 lg:mb-6 px-1 sm:px-2' style={{paddingBottom: '8px'}}>
						<strong>📅 Cronograma Electoral 2026 - Elecciones Generales</strong>
					</h2>
					<p className='text-gray-600 mb-4 sm:mb-5 md:mb-6 lg:mb-8 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed px-1 sm:px-2' style={{paddingRight: '8px sm:16px'}}>
						<strong>Este cronograma corresponde a las Elecciones Generales en Perú y ha sido organizado por la etapa del proceso electoral. Información oficial verificada con fuentes ONPE/JNE.</strong>
					</p>
					
					<div className='bg-gray-50 rounded-xl border border-gray-200 shadow-sm p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8' style={{marginTop: '8px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}}>
						<div className='flex flex-col gap-3 sm:gap-4 md:gap-6'>
							<div className='flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 md:gap-4'>
								<label className='text-xs sm:text-sm md:text-base font-medium whitespace-nowrap'>📋 Filtrar por fase:</label>
								<select 
									value={selectedPhase}
									onChange={(e) => setSelectedPhase(e.target.value)}
									className='px-2 sm:px-3 md:px-4 py-1 sm:py-2 md:py-3 border text-xs sm:text-sm md:text-base bg-white shadow-sm w-full max-w-full hover:border-blue-400 focus:border-blue-500 focus:outline-none transition-colors' 
									style={{borderRadius: '8px sm:12px', minWidth: '0'}}
								>
									<option value="">Todas las fases</option>
									<option value="I. Fase Pre-Electoral y Afiliaciones">I. Pre-Electoral</option>
									<option value="II. Fase de Candidaturas y Definición">II. Candidaturas</option>
									<option value="III. Fase de Organización y Votación">III. Votación</option>
								</select>
							</div>
							<div className='flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 md:gap-4 w-full sm:w-auto'>
								<a href='https://eg2026.onpe.gob.pe' target='_blank' rel='noopener noreferrer' 
					   className='bg-blue-600 text-white text-xs sm:text-sm md:text-base hover:bg-blue-700 transition-all duration-200 font-semibold shadow-md px-2 sm:px-3 md:px-4 py-1 sm:py-2 md:py-3 text-center flex-1 sm:flex-none' 
					   style={{borderRadius: '6px sm:8px', minWidth: '0'}}>
									ONPE Oficial
								</a>
								<a href='https://portal.jne.gob.pe/portal' target='_blank' rel='noopener noreferrer' 
								   className='bg-green-600 text-black text-xs sm:text-sm md:text-base hover:bg-green-700 transition-all duration-200 font-semibold shadow-md px-2 sm:px-3 md:px-4 py-1 sm:py-2 md:py-3 text-center flex-1 sm:flex-none' 
								   style={{borderRadius: '6px sm:8px', minWidth: '0'}}>
									📊 JNE Portal
								</a>
								{fromCache && <span className='text-xs sm:text-sm text-orange-600 font-semibold px-2 sm:px-3 py-1 bg-orange-50 rounded-md text-center sm:text-left'>📱 Offline</span>}
							</div>
						</div>
					</div>
				</div>
				
				<div className='text-black rounded-xl p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 mb-4 sm:mb-5 md:mb-6 lg:mb-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-[1.02]' style={{boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)'}}>
					<div className='text-center'>
						<h3 className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-2 sm:mb-3 md:mb-4'>
							<strong>🗳️ ELECCIONES GENERALES 2026</strong>
						</h3>
						<div className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black mb-2 sm:mb-3 md:mb-4 text-black'>
							DOMINGO 11 DE ABRIL
						</div>
						<div className='text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-black mb-3 sm:mb-4 md:mb-5'>
							<strong>Primera Vuelta • Horario: 7:00 AM - 5:00 PM</strong>
						</div>
						<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6 text-xs sm:text-sm md:text-base' style={{marginTop: '12px sm:16px'}}>
							<div className='bg-white/20' style={{padding: '20px', borderRadius: '16px'}}>
								<div className='font-bold text-black text-sm sm:text-base md:text-lg'>27+ Millones</div>
								<div className='text-black text-xs sm:text-sm md:text-base'>Electores Habilitados</div>
							</div>
							<div className='bg-white/20' style={{padding: '20px', borderRadius: '16px'}}>
								<div className='font-bold text-black text-sm sm:text-base md:text-lg'>25 Regiones</div>
								<div className='text-black text-xs sm:text-sm md:text-base'>Todo el Territorio Nacional</div>
							</div>
							<div className='bg-white/20' style={{padding: '20px', borderRadius: '16px'}}>
								<div className='font-bold text-black text-sm sm:text-base md:text-lg'>Segunda Vuelta</div>
								<div className='text-black text-xs sm:text-sm md:text-base'>7 de Junio (si es necesario)</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24 xl:space-y-28 mt-8 sm:mt-10 md:mt-12 lg:mt-16 pt-4 sm:pt-6 md:pt-8'>
				{['I. Fase Pre-Electoral y Afiliaciones', 'II. Fase de Candidaturas y Definición', 'III. Fase de Organización y Votación']
					.filter(phase => selectedPhase === "" || phase === selectedPhase)
					.map(phase => {
					const phaseEvents = events.filter(e => e.phase === phase)
					if (phaseEvents.length === 0) return null

					const phaseColors = {
						'I. Fase Pre-Electoral y Afiliaciones': { bg: 'bg-blue-50', border: 'border-blue-200', title: 'text-blue-800', icon: '📋' },
						'II. Fase de Candidaturas y Definición': { bg: 'bg-green-50', border: 'border-green-200', title: 'text-green-800', icon: '🗳️' },
						'III. Fase de Organización y Votación': { bg: 'bg-purple-50', border: 'border-purple-200', title: 'text-purple-800', icon: '⚡' }
					}

					const colors = phaseColors[phase] || phaseColors['I. Fase Pre-Electoral y Afiliaciones']

						return (
							<div key={phase} className={`${colors.bg} ${colors.border} border-2 rounded-xl p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24 mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 mx-2 sm:mx-4 md:mx-6 lg:mx-8 xl:mx-10 shadow-lg`}>
							<div className='mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16 pb-6 sm:pb-8 md:pb-10 lg:pb-12 xl:pb-14 border-b-2 border-gradient-to-r from-gray-200 via-gray-300 to-gray-200 relative' style={{borderImage: 'linear-gradient(90deg, transparent, rgba(156, 163, 175, 0.5), transparent) 1'}}>
								<h3 className={`text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold ${colors.title} mb-4 sm:mb-5 md:mb-6 lg:mb-8 xl:mb-10 flex items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-7 pb-3 sm:pb-4 md:pb-5 lg:pb-6 xl:pb-7 pl-2 sm:pl-3 md:pl-5 lg:pl-6 xl:pl-8 relative`} style={{textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.4))', borderRadius: '12px', backdropFilter: 'blur(10px)'}}>
									<span className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl animate-pulse hover:animate-bounce transform transition-all duration-300 hover:scale-110' style={{filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))'}}>{colors.icon}</span>
									<strong>{phase}</strong>
								</h3>
								<p className='text-gray-600 font-medium text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed pl-2 sm:pl-3 md:pl-5 lg:pl-6 xl:pl-8 pr-2 sm:pr-3 md:pr-4 lg:pr-5 xl:pr-6 mt-3 sm:mt-4 md:mt-5 lg:mt-6 xl:mt-8'>
									{phase === 'I. Fase Pre-Electoral y Afiliaciones' && 'Esta fase se centra en la preparación de los partidos, el padrón y la convocatoria oficial.'}
									{phase === 'II. Fase de Candidaturas y Definición' && 'Esta fase se enfoca en la selección interna de candidatos y la presentación de sus propuestas.'}
									{phase === 'III. Fase de Organización y Votación' && 'Esta fase incluye la gestión operativa de la votación, el control de candidatos y el día de las elecciones.'}
								</p>
							</div>

							<div className='space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 xl:space-y-14 mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-14 pt-6 sm:pt-8 md:pt-10 lg:pt-12 xl:pt-14'>
								{phaseEvents.map(e => {
									const date = e.date ? new Date(e.date).toLocaleDateString('es-PE', {
										weekday: 'long',
										year: 'numeric',
										month: 'long',
										day: 'numeric'
									}) : 'Fecha por confirmar'

									const isCompleted = e.status === 'Completado'
									const isInProgress = e.status === 'En proceso'
									const isScheduled = e.status === 'Programado'

									return (
								<div key={e.id} className={`
									bg-white border-2 transition-all duration-200 hover:shadow-xl rounded-2xl shadow-lg
									p-6 sm:p-7 md:p-8 lg:p-10 xl:p-12 m-4 sm:m-5 md:m-6 lg:m-8 xl:m-10 mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20
									${isCompleted ? 'border-green-200 bg-green-50' : 
									  isInProgress ? 'border-orange-200 bg-orange-50' : 
									  'border-gray-200 bg-white'}
									`}>
											<div className='flex flex-col sm:flex-row items-start gap-5 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10'>
												<div className={`
													w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg flex-shrink-0 shadow-lg
													${isCompleted ? 'bg-green-500' : 
													  isInProgress ? 'bg-orange-500' : 
													  'bg-blue-500'}
												`}>
													{isCompleted ? '✅' : isInProgress ? '⏳' : '📅'}
												</div>
												
												<div className='flex-1' style={{minWidth: '200px'}}>
													<div className='flex flex-col sm:flex-row items-start justify-between mb-3 sm:mb-4 gap-2 sm:gap-3 md:gap-4' style={{paddingBottom: '6px sm:8px'}}>
														<h4 className='text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3' style={{paddingRight: '4px sm:8px md:12px'}}>
															<strong>{e.title}</strong>
														</h4>
														<div className='flex flex-col sm:flex-row gap-1 sm:gap-2 md:gap-3'>
															<span className='px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm md:text-base font-bold bg-gray-100 text-gray-700 shadow-sm'>
																{date}
															</span>
															<span className={`
																px-3 py-1 rounded-full text-sm font-bold transition-all duration-300 hover:scale-105 shadow-md
																${isCompleted ? 'bg-gradient-to-r from-green-100 to-green-200 text-green-800 border border-green-300' : 
																  isInProgress ? 'bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 border border-orange-300' : 
																  'bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 border border-blue-300'}
															`} style={{textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)', boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.5)'}}>
																{e.status}
															</span>
														</div>
													</div>
													<p className='text-gray-700 leading-relaxed mb-4 font-medium' style={{paddingRight: '8px', lineHeight: '1.7'}}>
														<strong>{e.description}</strong>
													</p>
													{e.details && (
														<div className='bg-white/70 text-sm text-gray-600 border-l-4 border-blue-300' style={{padding: '16px', marginTop: '8px', borderRadius: '12px'}}>
															<span className='font-semibold'>💡 Detalles:</span> <em>{e.details}</em>
														</div>
													)}
												</div>
											</div>
										</div>
									)
								})}
							</div>
						</div>
					)
				})}
			</div>
			
			<div className='mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 border border-gray-200 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-[1.01]' style={{boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.5)', backdropFilter: 'blur(10px)'}}>
				<h3 className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-8 text-center px-1 sm:px-2 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 bg-clip-text text-transparent' style={{paddingBottom: '6px sm:8px md:12px', textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'}}>
					<strong>📊 Resumen del Proceso Electoral 2026</strong>
				</h3>
				
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8' style={{marginTop: '12px sm:16px'}}>
					<div className='bg-gradient-to-br from-white to-blue-50 rounded-xl border-2 border-blue-200 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 p-3 sm:p-4 md:p-5 lg:p-6 xl:p-7' style={{backdropFilter: 'blur(10px)', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)'}}>
						<div className='flex items-center gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4 md:mb-5 lg:mb-6' style={{paddingBottom: '6px sm:8px'}}>
							<div className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-xl transform transition-all duration-300 hover:scale-110 hover:rotate-12' style={{boxShadow: '0 8px 25px -5px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'}}>
								<span className='text-white text-xl font-bold animate-pulse'>🏛️</span>
							</div>
							<h4 className='font-bold text-blue-800 text-lg'>
								<strong>Autoridades a Elegir</strong>
							</h4>
						</div>
						<ul className='text-gray-700 space-y-3' style={{paddingLeft: '8px'}}>
								<li className='flex items-center gap-3' style={{padding: '6px 0'}}>
								<span className='w-2 h-2 bg-blue-500 rounded-full'></span>
								<strong>Presidente y 2 Vicepresidentes (3 cargos)</strong>
							</li>
							<li className='flex items-center gap-3' style={{padding: '6px 0'}}>
								<span className='w-2 h-2 bg-blue-500 rounded-full'></span>
								<strong>130 Congresistas nacionales</strong>
							</li>
							<li className='flex items-center gap-2'>
								<span className='w-2 h-2 bg-blue-500 rounded-full'></span>
								<strong>5 Parlamentarios Andinos</strong>
							</li>
						</ul>
					</div>

					<div className='bg-gradient-to-br from-white to-green-50 rounded-xl border-2 border-green-200 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105' style={{padding: '28px', backdropFilter: 'blur(10px)', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)'}}>
						<div className='flex items-center gap-3 mb-4'>
							<div className='w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-xl transform transition-all duration-300 hover:scale-110 hover:rotate-12' style={{boxShadow: '0 8px 25px -5px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'}}>
								<span className='text-white text-xl font-bold animate-pulse'>📊</span>
							</div>
							<h4 className='font-bold text-green-800 text-lg'>
								<strong>Datos Clave</strong>
							</h4>
						</div>
						<ul className='text-gray-700 space-y-2'>
							<li className='flex items-center gap-2'>
								<span className='w-2 h-2 bg-green-500 rounded-full'></span>
								<strong>27+ millones de electores habilitados</strong>
							</li>
							<li className='flex items-center gap-2'>
								<span className='w-2 h-2 bg-green-500 rounded-full'></span>
								<strong>25 regiones participantes</strong>
							</li>
							<li className='flex items-center gap-2'>
								<span className='w-2 h-2 bg-green-500 rounded-full'></span>
								<strong>Votación obligatoria y universal</strong>
							</li>
						</ul>
					</div>

					<div className='bg-gradient-to-br from-white to-purple-50 p-6 rounded-xl border-2 border-purple-200 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105' style={{backdropFilter: 'blur(10px)', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)'}}>
						<div className='flex items-center gap-3 mb-4'>
							<div className='w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center shadow-xl transform transition-all duration-300 hover:scale-110 hover:rotate-12' style={{boxShadow: '0 8px 25px -5px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'}}>
								<span className='text-white text-xl font-bold animate-pulse'>🔗</span>
							</div>
							<h4 className='font-bold text-purple-800 text-lg'>
								<strong>Fuentes Oficiales</strong>
							</h4>
						</div>
						<ul className='text-gray-700 space-y-3' style={{paddingLeft: '8px'}}>
							<li style={{padding: '6px 0'}}>
								<a href='https://eg2026.onpe.gob.pe' target='_blank' rel='noopener noreferrer' 
								   className='flex items-center gap-3 text-blue-600 hover:text-blue-800 hover:underline transition-colors' style={{padding: '8px'}}>
									<span className='w-2 h-2 bg-blue-500 rounded-full'></span>
									<strong>Portal ONPE Elecciones 2026</strong>
								</a>
							</li>
							<li style={{padding: '6px 0'}}>
								<a href='https://portal.jne.gob.pe/portal' target='_blank' rel='noopener noreferrer' 
								   className='flex items-center gap-3 text-green-600 hover:text-green-800 hover:underline transition-colors' style={{padding: '8px'}}>
									<span className='w-2 h-2 bg-green-500 rounded-full'></span>
									<strong>Jurado Nacional de Elecciones</strong>
								</a>
							</li>
							<li style={{padding: '6px 0'}}>
								<a href='https://votoinformado.jne.gob.pe' target='_blank' rel='noopener noreferrer' 
								   className='flex items-center gap-3 text-purple-600 hover:text-purple-800 hover:underline transition-colors' style={{padding: '8px'}}>
									<span className='w-2 h-2 bg-purple-500 rounded-full'></span>
									<strong>Plataforma Voto Informado</strong>
								</a>
							</li>
						</ul>
					</div>
				</div>
				
			<div className='mt-12 text-center bg-white border-2 border-yellow-200' style={{padding: '24px', borderRadius: '16px'}}>
				<p className='text-gray-700 font-semibold' style={{lineHeight: '1.6'}}>
						<span className='text-2xl mr-2'>🗳️</span>
						<strong>Información actualizada al 16 de noviembre de 2025 • Cronograma oficial JNE/ONPE</strong>
					</p>
				</div>
			</div>
		</div>
	)
}