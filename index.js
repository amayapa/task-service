import config from './config/config'
import { app } from './app'
import { sequelize } from './config/db'

const start = async () => {
  sequelize
    .sync({ alter: false })
    .then(() => {
      app.set('port', config.port)
      app.listen(config.port, () =>
        console.log(`Server is running on Port ${config.port}`),
      )
    })
    .catch((error) => {
      console.error(`Error: ${error}`)
    })
}

start()
