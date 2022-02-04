import React, { useState, useRef, createContext } from 'react'
import Peer from 'simple-peer'
import { io } from 'socket.io-client'

const SessionContext = createContext()

const ContextProvider = ({ children }) => {
  const [members, setMembers] = useState([])

  const userVideo = useRef()
  const checkVideo = useRef()
  const socketRef = useRef()
  const peersRef = useRef([])

  socketRef.current = io.connect('http://localhost:5000')

  const getPermissions = async () => {
    await navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((currentStream) => {
        if (checkVideo.current) {
          checkVideo.current.srcObject = currentStream
        }
      })
      .catch((error) => console.log(error))
  }

  const createSession = async (meetingId) => {
    await navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((currentStream) => {
        if (userVideo.current) {
          userVideo.current.srcObject = currentStream
        }
        let i = 0

        socketRef.current.emit('joinMeeting', meetingId)
        socketRef.current.on('meetingFull', (msg) => {
          console.log(msg)
        })
        socketRef.current.on('allMembers', (users) => {
          const peers = []
          users.forEach((memberId) => {
            console.log(++i)
            const peer = createPeer(
              memberId,
              socketRef.current.id,
              currentStream
            )
            peersRef.current.push({
              peerId: memberId,
              peer,
            })
            peers.push(peer)
          })
          setMembers(peers)
        })

        socketRef.current.on('userConnected', (payload) => {
          console.log('userConnected')
          const peer = addPeer(payload.signal, payload.callerId, currentStream)
          peersRef.current.push({
            peerId: payload.callerId,
            peer,
          })
          setMembers((users) => [...users, peer])
        })

        socketRef.current.on('recieveReturnedSignal', (payload) => {
          console.log('recieveReturnedSignal')
          const user = peersRef.current.find((p) => p.peerId === payload.id)
          user.peer.signal(payload.signal)
        })
      })
      .catch((error) => console.log(error))
  }

  const createPeer = (userToCall, callerId, stream) => {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream,
    })

    peer.on('signal', (signal) => {
      socketRef.current.emit('sendingSignal', { userToCall, callerId, signal })
    })

    return peer
  }

  const addPeer = (comingSignal, callerId, stream) => {
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream,
    })

    peer.on('signal', (signal) => {
      socketRef.current.emit('returningSignal', { signal, callerId })
    })

    peer.signal(comingSignal)

    return peer
  }

  return (
    <SessionContext.Provider
      value={{
        createSession,
        getPermissions,
        checkVideo,
        members,
        userVideo,
      }}
    >
      {children}
    </SessionContext.Provider>
  )
}

export { ContextProvider, SessionContext }
