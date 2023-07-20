import jsonfile from 'jsonfile'
import crypto   from 'crypto'

const file = process.cwd()+'/global/data/product.json'

class Product {
  constructor (product) {
    this.file = file
    this.prod = product
    this.err  = (e,s) => {
      return {
        message: `Error trying to ${e}`,
        status: s
      }
    }
    this.msg  = (e,s) => {
      return {
        message: `Product succesfully ${e}`,
        status: s
      }
    }
  }

  async new () {
    const prodId    = crypto.randomUUID()
    this.prod['id'] = prodId

    return new Promise((resolve, reject) => {
      jsonfile.readFile(this.file, async (e, d) => {
        if (e) return new Error(this.err(e,500))
        await d.push(this.prod)
  
        return await jsonfile.writeFile(this.file, d, { spaces: 2, EOL: '\r\n' })
          .then(() =>  { resolve(this.msg('created', 201)) })
          .catch(err => { reject(new Error(this.err(err,500))) })
      })
    })
  }

  async get () {}

  async filter () {}
}

export default Product