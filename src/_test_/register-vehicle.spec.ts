import { RegisterVehicle } from '../controllers/register-vehicle'

describe('RegisterVehicle', () => {
  test('is the name does not exits return 400', () => {
    const sut = new RegisterVehicle() // Sistem under test
    const httpRequest = {
      body: {
        // name: 'Nissan',
        model: 'DTX',
        year: '2020'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Error in the name'))
  })

  test('is the model does not exits return 400', () => {
    const sut = new RegisterVehicle() // Sistem under test
    const httpRequest = {
      body: {
        name: 'Nissan',
        // model: 'DTX',
        year: '2020'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Error in the model'))
  })
})
