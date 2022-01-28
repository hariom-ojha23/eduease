const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// cors
app.use(cors())

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
