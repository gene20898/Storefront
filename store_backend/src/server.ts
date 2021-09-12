import express from 'express'
import cors from 'cors'
import dashboardRoutes from './handlers/dashboardRoutes'
import productRoutes from './handlers/productRoutes'
import userRoutes from './handlers/userRoutes'

const app: express.Application = express()

app.use(express.json())
app.use(cors()) 

dashboardRoutes(app)
productRoutes(app)
userRoutes(app)


app.listen(8080, function () {
    console.log('starting app on: port8080')
})

export default app