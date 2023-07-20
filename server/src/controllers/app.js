import express    from 'express'
import parser     from 'body-parser'
import cors       from 'cors'
import userRouter from '../routes/user.routes.js'

const server = express()

const middlewares = () => {
  server.use(parser.json(), parser.urlencoded({ extended: true }))
  server.use(cors())
  server.use(userRouter)
}

const app = () => {
  middlewares()
  return server
}

export default app