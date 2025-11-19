import React, {useState, useEffect} from 'react'

// The `virtual:pwa-register` helper is provided by the PWA plugin at build time.
// In development we may have disabled the plugin to avoid dependency conflicts,
// so load it at runtime if available and fall back to a no-op.
let _registerSW = null
try{
  _registerSW = eval("require('virtual:pwa-register')?.registerSW || null")
}catch(e){
  // plugin not present in dev — keep _registerSW null
}

export default function SwUpdateBanner(){
  const [needRefresh, setNeedRefresh] = useState(false)
  const [offlineReady, setOfflineReady] = useState(false)

  useEffect(()=>{
    try{
      if(typeof _registerSW === 'function'){
        const update = _registerSW({
          onNeedRefresh(){ setNeedRefresh(true) },
          onOfflineReady(){ setOfflineReady(true) }
        })
        return ()=>{
          // no-op cleanup if plugin provides unregister
          if(update && typeof update.unregister === 'function') update.unregister()
        }
      }
      // otherwise implement minimal offline-ready signal using the manual cache
      if('caches' in window){
        caches.open('elijeperu-critical-v1').then(cache=>{
          cache.match(location.origin + '/').then(r=>{ if(r) setOfflineReady(true) })
        }).catch(()=>{})
      }
      return ()=>{}
    }catch(e){ console.warn('sw register failed', e) }
  },[])

  if(!needRefresh && !offlineReady) return null

  return (
    <div className='fixed bottom-4 right-4 bg-white border p-3 rounded shadow-md'>
      {offlineReady && <div className='text-sm text-gray-700'>App lista para trabajar offline.</div>}
      {needRefresh && (
        <div className='mt-2'>
          <button onClick={()=>location.reload()} className='bg-blue-600 text-white px-3 py-1 rounded'>Actualizar</button>
        </div>
      )}
    </div>
  )
}
