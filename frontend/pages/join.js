import React, { useState, useContext } from 'react'
import { useRouter } from 'next/router'
import {
  Box,
  Button,
  TextField,
  Typography,
  CircularProgress,
} from '@mui/material'
import { useTheme } from '@emotion/react'

import Logo from '../components/Logo'
import { SessionContext } from '../components/SessionContext'

const Text = (props) => {
  const { variant, component, children } = props
  return (
    <Typography
      sx={{ mb: 2 }}
      textAlign='center'
      variant={variant}
      component={component}
      color='white'
      fontWeight='400'
    >
      {children}
    </Typography>
  )
}

const Join = () => {
  const [meetingId, setMeetingId] = useState('')
  const [loading, setLoading] = useState(false)

  const { createSession } = useContext(SessionContext)

  const theme = useTheme()
  const router = useRouter()

  const startCall = () => {
    setLoading(true)
    createSession(meetingId)
  }

  const createMeeting = () => {
    router.push('/')
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          flexGrow: 1,
          margin: '0 auto',
          padding: '7% 0 2%',
        }}
      >
        <Logo />
        <Box sx={{ flex: 6, flexDirection: 'row' }}>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              margin: '5% auto 0',
            }}
          >
            <Text variant='h4' component='h4'>
              Eduease
            </Text>
            <Text variant='h6' component='p'>
              Modern Way to Learn in Classrooms
            </Text>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'spae-evenly',
              }}
            >
              <TextField
                autoComplete='text'
                value={meetingId}
                onChange={(e) => setMeetingId(e.target.value)}
                placeholder='Enter Meeting ID'
                variant='outlined'
                inputProps={{
                  style: {
                    textAlign: 'center',
                  },
                }}
                sx={{
                  width: 550,
                  [theme.breakpoints.down('760')]: {
                    width: 500,
                  },
                  [theme.breakpoints.down('610')]: {
                    width: 400,
                  },
                  [theme.breakpoints.down('sm')]: {
                    width: 300,
                  },
                  [theme.breakpoints.down('300')]: {
                    width: 250,
                  },
                }}
              />

              <Button
                sx={{
                  py: 1.2,
                  width: 550,
                  borderRadius: '25px',
                  mt: 3,
                  mb: 2,
                  [theme.breakpoints.down('760')]: {
                    width: 500,
                  },
                  [theme.breakpoints.down('610')]: {
                    width: 400,
                  },
                  [theme.breakpoints.down('sm')]: {
                    width: 300,
                  },
                  [theme.breakpoints.down('300')]: {
                    width: 250,
                  },
                }}
                variant='contained'
                disabled={meetingId === '' || loading}
                onClick={() => startCall()}
              >
                {!loading ? (
                  'Enter Meeting'
                ) : (
                  <>
                    <CircularProgress size={20} sx={{ mr: 2 }} /> Entering in
                    Meeting{' '}
                  </>
                )}
              </Button>

              <div className='create-divider'></div>

              <Button
                sx={{
                  py: 1.2,
                  width: 550,
                  borderRadius: '25px',
                  my: 2,
                  [theme.breakpoints.down('760')]: {
                    width: 500,
                  },
                  [theme.breakpoints.down('610')]: {
                    width: 400,
                  },
                  [theme.breakpoints.down('sm')]: {
                    width: 300,
                  },
                  [theme.breakpoints.down('300')]: {
                    width: 250,
                  },
                }}
                variant='outlined'
                onClick={() => createMeeting()}
              >
                Create a meeting?
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Join
