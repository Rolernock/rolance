import express from 'express'
import path from 'path'
import dotenv from 'dotenv'
import ConnectDB from './config/db.js'
import messageRoutes from './routes/messageRoutes.js'

dotenv.config()
const app = express()
const PORT = process.env.PORT

//Parse incoming requests with json
app.use(express.json())

//resolving __dirname for ES module
const __dirname = path.resolve()

//Routes
app.use('/api/message', messageRoutes)

//Use client app
app.use(express.static(path.join(__dirname, '/client/dist')))

//Render the client app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/dist/index.html'))
})

ConnectDB()
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`))
