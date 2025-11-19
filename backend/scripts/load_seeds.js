import fs from 'fs'
import path from 'path'
import { pool } from '../src/config/db.js'

async function run(){
  const sql = fs.readFileSync(path.join(process.cwd(),'backend','migrations','seeds.sql'),'utf8')
  const client = await pool.connect()
  try{
    await client.query(sql)
    console.log('Seeds loaded')
  }catch(e){
    console.error('Failed to load seeds', e)
  }finally{ client.release(); process.exit(0) }
}

run()
