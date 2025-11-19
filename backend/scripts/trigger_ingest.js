import 'dotenv/config'
import { ingestONPECalendar } from '../src/services/ingest.js'

async function run(){
  try{
    const source = process.env.SOURCE_URL || 'https://raw.githubusercontent.com/example/onpe-calendar-sample/main/calendar.json'
    console.log('Running ingest for', source)
    const res = await ingestONPECalendar({ sourceUrl: source })
    console.log('Ingest result:', res)
  }catch(err){
    console.error('Ingest failed:', err)
    process.exit(1)
  }
}

run()
