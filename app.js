import express from "express"
import morgan from "morgan"
import { json, urlencoded } from "body-parser"
import cors from "cors"
import routes from "./routes/tasks"

const app = express()

app.use(json())
app.use(urlencoded({ extended: true }))

app.use(morgan("dev"))

const allowedOrigins = ["http://localhost:3002"]
const corsErrorMessage =
  "The CORS policy for this site does not allow access from the specified Origin."

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true)
      if (allowedOrigins.indexOf(origin) === -1) {
        return callback(new Error(corsErrorMessage), false)
      }
      return callback(null, true)
    },
    credentials: true,
  }),
)

app.use("/", routes)

export { app }
