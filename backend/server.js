const express = require('express')
const http = require('http')
const cors = require('cors')
const { Server } = require('socket.io')
require('dotenv').config()

const app = express()
const server = http.createServer(app)

const io = new Server(server, {
  cors: {
    origin: '*',
    method: ['GET', 'POST', 'PUT', 'DELETE'],
  },
})

// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

io.on('connection', (socket) => {
  socket.on('joinMeeting', (meetingId, user) => {
    socket.join(meetingId)
    socket.to(meetingId).broadcast.emit('userConnected', user)
  })
})

const PORT = process.env.PORT || 5000
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
