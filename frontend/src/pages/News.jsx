import React, { useEffect, useState } from 'react'
import { NEWS_DATA, OFFICIAL_PLATFORMS_DATA, VOTER_GUIDES_DATA } from '../data/newsData'

export default function News(){
	const [items, setItems] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(()=>{
		setLoading(true)
		// Simular tiempo de carga
		setTimeout(() => {
			setItems(NEWS_DATA)
			setLoading(false)
		}, 300)
	},[])

	if(loading) return (<div><h3 className='font-semibold'>Noticias verificadas</h3><p>Cargando...</p></div>)
	if(error) return (<div><h3 className='font-semibold'>Noticias verificadas</h3><p className='text-red-600'>{error}</p></div>)

	return (
		<div className="container-mobile" style={{
			padding: '0',
			borderRadius: '16px',
			background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
			minHeight: '100vh'
		}}>
			<div className="p-4 sm:p-6 md:p-8">
				<div className='bg-white shadow-lg border border-gray-200 p-4 sm:p-6 md:p-8' style={{borderRadius: '16px'}}>
					<div className='mb-6'>
						<h1 className='text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4'>
							📰 Noticias Electorales 2026
						</h1>
						<p className='text-gray-600 mb-6 text-sm sm:text-base md:text-lg leading-relaxed'>
							Información verificada y actualizada sobre las Elecciones Generales 2026. Fuentes oficiales y medios verificados.
						</p>
					</div>

					<section className='bg-red-50 border border-red-200 p-4 sm:p-6 md:p-8 mb-6 sm:mb-8' style={{borderRadius: '16px', marginTop: '32px'}}>
				<h2 className="text-lg md:text-xl font-semibold mb-4 text-red-800 text-center md:text-left">
					📈 Cobertura Completa Electoral
				</h2>
					<div className='bg-white border border-red-200 p-4 sm:p-6' style={{borderRadius: '12px'}}>
					<div className="flex flex-col md:flex-row items-center md:items-start gap-4">
						<span className="text-3xl md:text-4xl flex-shrink-0">📰</span>
						<div className="text-center md:text-left">
							<h3 className="font-semibold text-red-800 mb-2 text-base md:text-lg">
								El Comercio - Sección Política
							</h3>
							<p className="text-gray-700 mb-4 text-sm md:text-base leading-relaxed">
								Sigue las últimas noticias, análisis y cobertura especial de las Elecciones Generales 2026, 
								candidatos presidenciales y mucho más.
							</p>
							<a 
								href="https://elcomercio.pe/politica/" 
								target="_blank" 
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 bg-red-600 text-black hover:bg-red-700 transition-colors font-bold"
								style={{padding: '12px 20px', borderRadius: '12px'}}
							>
								<span>📰</span>
								Mantente al día con El Comercio
							</a>
						</div>
					</div>
				</div>
			</section>

					<section style={{marginTop: '40px'}}>
						<h2 className='text-2xl font-semibold mb-6 text-gray-800'>
							🔍 Noticias Oficiales Verificadas
						</h2>
				
						<div style={{gap: '24px', display: 'grid'}}>
							{items.map(n => {
								// Categorizar noticias por importancia y tipo
								const getCategoryColor = (categoria) => {
									switch(categoria) {
										case 'presupuesto': return 'bg-blue-50 border-blue-200 text-blue-800'
										case 'tecnologia': return 'bg-purple-50 border-purple-200 text-purple-800'
										case 'organizacion': return 'bg-green-50 border-green-200 text-green-800'
										case 'logistica': return 'bg-yellow-50 border-yellow-200 text-yellow-800'
										case 'educacion': return 'bg-indigo-50 border-indigo-200 text-indigo-800'
										case 'informacion': return 'bg-gray-50 border-gray-200 text-gray-800'
										default: return 'bg-gray-50 border-gray-200 text-gray-800'
									}
								}

						const getImportanceBadge = (importancia) => {
							switch(importancia) {
								case 'alta': return 'bg-red-100 text-red-800 border-red-200'
								case 'media': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
								default: return 'bg-gray-100 text-gray-800 border-gray-200'
							}
						}

							return (
				<article key={n.id} className={`border shadow-md transition-all duration-200 hover:shadow-lg ${getCategoryColor(n.categoria)}`} style={{padding: '32px', borderRadius: '16px'}}>
					<div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3 gap-2 md:gap-0">
									<div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
										<span className={`px-3 py-1 text-xs font-medium border ${getImportanceBadge(n.importancia)} self-start`} style={{borderRadius: '12px'}}>
											{n.importancia === 'alta' ? '🔴 Alta' : n.importancia === 'media' ? '🟡 Media' : '⚪ Normal'}
										</span>
										<span className="text-xs md:text-sm font-medium text-gray-600">
											{n.fuente}
										</span>
									</div>
									<time className="text-xs text-gray-500 mt-1 md:mt-0">
										{new Date(n.publicado_en).toLocaleDateString('es-PE', { 
											year: 'numeric', 
											month: 'long', 
											day: 'numeric' 
										})}
									</time>
								</div>
								
								<h3 className="text-base md:text-lg font-semibold mb-3 text-gray-900 leading-tight">
									<a 
										href={n.url} 
										className="hover:underline block" 
										target="_blank" 
										rel="noopener noreferrer"
									>
										{n.titulo || n.title}
									</a>
								</h3>
								
								{n.cuerpo && (
									<p className="text-gray-700 mb-4 leading-relaxed text-sm md:text-base">
										{n.cuerpo}
									</p>
								)}
								
								<div className="pt-3 md:pt-4 border-t border-gray-200">
									<a 
										href={n.url}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-2 bg-blue-500 text-black hover:bg-blue-600 transition-colors font-bold"
										style={{padding: '8px 16px', borderRadius: '12px', fontSize: '14px'}}
									>
										<span>🔗</span>
										Leer noticia completa
									</a>
								</div>
							</article>
						)
					})}
					</div>
				</section>
				</div>
			</div>
		</div>
	)
}