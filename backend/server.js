const express = require('express')
const http = require('http')
const cors = require('cors')
const { Server } = require('socket.io')
require('dotenv').config()

const app = express()
const server = http.createServer(app)

// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

const io = new Server(server, {
  cors: {
    origin: '*',
    method: ['GET', 'POST', 'PUT', 'DELETE'],
  },
})

io.on('connection', (socket) => {
  socket.on('joinMeeting', (meetingId) => {
    socket.join(meetingId)
    socket.broadcast.to(meetingId).emit('userConnected', socket.id)
    socket.on('disconnect', () => {
      socket.to(meetingId).broadcast.emit('userDisconnected', userId)
    })
  })
})

const PORT = process.env.PORT || 5000
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
