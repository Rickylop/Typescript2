import express from 'express'
import { config as dotenv } from 'dotenv'
import routes from './routes'
import middlewares from './middlewares'

const app = express()
middlewares(app)
// app.use(express.json())
// ROUTES INIT
routes(app)
dotenv()
export default app
