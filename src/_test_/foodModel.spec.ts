import { FoodHelper } from './../helpers/food-model-helper'
import { FoodModel } from './../models/food-model'

describe('class', () => {
  it('Class FoodModel', () => {
    const food = new FoodModel({
      name: 'Pescado',
      description: 'Proteina',
      price: 200
    })

    expect(food.getFood()).toEqual(food)
    expect(food.getName()).toEqual('Pescado')
    expect(food.getDescription()).toEqual('Proteina')
    expect(food.getPrice()).toEqual(200)
  })
  it('food Helper', () => {
    const foodHelper = new FoodHelper()
    expect(foodHelper).toEqual(foodHelper)
  })
})
