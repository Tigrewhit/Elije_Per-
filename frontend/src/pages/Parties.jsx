import React, {useEffect, useState} from 'react'

const PARTIES_OFFICIAL_DATA = [
  {
    id: 1,
    name: 'Acción Popular',
    description: 'Partido de centro, fundado por Fernando Belaúnde Terry. Conocido por su historia de gobernabilidad y divisiones internas recientes.',
    type: 'partido'
  },
  {
    id: 2,
    name: 'Ahora Nación',
    description: 'Nuevo partido liderado por Alfonso López Chau, exrector de la UNI, con un enfoque progresista y de izquierda moderada.',
    type: 'partido'
  },
  {
    id: 3,
    name: 'Alianza para el Progreso (APP)',
    description: 'Partido de centro-derecha, liderado por César Acuña Peralta, con fuerte presencia regional en el norte del país.',
    type: 'partido'
  },
  {
    id: 4,
    name: 'Avanza País – Partido de Integración Social',
    description: 'Partido de derecha liberal, asociado a figuras como Hernando de Soto en elecciones pasadas.',
    type: 'partido'
  },
  {
    id: 5,
    name: 'Frente Popular Agrícola FIA del Perú (FREPAP)',
    description: 'Partido evangélico y conservador, conocido por su disciplina partidaria y representación congresal previa.',
    type: 'partido'
  },
  {
    id: 6,
    name: 'Fuerza Popular',
    description: 'Partido de derecha, liderado por Keiko Fujimori, con una base fujimorista sólida y representación significativa en el Congreso.',
    type: 'partido'
  },
  {
    id: 7,
    name: 'Juntos por el Perú',
    description: 'Coalición de izquierda, que incluye movimientos como Nuevo Perú. Ha logrado representación parlamentaria y tiene una plataforma progresista.',
    type: 'partido'
  },
  {
    id: 8,
    name: 'Libertad Popular',
    description: 'Partido de tendencia conservadora y liberal, liderado por figuras como Rafael Belaúnde Llosa.',
    type: 'partido'
  },
  {
    id: 9,
    name: 'Partido Aprista Peruano (PAP)',
    description: 'Partido histórico y tradicional de centro-izquierda, con ideología socialdemócrata. Busca recuperar su representación electoral.',
    type: 'partido'
  },
  {
    id: 10,
    name: 'Partido Demócrata Somos Perú',
    description: 'Partido de centro, con presencia a nivel municipal y regional. Ha formado parte de diversas alianzas en el Congreso.',
    type: 'partido'
  },
  {
    id: 11,
    name: 'Partido Frente de la Esperanza 2021',
    description: 'Partido de centro, fundado por Fernando Olivera, conocido por su lucha anticorrupción.',
    type: 'partido'
  },
  {
    id: 12,
    name: 'Partido Morado',
    description: 'Partido liberal, de centro-izquierda, conocido por promover reformas institucionales.',
    type: 'partido'
  },
  {
    id: 13,
    name: 'Partido Nacional Perú Libre',
    description: 'Partido de izquierda, fundado por Vladimir Cerrón, que llevó a Pedro Castillo a la presidencia en 2021 y tiene fuerte presencia en la sierra central.',
    type: 'partido'
  },
  {
    id: 14,
    name: 'Partido Popular Cristiano (PPC)',
    description: 'Partido conservador de centro-derecha, con una larga trayectoria histórica, que en este proceso se presentó en alianza.',
    type: 'partido'
  },
  {
    id: 15,
    name: 'Perú Moderno',
    description: 'Partido de centro, que ha buscado postular con figuras independientes del quehacer político tradicional.',
    type: 'partido'
  },
  {
    id: 16,
    name: 'Podemos Perú',
    description: 'Partido de derecha populista, liderado por José Luna Gálvez, con una base de apoyo en sectores populares.',
    type: 'partido'
  },
  {
    id: 17,
    name: 'Renovación Popular',
    description: 'Partido de derecha conservadora y liberal, liderado por Rafael López Aliaga, actual Alcalde de Lima.',
    type: 'partido'
  },
  {
    id: 18,
    name: 'Un Camino Diferente',
    description: 'Partido liderado por el exalcalde de Trujillo, Arturo Fernández Bazán.',
    type: 'partido'
  },
  {
    id: 19,
    name: 'Alianza Electoral Venceremos',
    description: 'Una de las alianzas inscritas para estos comicios, conformada por Nuevo Perú y Voces del Pueblo.',
    type: 'alianza'
  },
  {
    id: 20,
    name: 'Alianza Electoral Unidad Nacional',
    description: 'Otra alianza inscrita, conformada por el PPC, Unidad y Paz, y Peruanos Unidos.',
    type: 'alianza'
  }
]

export default function Parties(){
  const [list,setList]=useState([])
  const [loading,setLoading]=useState(true)
  const [error,setError]=useState(null)
  const [activeTab, setActiveTab] = useState('all')

  useEffect(()=>{
    setLoading(true)
    setTimeout(() => {
      setList(PARTIES_OFFICIAL_DATA)
      setLoading(false)
    }, 300)
  },[])

  if(loading) return (<div><h3 className='font-semibold'>Agrupaciones Políticas</h3><p>Cargando...</p></div>)
  if(error) return (<div className='text-red-600'>{error}</div>)

  const filteredList = activeTab === 'all' ? list : list.filter(p => p.type === activeTab)

  return (
    <div className="px-4 sm:px-6 md:px-8" style={{
			padding: '16px',
			maxWidth: 1100,
			margin: '0 auto',
			borderRadius: '20px',
			background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)'
		}}>
			<div className="p-4 sm:p-6 md:p-8">
				<div className="bg-white shadow-lg border border-gray-200 mb-6 p-4 sm:p-6 md:p-8" style={{borderRadius: '16px'}}>
					<h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4">🏛️ Agrupaciones Políticas - Elecciones Generales 2026</h1>
					<p className="text-gray-600 mb-6 text-sm sm:text-base md:text-lg leading-relaxed">Información oficial de partidos políticos y alianzas electorales inscritas para las Elecciones Generales 2026. Información verificada con fuentes oficiales JNE.</p>
					
					<div className="bg-gray-50 border border-gray-200 shadow-sm p-3 sm:p-4 md:p-6" style={{borderRadius: '12px'}}>
						<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
							<a href='https://sroppublico.jne.gob.pe/Consulta/OrganizacionPolitica' target='_blank' rel='noopener noreferrer' 
								 className='bg-blue-500 text-black text-sm hover:bg-blue-600 transition-all duration-200 font-bold shadow-md' style={{padding: '8px 20px', borderRadius: '12px'}}>
								🔍 Más Organizaciones JNE
							</a>

							{/* Pestañas de filtrado */}
							<div className="flex flex-wrap gap-2 sm:gap-3">
								<button
									onClick={() => setActiveTab('all')}
									className={`px-4 py-2 text-sm font-medium transition-colors ${
										activeTab === 'all' 
											? 'bg-blue-600 text-white' 
											: 'bg-white text-gray-700 hover:bg-gray-100'
									}`}
									style={{borderRadius: '12px'}}
								>
									📋 Todas ({list.length})
								</button>
								<button
									onClick={() => setActiveTab('partido')}
									className={`px-4 py-2 text-sm font-medium transition-colors ${
										activeTab === 'partido' 
											? 'bg-green-600 text-white' 
											: 'bg-white text-gray-700 hover:bg-gray-100'
									}`}
									style={{borderRadius: '12px'}}
								>
									🏛️ Partidos Políticos ({list.filter(p => p.type === 'partido').length})
								</button>
								<button
									onClick={() => setActiveTab('alianza')}
									className={`px-4 py-2 text-sm font-medium transition-colors ${
										activeTab === 'alianza' 
											? 'bg-purple-600 text-white' 
											: 'bg-white text-gray-700 hover:bg-gray-100'
									}`}
									style={{borderRadius: '12px'}}
								>
									🤝 Alianzas Electorales ({list.filter(p => p.type === 'alianza').length})
								</button>
							</div>
						</div>
					</div>
				</div>

			{/* Lista de agrupaciones */}
			<div className="grid gap-4 sm:gap-6 md:gap-8" style={{marginTop: '32px sm:40px'}}>
				{filteredList.map(party => (
					<div key={party.id} className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-200 shadow-md p-4 sm:p-6 md:p-8 mb-4 sm:mb-6" style={{borderRadius: '16px'}}>
            <div className='flex items-start justify-between mb-3'>
              <div className='flex items-center gap-3'>
                <span className='text-2xl'>
                  {party.type === 'partido' ? '🏛️' : '🤝'}
                </span>
                <div>
                  <h3 className='text-lg font-bold text-gray-900'>{party.name}</h3>
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                    party.type === 'partido' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-purple-100 text-purple-800'
                  }`}>
                    {party.type === 'partido' ? 'Partido Político' : 'Alianza Electoral'}
                  </span>
                </div>
              </div>
            </div>
            
            <p className='text-gray-700 leading-relaxed mb-4'>{party.description}</p>
            
            <div className='flex flex-wrap gap-4 pt-3 border-t border-gray-200' style={{marginTop: '20px', paddingTop: '8px'}}>
              <a href='https://sroppublico.jne.gob.pe/Consulta/OrganizacionPolitica' target='_blank' rel='noopener noreferrer' 
                 className='bg-blue-500 text-black hover:bg-blue-600 transition-colors font-semibold' style={{padding: '8px 16px', borderRadius: '12px', fontSize: '14px'}}>
                📋 Ver en ROP JNE
              </a>
              <a href='https://infogob.jne.gob.pe/' target='_blank' rel='noopener noreferrer' 
                 className='bg-green-500 text-black hover:bg-green-600 transition-colors font-semibold' style={{padding: '8px 16px', borderRadius: '12px', fontSize: '14px'}}>
                📊 InfoGob JNE
              </a>
              <a href='https://plataformaelectoral.jne.gob.pe/' target='_blank' rel='noopener noreferrer' 
                 className='bg-purple-500 text-black hover:bg-purple-600 transition-colors font-semibold' style={{padding: '8px 16px', borderRadius: '12px', fontSize: '14px'}}>
                📖 Plataforma Electoral
              </a>
            </div>
          </div>
        ))}
      </div>
      
      {filteredList.length === 0 && (
        <div className='text-center py-12'>
          <div className='text-6xl mb-4'>🏛️</div>
          <h3 className='text-xl font-semibold text-gray-700 mb-2'>No hay organizaciones en esta categoría</h3>
          <p className='text-gray-500'>Selecciona otra pestaña para ver más organizaciones políticas</p>
        </div>
      )}

			{/* Footer informativo */}
			<div className='mt-8 p-6 bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200' style={{borderRadius: '16px'}}>
				<h3 className='text-lg font-bold text-gray-900 mb-3'>ℹ️ Información Oficial</h3>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700'>
					<div>
						<strong>🏛️ Partidos Políticos:</strong> {list.filter(p => p.type === 'partido').length} organizaciones inscritas
					</div>
					<div>
						<strong>🤝 Alianzas Electorales:</strong> {list.filter(p => p.type === 'alianza').length} coaliciones formadas
					</div>
					<div>
						<strong>📋 Fuente Oficial:</strong> Registro de Organizaciones Políticas (ROP) - JNE
					</div>
					<div>
						<strong>📞 Consultas:</strong> JNE: (511) 311-1717
					</div>
				</div>
			</div>
			</div>
		</div>
	)
}