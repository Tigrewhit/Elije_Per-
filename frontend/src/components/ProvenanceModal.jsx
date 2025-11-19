import React from 'react'

export default function ProvenanceModal({open, onClose, proven}){
  if(!open) return null
  if(!proven) return (
    <div className='modal'>
      <div className='modal-content'>
        <button onClick={onClose}>Cerrar</button>
        <div>No hay datos de procedencia.</div>
      </div>
    </div>
  )

  return (
    <div className='modal'>
      <div className='modal-content'>
        <button onClick={onClose}>Cerrar</button>
        <h3>Procedencia</h3>
        <div><strong>Fuente:</strong> {proven.fuente || proven.source_url}</div>
        <div style={{marginTop:8}}><strong>URL:</strong> <a href={proven.source_url || proven.fuente} target='_blank' rel='noreferrer'>{proven.source_url || proven.fuente}</a></div>
        <div style={{marginTop:8}}><strong>Parsed hash:</strong> <code>{proven.parsed_hash}</code></div>
        <div style={{marginTop:8}}><strong>Fetched at:</strong> {proven.fetched_at || proven.fetchedAt || ''}</div>
        <pre style={{maxHeight:200,overflow:'auto',background:'#f3f4f6',padding:8}}>{JSON.stringify(proven.raw_payload || proven, null, 2)}</pre>
      </div>
    </div>
  )
}
