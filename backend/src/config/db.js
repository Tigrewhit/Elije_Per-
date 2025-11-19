import pkg from 'pg'
const { Pool } = pkg
export const pool = new Pool({
  connectionString: process.env.DATABASE_URL || `postgresql://${process.env.DB_USER||'postgres'}:${process.env.DB_PASS||'1234'}@${process.env.DB_HOST||'localhost'}:${process.env.DB_PORT||5432}/${process.env.DB_NAME||'elijeperu'}`
})
