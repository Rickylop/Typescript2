import app from '../config/app'
import ConnectDB from '../../infra/db/mongodb/mongodb-connect'

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`server is working, port ${port}`)
  ConnectDB()
})
