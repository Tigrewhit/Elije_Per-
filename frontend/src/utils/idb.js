// Small IndexedDB helper (minimal, promise-based)
const DB_NAME = 'elijeperu-db'
const STORE = 'cache'
const VERSION = 1

function openDB(){
  return new Promise((resolve, reject)=>{
    const req = window.indexedDB.open(DB_NAME, VERSION)
    req.onupgradeneeded = () => {
      const db = req.result
      if(!db.objectStoreNames.contains(STORE)) db.createObjectStore(STORE)
    }
    req.onsuccess = ()=> resolve(req.result)
    req.onerror = ()=> reject(req.error)
  })
}

export async function idbGet(key){
  try{
    const db = await openDB()
    return await new Promise((resolve, reject)=>{
      const tx = db.transaction(STORE, 'readonly')
      const store = tx.objectStore(STORE)
      const r = store.get(key)
      r.onsuccess = ()=> resolve(r.result)
      r.onerror = ()=> reject(r.error)
    })
  }catch(e){ return null }
}

export async function idbSet(key, value){
  try{
    const db = await openDB()
    return await new Promise((resolve, reject)=>{
      const tx = db.transaction(STORE, 'readwrite')
      const store = tx.objectStore(STORE)
      const r = store.put(value, key)
      r.onsuccess = ()=> resolve(true)
      r.onerror = ()=> reject(r.error)
    })
  }catch(e){ return false }
}

export async function idbDel(key){
  try{
    const db = await openDB()
    return await new Promise((resolve, reject)=>{
      const tx = db.transaction(STORE, 'readwrite')
      const store = tx.objectStore(STORE)
      const r = store.delete(key)
      r.onsuccess = ()=> resolve(true)
      r.onerror = ()=> reject(r.error)
    })
  }catch(e){ return false }
}
