import { Sequelize } from 'sequelize'
import config from './config'

// Use this to switch service bettween local and the docker container
const serviceIsRunningInDockerContainer = true

let sequelize

if (serviceIsRunningInDockerContainer) {
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
} else {
  sequelize = new Sequelize(
    `mysql://${config.db.localUser}:${config.db.password}@${config.db.host}:${config.db.port}/${config.db.database}`,
  )
}

export { sequelize }
