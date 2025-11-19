const { spawn } = require('child_process')
const http = require('http')

function waitForServer(proc, timeout = 10000){
  return new Promise((resolve, reject)=>{
    const timer = setTimeout(()=> reject(new Error('Server start timeout')), timeout)
    proc.stdout.on('data', (d)=>{
      const s = d.toString()
      if(s.includes('Backend running on')){
        clearTimeout(timer)
        resolve()
      }
    })
    proc.stderr.on('data', (d)=>{
      // ignore
    })
    proc.on('exit',(code)=>{ clearTimeout(timer); reject(new Error('Server exited prematurely')) })
  })
}

describe('Basic server tests (spawn server)', ()=>{
  let serverProc = null

  beforeAll(async ()=>{
    serverProc = spawn(process.execPath, ['src/index.js'], { cwd: __dirname + '/../', env: Object.assign({}, process.env), stdio: ['ignore','pipe','pipe'] })
    await waitForServer(serverProc)
  }, 20000)

  afterAll(()=>{
    if(serverProc){ serverProc.kill() }
  })

  test('GET /health returns healthy', (done)=>{
    http.get({ host: 'localhost', port: 4000, path: '/health', timeout: 5000 }, (res)=>{
      expect(res.statusCode).toBe(200)
      let body = ''
      res.on('data',(c)=> body += c)
      res.on('end', ()=>{
        const json = JSON.parse(body)
        expect(json).toHaveProperty('ok', true)
        expect(json).toHaveProperty('status', 'healthy')
        done()
      })
    }).on('error', (err)=> done(err))
  })

  test('POST /admin/ingest/onpe without API key is rejected', (done)=>{
    const options = { host:'localhost', port:4000, path:'/admin/ingest/onpe', method:'POST', headers: { 'Content-Type':'application/json' }}
    const req = http.request(options, (res)=>{
      expect([401,403]).toContain(res.statusCode)
      done()
    })
    req.on('error',(err)=> done(err))
    req.write(JSON.stringify({ sourceUrl: 'https://example.com' }))
    req.end()
  })
})
import request from 'supertest'
import app from '../src/app.js'
