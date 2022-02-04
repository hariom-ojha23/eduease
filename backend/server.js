const express = require('express')
const http = require('http')
const cors = require('cors')
const colors = require('colors')
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

const users = {}
const socketToMeeting = {}

io.on('connection', (socket) => {
  socket.on('joinMeeting', (meetingId) => {
    console.log(meetingId)
    if (users[meetingId]) {
      const length = users[meetingId].length
      if (length === 4) {
        socket.emit('meetingFull', 'Room Full')
        return
      }
      users[meetingId].push(socket.id)
    } else {
      users[meetingId] = [socket.id]
    }

    console.log('meetingJoined'.cyan)

    socketToMeeting[socket.id] = meetingId
    const usersInThisMeeting = users[meetingId].filter((id) => id !== socket.id)
    console.log(usersInThisMeeting)

    socket.emit('allMembers', usersInThisMeeting)
    console.log('allMembers send'.green)
    // socket.to(meetingId).emit('userConnected', socket.id)
  })

  socket.on('sendingSignal', (payload) => {
    io.to(payload.userToCall).emit('userConnected', {
      signal: payload.signal,
      callerID: payload.callerID,
    })
    console.log('sending signal'.yellow)
  })

  socket.on('returningSignal', (payload) => {
    io.to(payload.callerID).emit('recieveReturnedSignal', {
      signal: payload.signal,
      id: socket.id,
    })
    console.log('returning signal'.magenta)
  })

  socket.on('disconnect', () => {
    const meetingId = socketToMeeting[socket.id]
    let meeting = users[meetingId]
    if (meeting) {
      meeting = meeting.filter((id) => id !== socket.id)
      users[meetingId] = meeting
    }
    console.log('user disconnected'.red)
  })
})

const PORT = process.env.PORT || 5000
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.yellow.bold)
})
