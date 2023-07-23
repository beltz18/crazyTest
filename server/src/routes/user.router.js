import { Router } from 'express'
import bcrypt     from 'bcrypt'
import User       from '../controllers/user.controller.js'

const userRouter = Router()

userRouter.get('/', (req,res) => {
  res.json({ message: "Welcome to API" })
})

userRouter.post('/user/register', async (req,res) => {
  const { user } = req.body
  user.password  = await bcrypt.hash(user.password, 10)
  const create   = new User(user)
  const resp     = await create.regUser()
  res.json(resp)
})

userRouter.post('/user/login', async (req,res) => {
  const { user } = req.body
  const create   = new User(user)
  const resp     = await create.logUser()
  res.json(resp)
})

export default userRouter