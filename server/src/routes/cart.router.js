import { Router } from 'express'
import Cart       from '../controllers/cart.controller.js'
import axios      from 'axios'

const cartRouter = Router()

cartRouter.post('/cart/add', async (req,res) => {
  const { id, user } = req.body
  const prod = await (await axios.get(`${process.env.SERVER_URL}/product/get/${id}`)).data
  prod['user'] = user
  const create = new Cart(prod)
  const resp   = await create.addToCart()
  res.json(resp)
})

cartRouter.post('/cart/get', async (req,res) => {
  const { user } = req.body
  const create   = new Cart()
  const resp     = await create.getCartData(user)
  res.json(resp)
})

cartRouter.post('/cart/remove', async (req,res) => {
  const { id } = req.body
  const create = new Cart({}, id)
  const resp   = await create.removeFromCart()
  res.json(resp)
})

export default cartRouter