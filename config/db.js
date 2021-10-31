import { Sequelize } from 'sequelize'
import config from './config'

let sequelize = new Sequelize(
  `mysql://${config.db.localUser}:${config.db.password}@${config.db.host}:${config.db.port}/${config.db.database}`,
)

export { sequelize }
