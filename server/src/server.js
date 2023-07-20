import app    from "./controllers/app.js"
import * as v from '../global/var.js'

const __init__ = () => {
  app().listen(v.PORT, () => {
    console.log(`Server runnig on PORT ${v.PORT}`)
  })
}

__init__()