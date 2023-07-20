import { Router } from 'express'
import Product    from '../controllers/product.controller.js'

const productRouter = Router()

productRouter.get('/product/get/:id', async (req, res) => {
  res.json({
    message: 'lalala'
  })
})

productRouter.get('/product/filter', async (req, res) => {
  res.json({
    message: 'lalala'
  })
})

productRouter.post('/product/new', async (req, res) => {
  const { product } = req.body
  const create      = new Product(product)
  const resp        = await create.new()
  res.json(resp)
})

export default productRouter