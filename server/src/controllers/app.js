import express       from 'express'
import parser        from 'body-parser'
import cors          from 'cors'
import userRouter    from '../routes/user.router.js'
import productRouter from '../routes/product.router.js'

const server = express()

const middlewares = () => {
  server.use(parser.json(), parser.urlencoded({ extended: true }))
  server.use(cors())
  server.use(userRouter, productRouter)
}

const app = () => {
  middlewares()
  return server
}

export default app