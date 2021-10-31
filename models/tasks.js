import { Sequelize } from 'sequelize'
import { sequelize } from '../config/db'
const S = Sequelize

const TASKS_STATUS = {
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED',
}

const Tasks = sequelize.define('tasks', {
  id: {
    type: S.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  title: {
    type: S.STRING,
    allowNull: false,
  },
  status: {
    type: S.ENUM,
    allowNull: false,
    values: [...Object.values(TASKS_STATUS)],
    defaultValue: TASKS_STATUS.PENDING,
  },
})

export { Tasks }
