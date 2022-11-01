import { FoodModel } from './../models/food-model'

describe('class', () => {
  it('Class FoodModel', () => {
    const food = new FoodModel('Pescado', 'Proteina', 200)

    expect(food.getName()).toEqual('Pescado')
    expect(food.getDescription()).toEqual('Proteina')
    expect(food.getPrice()).toEqual(200)
  })
})
