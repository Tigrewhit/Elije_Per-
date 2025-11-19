import React,{useEffect,useState} from 'react'
import { CANDIDATES_DATA, PARTIES_DATA } from '../data/electoralData'
import { Link } from 'react-router-dom'
import { useOffline } from '../hooks/useOffline'
import OfflineIndicator from '../components/OfflineIndicator'
import CandidateModal from '../components/CandidateModal'

export default function Candidates(){
	const [list,setList]=useState([])
	const [loading,setLoading]=useState(true)
	const [error,setError]=useState(null)
	const [fromCache,setFromCache]=useState(false)
	const [selectedCandidate, setSelectedCandidate] = useState(null)
	const [modalType, setModalType] = useState(null)
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [roleFilter, setRoleFilter] = useState('')
	const [partyFilter, setPartyFilter] = useState('')
	
	const { 
		isOnline, 
		isServiceWorkerReady, 
		cacheStatus, 
		getDataWithFallback 
	} = useOffline()

	useEffect(()=>{
		loadCandidates()
	},[])
	
	async function loadCandidates() {
		setLoading(true)
		setError(null)
		
		try {
			// Simular delay de red
			await new Promise(resolve => setTimeout(resolve, isOnline ? 300 : 100))
			
			// Obtener datos con fallback offline
			const candidatesData = await getDataWithFallback('candidates', CANDIDATES_DATA)
			
			setList(candidatesData)
			setFromCache(!isOnline)
			setLoading(false)
			
		} catch (e) {
			console.error('Error cargando candidatos:', e)
			setError(isOnline ? 'Error de conexión' : 'Datos no disponibles offline')
			setLoading(false)
		}
	}

	function openModal(candidate, type) {
		setSelectedCandidate(candidate)
		setModalType(type)
		setIsModalOpen(true)
	}

	function closeModal() {
		setIsModalOpen(false)
		setSelectedCandidate(null)
		setModalType(null)
	}

	if(loading) return (
		<div className='flex items-center justify-center min-h-screen'>
			<div className='text-center'>
				<div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4'></div>
				<h3 className='font-semibold text-lg mb-2'>Candidatos Presidenciales</h3>
				<p className='text-gray-600'>{isOnline ? 'Cargando candidatos...' : 'Cargando desde cache...'}</p>
			</div>
		</div>
	)
	
	if(error) return (
		<div className='max-w-2xl mx-auto p-6'>
			<OfflineIndicator isOnline={isOnline} isServiceWorkerReady={isServiceWorkerReady} cacheStatus={cacheStatus} />
			<div className='bg-red-50 border border-red-200 rounded-lg p-4'>
				<h3 className='font-semibold text-red-800 mb-2'>Error al cargar candidatos</h3>
				<p className='text-red-600'>{error}</p>
				<button 
					onClick={loadCandidates}
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
			borderRadius: '20px',
			background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)'
		}}>
				<div className='p-4 sm:p-6 md:p-8'>
				<OfflineIndicator isOnline={isOnline} isServiceWorkerReady={isServiceWorkerReady} cacheStatus={cacheStatus} />
					<div className='bg-white shadow-lg border border-gray-200 mb-6 p-4 sm:p-6 md:p-8' style={{borderRadius: '16px'}}>
						<h3 className='text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4'>Candidatos Presidenciales - Elecciones Generales 2026</h3>
						<p className='text-gray-600 mb-6 text-sm sm:text-base md:text-lg leading-relaxed'>Lista oficial de candidatos presidenciales inscritos para las Elecciones Generales 2026. Información verificada con fuentes oficiales JNE/ONPE.</p>						<div className='bg-gray-50 border border-gray-200 shadow-sm p-3 sm:p-4 md:p-6' style={{borderRadius: '12px'}}>
							<div className='flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 sm:gap-4'>
							<div className='flex items-center gap-2'>
								<label className='text-sm font-medium'>Filtrar:</label>
							<select className='px-3 py-2 border rounded-lg text-sm bg-white shadow-sm' value={roleFilter} onChange={(e) => setRoleFilter(e.target.value)}>
								<option value="">Todos los candidatos</option>
								<option value="Presidente">Candidatos Presidenciales</option>
							</select>
							</div>
					<div className='flex items-center gap-2'>
						<label className='text-sm font-medium'>Partido:</label>
				<select className='px-2 py-1 border rounded text-sm' value={partyFilter} onChange={(e) => setPartyFilter(e.target.value)}>
					<option value="">Todos los partidos</option>
					<option value="Fuerza Popular">Fuerza Popular</option>
					<option value="Renovación Popular">Renovación Popular</option>
					<option value="Alianza para el Progreso (APP)">Alianza para el Progreso (APP)</option>
					<option value="Acción Popular">Acción Popular</option>
					<option value="Frente de la Esperanza">Frente de la Esperanza</option>
					<option value="Somos Perú">Somos Perú</option>
					<option value="Unidos por el Perú (ex Podemos Perú)">Unidos por el Perú</option>
					<option value="Perú Libre">Perú Libre</option>
					<option value="Por Un Camino Diferente">Por Un Camino Diferente</option>
					<option value="Libertad Popular">Libertad Popular</option>
					<option value="Ahora Nación">Ahora Nación</option>
				</select>
					</div>
								<div className='flex flex-col sm:flex-row items-start sm:items-center w-full sm:w-auto' style={{gap: '16px sm:32px', marginTop: '12px sm:0px'}}>
								<a href='https://portal.jne.gob.pe/portal' target='_blank' rel='noopener noreferrer' 
								   className='bg-green-600 text-black text-sm hover:bg-green-700 transition-all duration-200 font-semibold shadow-md' style={{padding: '8px 20px', borderRadius: '6px'}}>
									JNE Oficial
								</a>
								<a href='https://infogob.jne.gob.pe/' target='_blank' rel='noopener noreferrer' 
								   className='bg-blue-600 text-white text-sm hover:bg-blue-700 transition-all duration-200 font-semibold shadow-md' style={{padding: '8px 20px', borderRadius: '6px'}}>
									InfoGob JNE
								</a>
							</div>
							{fromCache && <span className='text-sm text-orange-600 font-semibold'>📱 Datos offline</span>}
						</div>
					</div>
				</div>

			<div className="grid gap-4 sm:gap-6 md:gap-8" style={{marginTop: '40px'}}>
			{list.filter(c => {
				const matchesRole = !roleFilter || c.role === roleFilter
				const matchesParty = !partyFilter || c.party === partyFilter
				return matchesRole && matchesParty
			}).map(c=>(
					<div key={c.id} className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-200 shadow-md p-4 sm:p-6 md:p-8 mb-6 sm:mb-6 md:mb-8" style={{borderRadius: '16px'}}>
						<div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 p-2 sm:p-3 md:p-4">
							<img 
								src={c.photo_url || '/icon-192.png'} 
								alt={c.name} 
								className='rounded-lg object-cover border border-gray-300' 
								style={{
											width: '50px',
											height: '50px',
											minWidth: '50px',
											minHeight: '50px',
											maxWidth: '50px',
											maxHeight: '50px',
											margin: '8px 8px 0 0'
										}}
									/>
								<div className='flex-1 px-2 sm:px-3 md:px-4' style={{minWidth:'250px'}}>
								<div className='flex items-center justify-between' style={{flexWrap:'wrap'}}>
									<Link to={`/candidates/${c.id}`} className='font-semibold text-lg text-blue-600 hover:underline'>{c.name}</Link>
									<span className={`px-2 py-1 rounded text-xs font-medium ${c.role==='Presidente'?'bg-yellow-100 text-yellow-800':'bg-blue-100 text-blue-800'}`}>{c.role || 'Candidato'}</span>
								</div>
								<div className='text-sm font-semibold text-blue-800 mb-3' style={{paddingTop: '4px'}}>{c.party}</div>
								<p className='text-sm text-gray-700 mb-4' style={{paddingRight: '12px', lineHeight: '1.6'}}>{c.bio}</p>
								{c.notes && <p className='text-xs text-gray-600 mb-5 italic' style={{paddingRight: '12px', marginTop: '8px'}}>💬 {c.notes}</p>}
									<div className='flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm mt-4 sm:mt-5 md:mt-6 pt-3 sm:pt-4'>
									<button 
										onClick={(e) => {
											e.preventDefault()
											e.stopPropagation()
											openModal(c, 'cv')
										}}
									   className='px-3 sm:px-4 md:px-5 py-2 sm:py-3 md:py-3 bg-blue-500 text-black hover:bg-blue-600 transition-colors font-semibold rounded-xl sm:rounded-2xl w-full sm:w-auto text-center'>
										📄 Hoja de Vida
									</button>
									<button 
										onClick={(e) => {
											e.preventDefault()
											e.stopPropagation()
											openModal(c, 'proposals')
										}}
									   className='px-3 sm:px-4 md:px-5 py-2 sm:py-3 md:py-3 bg-green-500 text-black hover:bg-green-600 transition-colors font-semibold rounded-xl sm:rounded-2xl w-full sm:w-auto text-center'>
										📋 Propuestas y Acciones
									</button>
			<a href={c.source_url} target='_blank' rel='noreferrer' 
			   className='px-3 sm:px-4 md:px-5 py-2 sm:py-3 md:py-3 bg-purple-500 text-black hover:bg-purple-600 transition-colors font-semibold rounded-xl sm:rounded-2xl w-full sm:w-auto text-center'>
										🔗 JNE Oficial
									</a>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>

			<CandidateModal 
				candidate={selectedCandidate}
				type={modalType}
				isOpen={isModalOpen}
				onClose={closeModal}
			/>
			</div>
		</div>
	)
}