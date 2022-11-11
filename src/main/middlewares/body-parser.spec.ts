import request from 'supertest'
import app from '../config/app'

describe('Middleware', () => {
  it('Should body-parse', async () => {
    app.post('/body-parser', (req, res) => {
      res.send(req.body)
    })
    await request(app)
      .post('/body-parser')
      .send({ name: 'fernando' })
      .expect({ name: 'fernando' })
  })
})
