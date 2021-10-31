import express from 'express'
import axios from 'axios'
import { Tasks } from '../models/tasks'

const app = express()

const fetchtasks = async (quantity) =>
  axios.get(`https://lorem-faker.vercel.app/api?quantity=${quantity}`)

app.get('/tasks', async (req, res) => {
  try {
    const { quantity } = req.query
    const { data: tasks } = await fetchtasks(quantity)

    const newTasks = []
    for (const task of tasks) {
      const [newTask, alreadyInDB] = await Tasks.findOrCreate({
        where: {
          title: task,
        },
      })
      alreadyInDB && newTasks.push(newTask)
    }

    res.status(200).send({ tasks: newTasks })
  } catch (error) {
    res.status(400).send(error)
    throw error
  }
})

app.put('/tasks', async (req, res) => {
  try {
    const { taskId } = req.query
    const task = await Tasks.findByPk(taskId)
    if (task) {
      task.status = 'COMPLETED'
      task.save()
      res.status(200).send({ task })
    } else {
      res.status(404).send({ message: 'This task does not exist' })
    }
  } catch (error) {
    res.status(400).send({ error })
    throw error
  }
})

export default app
