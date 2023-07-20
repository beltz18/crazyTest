import { Router } from 'express'
import Product    from '../controllers/product.controller.js'

const productRouter = Router()

productRouter.get('/product/get/:id', async (req, res) => {
  const { id } = req.params
  const create = new Product({ id })
  const resp   = await create.getPrd('id')
  
  if (resp) res.json(resp)
  else res.json({
    message: 'No product found',
    status: 404
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
  const resp        = await create.newPrd()
  res.json(resp)
})

export default productRouter