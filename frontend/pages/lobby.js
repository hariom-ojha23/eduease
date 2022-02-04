import React, { useEffect, useContext, useState } from 'react'
import { useRouter } from 'next/router'
import { Box, Button, Grid, Paper, Stack, TextField } from '@mui/material'
import { useTheme } from '@emotion/react'
import {
  VideocamRounded,
  VideocamOffRounded,
  MicRounded,
  MicOffRounded,
} from '@mui/icons-material'
import { SessionContext } from '../components/SessionContext'
import { v4 as uuidv4 } from 'uuid'

import ControlIcon from '../components/ControlIcon'

const Lobby = () => {
  const [showVideo, setShowVideo] = useState(false)
  const [openMic, setOpenMic] = useState(false)
  const [name, setName] = useState('')

  const { checkVideo, getPermissions } = useContext(SessionContext)

  const router = useRouter()
  const theme = useTheme()

  useEffect(() => {
    getPermissions()
  }, [])

  const videoToggle = () => {
    setShowVideo(!showVideo)
  }

  const micToggle = () => {
    setOpenMic(!openMic)
  }

  const joinMeeting = () => {
    const meetingId = uuidv4()
    router.push({ pathname: `/meeting/${meetingId}` })
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Paper
        sx={{
          width: '50%',
          height: '100%',
          borderRadius: '10px',
          backgroundColor: 'transparent',
          [theme.breakpoints.down('600')]: { width: '90%', height: '70%' },
        }}
      >
        <Grid container sx={{ height: '100%' }}>
          <Grid
            item
            sm={12}
            md={6}
            sx={{
              [theme.breakpoints.down('600')]: {
                p: 0.5,
              },
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              height: '100%',
              width: '100%',
            }}
          >
            <video
              style={{
                backgroundColor: 'black',
                borderRadius: '10px',
                flex: 1,
              }}
              playsInline
              muted
              ref={checkVideo}
              autoPlay={true}
            />
            <Stack
              direction='row'
              alignItems='center'
              justifyContent='center'
              sx={{ my: 2 }}
            >
              <ControlIcon
                toggle={videoToggle}
                icon={showVideo ? <VideocamRounded /> : <VideocamOffRounded />}
                bgColor={showVideo ? 'green' : 'red'}
              />
              <ControlIcon
                toggle={micToggle}
                icon={openMic ? <MicRounded /> : <MicOffRounded />}
                bgColor={openMic ? 'green' : 'red'}
              />
            </Stack>
          </Grid>
          <Grid
            item
            sm={12}
            md={6}
            sx={{
              p: 2,
              [theme.breakpoints.down('600')]: { p: 0.5 },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              width: '100%',
            }}
          >
            <TextField
              autoComplete='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Enter Name'
              variant='outlined'
              fullWidth
              inputProps={{
                style: {
                  textAlign: 'center',
                },
              }}
            />
            <Button
              sx={{
                py: 1.2,
                borderRadius: '25px',
                mt: 3,
                mb: 2,
              }}
              fullWidth
              variant='contained'
              disabled={name === ''}
              onClick={() => joinMeeting()}
            >
              Join Meting
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  )
}

export default Lobby
