/* eslint-disable @typescript-eslint/no-floating-promises */
import mongoose from 'mongoose'

export default (): void => {
  const url = 'mongodb://localhost:27017/tdd'
  mongoose.connect(url, (err) => {
    if (err) {
      console.log('ERROR:: ', err.message)
    } else {
      console.log('Base de datos puesto 27017 online')
    }
  })
}
