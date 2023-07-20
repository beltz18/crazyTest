import { Router } from 'express'
import User       from '../controllers/user.controller.js'

const userRouter = Router()

userRouter.post('/user/register', (req,res) => {
  const { user } = req.body
  const create   = new User(user)
  const resp     = create.creUser()

  res.json(resp)
})

export default userRouter