import React, { useState } from 'react'
import { VOTER_GUIDES_DATA } from '../data/newsData'
import { POLLING_STATIONS_DATA, OFFICIAL_CONTACTS } from '../data/additionalData'

export default function Tutorial(){
	const [activeSection, setActiveSection] = useState('how-to-vote')

	const sections = {
		'how-to-vote': {
			title: '🗳️ Cómo Votar',
			content: (
				<div className='space-y-4'>
					<div className='bg-blue-50 border-l-4 border-blue-400 p-4'>
						<h4 className='font-bold text-blue-900 mb-2'>Proceso de Votación Digital 2026</h4>
						<ol className='list-decimal pl-5 space-y-2 text-blue-800'>
							<li>Presentar tu DNI original en la mesa de votación</li>
							<li>Recibir tu cédula de sufragio digital</li>
							<li>Dirigirte a la cabina de votación</li>
							<li>Seleccionar tus candidatos en la pantalla táctil</li>
							<li>Verificar tu voto antes de confirmar</li>
							<li>Depositar tu comprobante en el ánfora</li>
						</ol>
					</div>
					
					<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
						{VOTER_GUIDES_DATA.slice(0, 4).map(guide => (
							<div key={guide.id} className='border border-gray-200 rounded-lg p-4'>
								<h5 className='font-semibold text-gray-900 mb-2'>{guide.title}</h5>
								<p className='text-sm text-gray-600 mb-3'>{guide.description}</p>
								<a href={guide.url} target='_blank' rel='noopener noreferrer' 
								   className='inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm font-medium'>
									📖 Leer guía completa →
								</a>
							</div>
						))}
					</div>
				</div>
			)
		},
		'find-location': {
			title: '📍 Encuentra tu Local de Votación',
			content: (
				<div className='space-y-4'>
					<div className='bg-green-50 border-l-4 border-green-400 p-4'>
						<h4 className='font-bold text-green-900 mb-2'>Consulta tu Local de Votación</h4>
						<p className='text-green-800 mb-3'>Ingresa tu DNI en la web oficial para encontrar tu mesa:</p>
						<a href='https://consultamiembro.onpe.gob.pe/ConsultaMiembro/' target='_blank' 
						   className='inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors'>
							🔍 Consultar en ONPE
						</a>
					</div>

					<h4 className='font-semibold text-gray-900 mb-3'>Ejemplos de Locales en Lima:</h4>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
						{POLLING_STATIONS_DATA.map(station => (
							<div key={station.id} className='border border-gray-200 rounded-lg p-4'>
								<h5 className='font-semibold text-gray-900'>{station.name}</h5>
								<p className='text-sm text-gray-600'>{station.address}</p>
								<p className='text-sm text-gray-500'>Distrito: {station.district}</p>
								<p className='text-xs text-gray-500 mt-1'>Mesas: {station.tables_count}</p>
							</div>
						))}
					</div>
				</div>
			)
		},
		'offline-mode': {
			title: '📱 Modo Sin Conexión',
			content: (
				<div className='space-y-4'>
					<div className='bg-purple-50 border-l-4 border-purple-400 p-4'>
						<h4 className='font-bold text-purple-900 mb-2'>Usa Elige Perú sin Internet</h4>
						<p className='text-purple-800 mb-3'>Esta aplicación funciona completamente offline una vez cargada:</p>
						<ul className='list-disc pl-5 space-y-1 text-purple-800'>
							<li>Los datos se guardan automáticamente en tu dispositivo</li>
							<li>Puedes consultar candidatos y calendario sin conexión</li>
							<li>Las noticias se actualizan cuando recuperes conexión</li>
							<li>Funciona como una app nativa en tu teléfono</li>
						</ul>
					</div>

					<div className='bg-gray-50 p-4 rounded-lg'>
						<h5 className='font-semibold mb-2'>💡 Consejos para el Modo Offline:</h5>
						<ul className='space-y-2 text-sm text-gray-700'>
							<li>• Abre la app con internet al menos una vez por semana</li>
							<li>• Guarda esta página en favoritos de tu navegador</li>
							<li>• En Android/iOS: "Agregar a pantalla de inicio"</li>
							<li>• Los datos ocupan menos de 5MB de almacenamiento</li>
						</ul>
					</div>
				</div>
			)
		},
		'security': {
			title: '🔒 Seguridad Electoral',
			content: (
				<div className='space-y-4'>
					<div className='bg-red-50 border-l-4 border-red-400 p-4'>
						<h4 className='font-bold text-red-900 mb-2'>⚠️ Información Importante de Seguridad</h4>
						<ul className='list-disc pl-5 space-y-1 text-red-800'>
							<li>Solo confía en información de ONPE y JNE oficiales</li>
							<li>No compartas fotos de tu voto en redes sociales</li>
							<li>Reporta cualquier irregularidad a las autoridades</li>
							<li>Tu voto es secreto - nadie puede obligarte a votar de cierta forma</li>
						</ul>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
						<div className='border border-gray-200 rounded-lg p-4'>
							<h5 className='font-semibold text-gray-900 mb-2'>📞 Contactos de Emergencia</h5>
							{OFFICIAL_CONTACTS.slice(0, 2).map(contact => (
								<div key={contact.institution} className='mb-3'>
									<p className='font-medium'>{contact.institution}</p>
									<p className='text-sm text-gray-600'>Tel: {contact.phone}</p>
									<p className='text-sm text-gray-600'>Email: {contact.email}</p>
								</div>
							))}
						</div>
						
						<div className='border border-gray-200 rounded-lg p-4'>
							<h5 className='font-semibold text-gray-900 mb-2'>🌐 Enlaces Oficiales</h5>
							<div className='space-y-2'>
								<a href='https://eg2026.onpe.gob.pe' target='_blank' 
								   className='block text-blue-600 hover:text-blue-800 text-sm'>
									🏛️ Portal Oficial ONPE
								</a>
								<a href='https://portal.jne.gob.pe' target='_blank' 
								   className='block text-blue-600 hover:text-blue-800 text-sm'>
									⚖️ Portal Oficial JNE
								</a>
								<a href='https://votoinformado.jne.gob.pe' target='_blank' 
								   className='block text-blue-600 hover:text-blue-800 text-sm'>
									📚 Voto Informado JNE
								</a>
							</div>
						</div>
					</div>
				</div>
			)
		}
	}

	return (
		<div>
			<div className='mb-6'>
				<h1 className='text-3xl font-bold text-gray-900 mb-3'>📚 Guía Electoral Completa</h1>
				<p className='text-gray-700 text-lg'>Todo lo que necesitas saber para participar en las Elecciones Generales 2026</p>
			</div>

			{/* Navegación de secciones */}
			<div className='flex flex-wrap gap-2 mb-6 p-4 bg-gray-50 rounded-lg'>
				{Object.entries(sections).map(([key, section]) => (
					<button
						key={key}
						onClick={() => setActiveSection(key)}
						className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
							activeSection === key 
								? 'bg-blue-600 text-white' 
								: 'bg-white text-gray-700 hover:bg-gray-100'
						}`}
					>
						{section.title}
					</button>
				))}
			</div>

			{/* Contenido de la sección activa */}
			<div className='mb-8'>
				{sections[activeSection].content}
			</div>

			{/* Footer con información adicional */}
			<div className='mt-8 p-6 bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-xl'>
				<h3 className='text-lg font-bold text-gray-900 mb-3'>ℹ️ Más Información</h3>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700'>
					<div>
						<strong>📅 Fecha de Elecciones:</strong><br/>
						Domingo 12 de abril de 2026
					</div>
					<div>
						<strong>⏰ Horario de Votación:</strong><br/>
						7:00 AM - 5:00 PM
					</div>
					<div>
						<strong>🆔 Documento Requerido:</strong><br/>
						DNI original vigente
					</div>
				</div>
			</div>
		</div>
	)
}