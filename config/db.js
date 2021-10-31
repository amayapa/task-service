import { Sequelize } from 'sequelize'
import config from './config'

let sequelize

/* Sequelize config to run locally */
sequelize = new Sequelize(
  `mysql://${config.db.localUser}:${config.db.password}@${config.db.host}:${config.db.port}/${config.db.database}`,
)

/* Sequelize config to run in a Docker container */
sequelize = new Sequelize('tasks-service', 'imadev', 'secret', {
  host: 'mysql_server',
  dialect: 'mysql',
  pool: {
    max: 15,
    min: 5,
    idle: 20000,
    evict: 15000,
    acquire: 30000,
  },
})

export { sequelize }
