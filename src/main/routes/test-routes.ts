import { Router } from 'express'

export default (router: Router): void => {
  router.get('/register-vehicle', (req, res) => {
    res.json({
      ok: true,
      message: 'Router is ready'
    })
  })
}
