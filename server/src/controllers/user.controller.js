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

  getUser () {
    return this.message('lalala', 200)
  }

  creUser () {
    jsonfile.readFile(this.file, async (e, d) => {
      if (e) return new Error(this.err(e), 500)
      await d.push(this.user)

      jsonfile.writeFile(this.file, d, { spaces: 2, EOL: '\r\n' })
      .then(() =>  { return this.msg('created', 201) })
      .catch(err => { return new Error(this.err(err,500)) })
    })
  }

  logUser () {
    return this.message('lalala', 200)
  }

  regUser () {
    return this.message('lalala', 200)
  }
}

export default User