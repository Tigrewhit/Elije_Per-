import fetch from 'node-fetch'
import fs from 'fs'
import path from 'path'
import crypto from 'node:crypto'

const RAW_DIR = path.resolve(new URL('../../storage/raw', import.meta.url).pathname)

export async function ensureRawDir(){
  try{ await fs.promises.mkdir(RAW_DIR, { recursive: true }) }catch(e){}
}

export function sha256hex(input){
  return crypto.createHash('sha256').update(input).digest('hex')
}

export async function fetchAndSave(url, prefix='payload'){
  await ensureRawDir()
  const res = await fetch(url, { timeout: 20000 })
  const status = res.status
  const contentType = res.headers.get('content-type') || ''
  const buffer = await res.arrayBuffer()
  const buf = Buffer.from(buffer)
  const ext = contentType.includes('json') ? 'json' : contentType.includes('pdf') ? 'pdf' : 'bin'
  const filename = `${Date.now()}-${prefix}.${ext}`
  const dest = path.join(RAW_DIR, filename)
  await fs.promises.writeFile(dest, buf)
  const rawText = contentType.includes('json') ? buf.toString('utf8') : null
  const hash = sha256hex(rawText ?? buf)
  return { path: dest, filename, hash, status, contentType, rawText }
}

export default { fetchAndSave, ensureRawDir, sha256hex }
