import { RegisterVehicle } from '../controllers/register-vehicle'
import { MissingFormalParameter } from '../errors/client-error'

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
    expect(httpResponse.body).toEqual(new MissingFormalParameter('name'))
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
    expect(httpResponse.body).toEqual(new MissingFormalParameter('model'))
  })
})

test('is the year does not exits return 400', () => {
  const sut = new RegisterVehicle() // Sistem under test
  const httpRequest = {
    body: {
      name: 'Nissan',
      model: 'DTX'
      // year: '2020'
    }
  }
  const httpResponse = sut.handle(httpRequest)
  expect(httpResponse.statusCode).toBe(400)
  expect(httpResponse.body).toEqual(new MissingFormalParameter('year'))
})
test('is the color does not exits return 400', () => {
  const sut = new RegisterVehicle() // Sistem under test
  const httpRequest = {
    body: {
      name: 'Nissan',
      model: 'DTX',
      year: '2020'
      // color: 'black'
    }
  }
  const httpResponse = sut.handle(httpRequest)
  expect(httpResponse.statusCode).toBe(400)
  expect(httpResponse.body).toEqual(new MissingFormalParameter('color'))
})
