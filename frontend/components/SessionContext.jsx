import React, { useState, useEffect, useRef, createContext } from 'react'
import { io } from 'socket.io-client'
import Peer from 'simple-peer'
import { API_SERVICE } from '../config/URL'

const SessionContext = createContext()
const socket = io.connect('http://localhost:5000')

const ContextProvider = ({ children }) => {
  const myVideo = useRef()

  const [userId, setUserId] = useState('')
  const [members, setMembers] = useState([])

  const getPermissions = async () => {
    await navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((currentStream) => {
        myVideo.current.srcObject = currentStream
        console.log(currentStream)
        console.log('session-created')
      })
  }

  const createSession = (meetingId) => {
    socket.emit('joinMeeting', meetingId)
    socket.on('userConnected', (id) => setUserId(id))
  }

  return (
    <SessionContext.Provider
      value={{
        createSession,
        getPermissions,
        userId,
        myVideo,
      }}
    >
      {children}
    </SessionContext.Provider>
  )
}

export { ContextProvider, SessionContext }
