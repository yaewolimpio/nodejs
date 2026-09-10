import pg from 'pg'
import dotenv from 'dotenv'
dotenv.config()

const{ Pool } = pg

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnautorized: false },
    max:10,
    idleTimeoutMillis:3000
    
})

export default pool