import { idbGet, idbSet } from '../utils/idb'

const API_ROOT = import.meta.env.VITE_API_URL || 'http://localhost:4000'

function normalizePath(path){
	if(!path.startsWith('/')) path = '/' + path
	return path
}

export async function get(path){
	path = normalizePath(path)
	const url = API_ROOT + path

	try{
		const res = await fetch(url)
		if(!res.ok) throw new Error('Network error')
		const data = await res.json()

		try{ await idbSet(path, {ts: Date.now(), data}) }catch(e){ console.warn('idb set failed', e) }
		return {data, fromCache:false}
	}catch(e){

		const cached = await idbGet(path)
		if(cached && cached.data) return {data: cached.data, fromCache:true}
		throw e
	}
}

export async function post(path, body){
	path = normalizePath(path)
	const url = API_ROOT + path
	const res = await fetch(url, {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(body)})
	if(!res.ok) throw new Error('Network error')
	return res.json()
}

