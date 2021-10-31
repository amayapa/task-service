import dotenv from 'dotenv'
dotenv.config()

const { DB_PASSWORD, DB_NAME, LOCAL_DB_USER, DB_PORT, DB_HOST, PORT } =
  process.env

const config = {
  port: PORT || 3000,
  db: {
    localUser: LOCAL_DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    port: DB_PORT,
  },
}

export default config
