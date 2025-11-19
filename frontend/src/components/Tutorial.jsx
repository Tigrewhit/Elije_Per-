import React, { useState, useEffect } from 'react'
import Joyride, { ACTIONS, EVENTS, STATUS } from 'react-joyride'

const Tutorial = ({ isActive, onClose }) => {
	const [run, setRun] = useState(false)

	const steps = [
		{
			target: 'body',
			content: (
				<div className="text-center">
					<h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">¡Bienvenido a Elige Perú! 🗳️</h3>
					<p className="text-gray-600 text-sm md:text-base">Te guiaremos por las funciones principales de la aplicación para que aproveches al máximo toda la información electoral.</p>
				</div>
			),
			placement: 'center',
			disableBeacon: true,
		},
		{
			target: '[data-tutorial="nav-candidatos"]',
			content: (
				<div>
					<h4 className="font-bold text-gray-900 mb-2 text-sm md:text-base">📋 Candidatos</h4>
					<p className="text-gray-600 text-xs md:text-sm">Conoce todos los candidatos presidenciales oficiales, sus hojas de vida y plataformas electorales verificadas por el JNE.</p>
				</div>
			),
			placement: window.innerWidth < 768 ? 'top' : 'bottom',
		},
		{
			target: '[data-tutorial="nav-calendario"]',
			content: (
				<div>
					<h4 className="font-bold text-gray-900 mb-2 text-sm md:text-base">📅 Calendario Electoral</h4>
					<p className="text-gray-600 text-xs md:text-sm">Consulta todas las fechas importantes del proceso electoral 2026, desde inscripciones hasta el día de votación.</p>
				</div>
			),
			placement: window.innerWidth < 768 ? 'top' : 'bottom',
		},
		{
			target: '[data-tutorial="nav-mi-info"]',
			content: (
				<div>
					<h4 className="font-bold text-gray-900 mb-2 text-sm md:text-base">📍 Mi Información</h4>
					<p className="text-gray-600 text-xs md:text-sm">Encuentra tu local de votación, número de mesa y toda la información que necesitas para votar correctamente.</p>
				</div>
			),
			placement: window.innerWidth < 768 ? 'top' : 'bottom',
		},
		{
			target: '[data-tutorial="nav-miembros"]',
			content: (
				<div>
					<h4 className="font-bold text-gray-900 mb-2 text-sm md:text-base">👥 Miembros de Mesa</h4>
					<p className="text-gray-600 text-xs md:text-sm">Guías completas para miembros de mesa con instrucciones, documentos y checklist paso a paso.</p>
				</div>
			),
			placement: window.innerWidth < 768 ? 'top' : 'bottom',
		},
		{
			target: '[data-tutorial="nav-noticias"]',
			content: (
				<div>
					<h4 className="font-bold text-gray-900 mb-2 text-sm md:text-base">📰 Noticias</h4>
					<p className="text-gray-600 text-xs md:text-sm">Mantente informado con las últimas noticias electorales de fuentes oficiales y verificadas.</p>
				</div>
			),
			placement: window.innerWidth < 768 ? 'top' : 'bottom',
		},
		{
			target: 'body',
			content: (
				<div className="text-center">
					<h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">¡Listo para votar informado! ✅</h3>
					<p className="text-gray-600 mb-4 text-sm md:text-base">Ya conoces todas las funciones principales de Elige Perú. Puedes repetir este tutorial cuando quieras desde el menú.</p>
					<p className="text-xs md:text-sm text-gray-500">💡 Tip: Toda la información está verificada por organismos electorales oficiales.</p>
				</div>
			),
			placement: 'center',
		},
	]

	useEffect(() => {
		if (isActive) {
			setRun(true)
		}
	}, [isActive])

	const handleJoyrideCallback = (data) => {
		const { action, index, status, type } = data

		if ([EVENTS.STEP_AFTER, EVENTS.TARGET_NOT_FOUND].includes(type)) {
			// Actualizar estado del paso
		}

		if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
			// Tutorial completado o saltado
			setRun(false)
			onClose()
		}

		if (action === ACTIONS.CLOSE) {
			setRun(false)
			onClose()
		}
	}

	return (
		<Joyride
			steps={steps}
			run={run}
			continuous={true}
			showProgress={true}
			showSkipButton={true}
			callback={handleJoyrideCallback}
			styles={{
				options: {
					primaryColor: '#3B82F6', // blue-500
					backgroundColor: '#FFFFFF',
					arrowColor: '#FFFFFF',
					overlayColor: 'rgba(0, 0, 0, 0.5)',
					textColor: '#1F2937',
					// Responsive width - smaller on mobile
					width: window.innerWidth < 768 ? Math.min(320, window.innerWidth - 40) : 350,
					zIndex: 1000,
				},
				tooltip: {
					borderRadius: window.innerWidth < 768 ? 8 : 12,
					padding: window.innerWidth < 768 ? 16 : 20,
					// Better positioning on mobile
					maxWidth: window.innerWidth < 768 ? '90vw' : '350px',
				},
				tooltipContent: {
					padding: window.innerWidth < 768 ? '8px 0' : '10px 0',
				},
				buttonNext: {
					backgroundColor: '#3B82F6',
					borderRadius: 8,
					color: '#FFFFFF',
					fontSize: window.innerWidth < 768 ? 12 : 14,
					fontWeight: 600,
					padding: window.innerWidth < 768 ? '8px 16px' : '10px 20px',
					// Touch-friendly size on mobile
					minHeight: window.innerWidth < 768 ? '44px' : 'auto',
				},
				buttonBack: {
					color: '#6B7280',
					fontSize: window.innerWidth < 768 ? 12 : 14,
					fontWeight: 600,
					minHeight: window.innerWidth < 768 ? '44px' : 'auto',
					padding: window.innerWidth < 768 ? '8px 16px' : '8px 12px',
				},
				buttonSkip: {
					color: '#9CA3AF',
					fontSize: window.innerWidth < 768 ? 12 : 14,
					minHeight: window.innerWidth < 768 ? '44px' : 'auto',
					padding: window.innerWidth < 768 ? '8px 12px' : '4px 8px',
				},
				buttonClose: {
					color: '#6B7280',
					fontSize: window.innerWidth < 768 ? 16 : 18,
					fontWeight: 'bold',
					// Better touch target
					minWidth: window.innerWidth < 768 ? '44px' : 'auto',
					minHeight: window.innerWidth < 768 ? '44px' : 'auto',
				},
				beacon: {
					inner: '#3B82F6',
					outer: '#93C5FD',
				},
				spotlight: {
					borderRadius: 8,
				}
			}}
			locale={{
				back: 'Anterior',
				close: 'Cerrar',
				last: 'Finalizar',
				next: 'Siguiente',
				skip: 'Saltar tutorial',
			}}
			floaterProps={{
				disableAnimation: false,
				// Better positioning on mobile
				offset: window.innerWidth < 768 ? 10 : 15,
			}}
		/>
	)
}

export default Tutorial