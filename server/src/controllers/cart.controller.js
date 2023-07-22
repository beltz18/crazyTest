import jsonfile from 'jsonfile'

const file = process.cwd()+'/global/data/cart.json'

class Cart {
  constructor (prod = {}, id) {
    this.prod = prod
    this.id   = id
    this.file = file
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

  async addToCart () {
    const prd = await this.getPrd('id')
    if (prd) {
      return {
        message: 'Product already added to cart',
        status: 500
      }
    }

    return new Promise((resolve, reject) => {
      jsonfile.readFile(this.file, async (e, d) => {
        if (e) return new Error(this.err(e,500))
        await d.push(this.prod)
  
        return await jsonfile.writeFile(this.file, d, { spaces: 2, EOL: '\r\n' })
          .then(()   => { resolve(this.msg('added', 201)) })
          .catch(err => { reject(new Error(this.err(err,500))) })
      })
    })
  }

  async getCartData (user) {
    const file = await jsonfile.readFile(this.file)
      .then((res)  => { return res })
      .catch((err) => { return new Error(this.err(err,500)) })

    const userCartData = file.filter((cart) => cart.user === user)
    if (userCartData.length == 0) return { message: 'No articles added yet', status: 200 }
    return userCartData
  }

  async removeFromCart () {
    const file = await jsonfile.readFile(this.file)
      .then((res)  => { return res })
      .catch((err) => { return new Error(this.err(err,500)) })

    let i = null
    file.map((f, index) => { if(f.id === this.id) i = index })
    if (typeof i == 'number') file.splice(i, 1)
    else { return { message: 'Element is not in your cart', status: 500 } }

    return new Promise((resolve, reject) => {
      jsonfile.writeFile(this.file, file, { spaces: 2, EOL: '\r\n' })
        .then(() => {
          resolve(this.msg('deleted from your cart', 201))
        })
    })
  }
}

export default Cart