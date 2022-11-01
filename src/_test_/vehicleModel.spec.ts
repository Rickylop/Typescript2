import { VehicleModel } from '../models/vehicle-model'

describe('Classes', () => {
  it('Class vehicleModel', () => {
    const vehicleModel = new VehicleModel({
      name: 'Nissan',
      model: 'DXT',
      year: 2020
    })

    expect(vehicleModel.getName()).toEqual('Nissan')
    expect(vehicleModel.getModel()).toEqual('DXT')
    expect(vehicleModel.getYear()).toEqual(2020)
  })
})
