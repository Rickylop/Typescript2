import { Router } from 'express'

export default (router: Router): void => {
  router.get('register-vehicle', (req, res) => {
    res.send(200).json({
      ok: true,
      message: 'Router is ready'
    })
  })
}
