import jsonfile from 'jsonfile'
import crypto   from 'crypto'

const file = process.cwd()+'/global/data/product.json'

class Product {
  constructor (product = {}) {
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

  async getPrd (prop) {
    return await jsonfile.readFile(this.file)
      .then((res)  => { return res.find((prod) => prod[prop] === this.prod[prop] ) })
      .catch((err) => { return new Error(this.err(err,500)) })
  }

  async getAll () {
    return await jsonfile.readFile(this.file)
      .then((res)  => { return res })
      .catch((err) => { return new Error(this.err(err,500)) })
  }

  async newPrd () {
    const prd = await this.getPrd('name')
    if (prd) {
      return {
        message: 'Product already registered',
        status: 500
      }
    }

    const prodId    = crypto.randomUUID()
    this.prod['id'] = prodId

    return new Promise((resolve, reject) => {
      jsonfile.readFile(this.file, async (e, d) => {
        if (e) return new Error(this.err(e,500))
        await d.push(this.prod)
  
        return await jsonfile.writeFile(this.file, d, { spaces: 2, EOL: '\r\n' })
          .then(()   => { resolve(this.msg('created', 201)) })
          .catch(err => { reject(new Error(this.err(err,500))) })
      })
    })
  }

  async filter ({name, category, price}) {
    return await jsonfile.readFile(this.file)
      .then((res)  => {
        return res.filter((prd) => {
          prd.category == category
          console.log(prd.category == category)
        })
      })
      .catch((err) => { return new Error(this.err(err,500)) })
  }
}

export default Product