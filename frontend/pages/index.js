import React, { useState } from 'react'
import { useRouter } from 'next/router'
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
  CircularProgress,
} from '@mui/material'
import { useTheme } from '@emotion/react'
import Share from '../components/Share'
import SnackBar from '../components/SnackBar'
import Logo from '../components/Logo'

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

const Create = () => {
  const [meetingName, setMeetingName] = useState('')
  const [hostControl, setHostControl] = useState(false)
  const [loading, setLoading] = useState(false)
  const [meetingCreated, setMeetingCreated] = useState(false)
  const [message, setMessage] = useState('')
  const [variant, setVariant] = useState('success')
  const [snackOpen, setSnackOpen] = useState(false)

  const theme = useTheme()
  const router = useRouter()

  const selectHostControl = (event) => {
    setHostControl(event.target.checked)
  }

  const joinMeeting = () => {
    router.push('/join')
  }

  const breakpoints = {
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
  }

  const createMeeting = () => {
    setLoading(true)
    console.log(meetingName, hostControl)
    setMeetingCreated(true)
    setVariant('success')
    setMessage(`Created Meeting: ${meetingName}!`)
    setSnackOpen(true)
    setLoading(false)
  }

  const snackClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setSnackOpen(false)
  }

  return (
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
      {!meetingCreated && (
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
                value={meetingName}
                onChange={(e) => setMeetingName(e.target.value)}
                placeholder='Name Your Meeting'
                variant='outlined'
                inputProps={{
                  style: {
                    textAlign: 'center',
                  },
                }}
                sx={{
                  width: 550,
                  ...breakpoints,
                }}
              />

              <FormGroup sx={{ my: 2, mx: 'auto', ...breakpoints }}>
                <FormControlLabel
                  sx={{
                    color: 'lightgray',
                  }}
                  control={
                    <Checkbox
                      checked={hostControl}
                      onChange={selectHostControl}
                    />
                  }
                  label='Restrict Host Control (Separate Host Link)'
                />
              </FormGroup>

              <Button
                sx={{
                  py: 1.2,
                  width: 550,
                  borderRadius: '25px',
                  mb: 2,
                  ...breakpoints,
                }}
                variant='contained'
                disabled={meetingName === '' || loading}
                onClick={() => createMeeting()}
              >
                {!loading ? (
                  'Create Meeting'
                ) : (
                  <>
                    <CircularProgress size={20} sx={{ mr: 2 }} /> Create Meeting{' '}
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
                  ...breakpoints,
                }}
                variant='outlined'
                onClick={() => joinMeeting()}
              >
                Have a meeting id?
              </Button>
            </Box>
          </Box>
        </Box>
      )}
      {meetingCreated && <Share />}
      <SnackBar
        snackOpen={snackOpen}
        snackClose={snackClose}
        variant={variant}
        message={message}
      />
    </Box>
  )
}

export default Create
