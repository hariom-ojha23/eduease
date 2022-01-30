import React, { useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import { Box, Button } from '@mui/material'
import { SessionContext } from '../../components/SessionContext'

const Lobby = () => {
  const { userId, getPermissions, myVideo, createSession } =
    useContext(SessionContext)

  const router = useRouter()

  useEffect(() => {
    getPermissions()
  }, [])

  const joinMeeting = () => {
    createSession()
    router.push('/meeting/12345678')
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <h1>video</h1>
      <Box sx={{ width: 500, m: 2, mb: 4 }}>
        <video
          style={{ width: '500px', border: '2px solid green' }}
          playsInline
          muted
          ref={myVideo}
          autoPlay={true}
        />
      </Box>
      <Button variant='contained' onClick={() => joinMeeting()}>
        Enter in Meeting
      </Button>
    </Box>
  )
}

export default Lobby
