import app from "./controllers/app.js"

const __init__ = () => {
  app().listen(4001, () => console.log(`Server runnig`) )
}

__init__()