import { idbGet, idbSet, idbDel } from '../utils/idb'
import { post } from './api'

const QUEUE_KEY = '/incidents/queue'

export async function enqueueIncident(record){
  const q = (await idbGet(QUEUE_KEY)) || { items: [] }
  q.items.unshift({ ...record, ts: Date.now() })
  await idbSet(QUEUE_KEY, q)
  return q
}

export async function flushQueue(){
  const q = (await idbGet(QUEUE_KEY)) || { items: [] }
  const results = []
  while(q.items && q.items.length){
    const item = q.items.pop()
    try{
      const res = await post('/incidents', item)
      results.push(res)
    }catch(e){
      // push back and stop on first failure
      q.items.push(item)
      await idbSet(QUEUE_KEY, q)
      return { ok:false, results }
    }
  }
  await idbDel(QUEUE_KEY)
  return { ok:true, results }
}

// auto-sync when online
window.addEventListener && window.addEventListener('online', ()=>{ flushQueue().catch(()=>{}) })
