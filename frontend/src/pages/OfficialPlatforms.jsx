import React, { useState, useEffect } from 'react'
import { get } from '../services/api'

export default function OfficialPlatforms() {
  const [platforms, setPlatforms] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState('all')

  useEffect(() => {
    async function loadPlatforms() {
      try {
        const result = await get('/api/official-platforms')
        setPlatforms(result.data || [])
      } catch (error) {
        console.error('Error loading official platforms:', error)
      } finally {
        setLoading(false)
      }
    }
    loadPlatforms()
  }, [])

  const categories = [
    { id: 'all', name: 'Todas las Plataformas', icon: '🌐' },
    { id: 'procesos_electorales', name: 'Procesos Electorales', icon: '⚖️' },
    { id: 'informacion_historica', name: 'Información Histórica', icon: '📊' },
    { id: 'educacion_electoral', name: 'Educación Electoral', icon: '📚' },
    { id: 'organizaciones_politicas', name: 'Organizaciones Políticas', icon: '🏛️' }
  ]

  const filteredPlatforms = selectedCategory === 'all' 
    ? platforms 
    : platforms.filter(platform => platform.category === selectedCategory)

  if (loading) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <div style={{ fontSize: '1.2rem', color: '#666' }}>Cargando plataformas oficiales...</div>
      </div>
    )
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#003770', marginBottom: '0.5rem', fontWeight: '800' }}>
          🏛️ Plataformas Oficiales JNE
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
          Accede a las herramientas oficiales del Jurado Nacional de Elecciones para información 
          electoral verificada y confiable
        </p>
      </div>

      {/* Category Filter */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              style={{
                padding: '0.5rem 1rem',
                border: selectedCategory === category.id ? '2px solid #003770' : '2px solid #e5e7eb',
                borderRadius: '25px',
                background: selectedCategory === category.id ? '#003770' : '#ffffff',
                color: selectedCategory === category.id ? '#ffffff' : '#374151',
                fontWeight: selectedCategory === category.id ? '600' : '400',
                cursor: 'pointer',
                fontSize: '0.9rem',
                transition: 'all 0.2s ease'
              }}
            >
              {category.icon} {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Platforms Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '1.5rem' }}>
        {filteredPlatforms.map(platform => (
          <div
            key={platform.id}
            style={{
              background: '#ffffff',
              border: '1px solid #e5e7eb',
              borderRadius: '12px',
              padding: '1.5rem',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.boxShadow = '0 8px 25px -8px rgba(0, 0, 0, 0.2)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
          >
            <div style={{ marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#003770', marginBottom: '0.5rem' }}>
                {platform.name}
              </h3>
              {platform.countdown && (
                <div style={{
                  display: 'inline-block',
                  background: '#fef3c7',
                  color: '#92400e',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  marginBottom: '0.5rem'
                }}>
                  ⏰ {platform.countdown}
                </div>
              )}
              <p style={{ fontSize: '0.95rem', color: '#6b7280', lineHeight: '1.5' }}>
                {platform.description}
              </p>
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>
                📋 Servicios Disponibles:
              </h4>
              <ul style={{ fontSize: '0.9rem', color: '#6b7280', paddingLeft: '1rem', margin: 0 }}>
                {platform.services.map((service, index) => (
                  <li key={index} style={{ marginBottom: '0.25rem' }}>
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <a
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: '#003770',
                  color: '#ffffff',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'background-color 0.2s ease'
                }}
                onMouseEnter={e => e.target.style.backgroundColor = '#1d4ed8'}
                onMouseLeave={e => e.target.style.backgroundColor = '#003770'}
              >
                🚀 Acceder a Plataforma
              </a>
              <div style={{
                background: '#f3f4f6',
                color: '#6b7280',
                padding: '0.5rem',
                borderRadius: '6px',
                fontSize: '0.8rem',
                fontWeight: '500'
              }}>
                🔒 Oficial JNE
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredPlatforms.length === 0 && (
        <div style={{ textAlign: 'center', padding: '3rem', color: '#6b7280' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>
            No se encontraron plataformas
          </h3>
          <p>No hay plataformas disponibles para la categoría seleccionada.</p>
        </div>
      )}

      {/* Footer Information */}
      <div style={{
        marginTop: '3rem',
        padding: '2rem',
        background: '#f8fafc',
        borderRadius: '12px',
        border: '1px solid #e2e8f0'
      }}>
        <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#003770', marginBottom: '1rem', textAlign: 'center' }}>
          ℹ️ Información Importante
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', fontSize: '0.9rem', color: '#4b5563' }}>
          <div>
            <strong>🏛️ Fuente Oficial:</strong> Todas las plataformas son oficiales del Jurado Nacional de Elecciones (JNE)
          </div>
          <div>
            <strong>🔒 Seguridad:</strong> Los enlaces dirigen a dominios verificados del JNE (.jne.gob.pe)
          </div>
          <div>
            <strong>📱 Acceso:</strong> Las plataformas están disponibles 24/7 desde cualquier dispositivo
          </div>
          <div>
            <strong>📞 Soporte:</strong> Para consultas: (511) 311-1700 / (511) 311-1717
          </div>
        </div>
      </div>
    </div>
  )
}