import { Router } from 'express'
import Cart       from '../controllers/cart.controller.js'

const cartRouter = Router()

cartRouter.post('/cart/add', async (req,res) => {
  const { id } = req.body
  const prod = await fetch(`http://localhost:4001/product/get/${id}`)
    .then(res => res.json())
  const create = new Cart(prod)
  const resp   = await create.addToCart()
  res.json(resp)
})

cartRouter.post('/cart/remove', async (req,res) => {
  const { id } = req.body
  const create = new Cart({}, id)
  const resp   = await create.removeFromCart()
  res.json(resp)
})

export default cartRouter