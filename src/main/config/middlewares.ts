import { Express } from 'express'
import { bodyParser, cors } from '../middlewares' // por default toma el archivo index de middlewares

export default (app: Express): void => {
  app.use(bodyParser)
  app.use(cors)
}
