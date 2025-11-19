import React from 'react'

export default function CandidateModal({ candidate, type, isOpen, onClose }) {
  if (!isOpen || !candidate) return null

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center" 
      style={{
        zIndex: 99999, 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100vw', 
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: 'blur(5px)',
        WebkitBackdropFilter: 'blur(5px)'
      }}
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl w-60 h-72 overflow-hidden shadow-2xl border border-gray-200"
        style={{
          padding: '0',
          margin: '16px',
          borderRadius: '16px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-200" 
             style={{padding: '16px', borderRadius: '16px 16px 0 0'}}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4" style={{flex: 1}}>
              <img 
                src={candidate.photo_url || '/icon-192.png'} 
                alt={candidate.name}
                className="rounded-full object-cover border-2 border-white shadow-sm"
                style={{
                  width: '48px',
                  height: '48px',
                  minWidth: '48px',
                  minHeight: '48px',
                  maxWidth: '48px',
                  maxHeight: '48px',
                  borderRadius: '50%',
                  marginRight: '8px'
                }}
              />
              <div style={{paddingLeft: '4px', flex: 1}}>
                <h2 className="text-sm font-bold text-gray-800" style={{marginBottom: '4px', lineHeight: '1.3'}}>{candidate.name}</h2>
                <p className="text-blue-600 text-xs font-medium" style={{marginTop: '2px'}}>{candidate.party}</p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="w-6 h-6 rounded-full bg-white hover:bg-red-50 hover:text-red-600 flex items-center justify-center text-gray-600 font-bold text-sm transition-all duration-200 shadow-sm border border-gray-200"
            >
              ×
            </button>
          </div>
        </div>

        <div style={{padding: '16px'}}>
          {type === 'cv' && (
            <div className="space-y-4">
              <div className="text-center" style={{marginBottom: '12px'}}>
                <h3 className="text-sm font-bold text-gray-800 flex items-center justify-center gap-1" style={{padding: '8px'}}>
                  📋 <span>Hoja de Vida</span>
                </h3>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border border-blue-200 shadow-sm" 
                   style={{padding: '12px', marginBottom: '8px'}}>
                <h4 className="text-xs font-bold text-blue-800 mb-3 flex items-center gap-1" style={{paddingBottom: '4px'}}>
                  👤 <span>Perfil</span>
                </h4>
                <p className="text-gray-700 text-xs leading-relaxed">
                  {candidate.bio.length > 100 ? candidate.bio.substring(0, 100) + '...' : candidate.bio}
                </p>
              </div>

              {candidate.cv_details?.experience && (
                <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl border border-green-200 shadow-sm" 
                     style={{padding: '12px', marginBottom: '8px'}}>
                  <h4 className="text-xs font-bold text-green-800 mb-3 flex items-center gap-1" style={{paddingBottom: '4px'}}>
                    💼 <span>Experiencia</span>
                  </h4>
                  <p className="text-gray-700 text-xs leading-relaxed">
                    {candidate.cv_details.experience[0].length > 80 ? candidate.cv_details.experience[0].substring(0, 80) + '...' : candidate.cv_details.experience[0]}
                  </p>
                </div>
              )}

              {candidate.cv_details?.achievements && (
                <div className="bg-orange-50 rounded-lg p-3 border border-orange-200">
                  <h4 className="text-sm font-bold text-orange-800 mb-2 flex items-center gap-1">
                    <span className="text-lg">🏆</span> Logros
                  </h4>
                  <ul className="space-y-1">
                    {candidate.cv_details.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-700 text-sm">
                        <span className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0 mt-1"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {type === 'proposals' && (
            <div className="space-y-4">
              <div className="text-center" style={{marginBottom: '12px'}}>
                <h3 className="text-sm font-bold text-gray-800 flex items-center justify-center gap-1" style={{padding: '8px'}}>
                  📊 <span>Propuestas</span>
                </h3>
              </div>

              {candidate.proposals && candidate.proposals.length > 0 ? (
                <div className="space-y-3">
                  {candidate.proposals.slice(0, 2).map((proposal, index) => (
                    <div key={index} className={`
                      rounded-xl border shadow-sm
                      ${index % 2 === 0 ? 'bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200' :
                        'bg-gradient-to-r from-green-50 to-green-100 border-green-200'}
                    `} style={{padding: '12px', marginBottom: '6px'}}>
                      <h4 className={`text-xs font-bold mb-3 flex items-center gap-1
                        ${index % 2 === 0 ? 'text-blue-800' : 'text-green-800'}
                      `} style={{paddingBottom: '4px'}}>
                        <span className={`w-4 h-4 rounded-full flex items-center justify-center text-white text-xs
                          ${index % 2 === 0 ? 'bg-blue-500' : 'bg-green-500'}
                        `}>{index + 1}</span>
                        {proposal.title}
                      </h4>
                      <p className="text-gray-700 text-xs leading-relaxed">
                        {proposal.description.length > 50 ? proposal.description.substring(0, 50) + '...' : proposal.description}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-gray-50 rounded-xl p-8 text-center border-2 border-gray-200">
                  <div className="text-6xl mb-4">📋</div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">
                    Propuestas en Proceso de Actualización
                  </h4>
                  <p className="text-gray-600">
                    Las propuestas detalladas de este candidato se encuentran en proceso de actualización. 
                    Consulte las fuentes oficiales para información completa.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-t border-gray-200" 
             style={{padding: '10px', borderRadius: '0 0 16px 16px'}}>
          <div className="flex items-center justify-center">
            <button 
              onClick={onClose}
              className="px-4 py-2 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-lg text-xs font-medium hover:from-gray-700 hover:to-gray-800 transition-all duration-200 shadow-sm border border-gray-500"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}