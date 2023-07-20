import jsonfile from 'jsonfile'

const file = process.cwd()+'/global/data/user.json'

class User {
  constructor (user) {
    this.user = user
    this.file = file
    this.err  = (e,s) => {
      return {
        message: `Error trying to ${e}`,
        status: s
      }
    }
    this.msg  = (e,s) => {
      return {
        message: `User succesfully ${e}`,
        status: s
      }
    }
  }

  async getUser () {
    return await jsonfile.readFile(this.file)
      .then((res) => { return res.find(({ email }) => email === this.user.email ) })
      .catch((err) => { return new Error(this.err(err, 500)) })
  }

  async creUser () {
    const user = await this.getUser()
    if (user) {
      return {
        message: 'Email already taken',
        status: 500
      }
    }
    
    return new Promise((resolve, reject) => {
      jsonfile.readFile(this.file, async (e, d) => {
        if (e) return new Error(this.err(e), 500)
        await d.push(this.user)
  
        return await jsonfile.writeFile(this.file, d, { spaces: 2, EOL: '\r\n' })
          .then(() =>  { resolve(this.msg('created', 201)) })
          .catch(err => { reject(new Error(this.err(err,500))) })
      })
    })
  }

  async logUser () {
    const user = await this.getUser()
    if (user) {
      return {
        message: 'user authenticated successfully',
        status: 200,
        data: user
      }
    } else {
      return {
        message: 'User doesnt exists',
        status: 403
      }
    }
  }

  async regUser () {
    return await this.creUser()
  }
}

export default User