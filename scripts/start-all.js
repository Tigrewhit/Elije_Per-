#!/usr/bin/env node
const { spawn } = require('child_process')
const path = require('path')

function start(name, cmd, args, cwd){
  const proc = spawn(cmd, args, { cwd, shell: true, env: process.env })
  proc.stdout.on('data', d => process.stdout.write(`[${name}] ${d}`))
  proc.stderr.on('data', d => process.stderr.write(`[${name}] ${d}`))
  proc.on('exit', code => console.log(`[${name}] exited with ${code}`))
  return proc
}

const root = path.resolve(__dirname, '..')
const backendDir = path.join(root, 'backend')
const frontendDir = path.join(root, 'frontend')

console.log('Starting backend and frontend...')

const backend = start('backend', 'npm', ['run','dev'], backendDir)
const frontend = start('frontend', 'npm', ['run','dev'], frontendDir)

process.on('SIGINT', ()=>{
  console.log('Stopping processes...')
  backend.kill('SIGINT')
  frontend.kill('SIGINT')
  process.exit()
})
