import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import {
  Box,
  Typography,
  Button,
  Paper,
  IconButton,
  Stack,
} from '@mui/material'
import { useTheme } from '@emotion/react'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import SnackBar from './SnackBar'

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

const PaperSurface = (props) => {
  const { breakpoints, title, url, setMessage, setVariant, setSnackOpen } =
    props

  const copyToClipboard = () => {
    const msg =
      title.split(' ')[0] === 'Host'
        ? 'Host URl copied to clipboard'
        : 'Attendee URL copied to clipboard'
    setMessage(msg)
    setVariant('info')
    setSnackOpen(true)
  }

  return (
    <Paper sx={{ mt: 2, mb: 1, borderRadius: 3 }} elevation={10}>
      <Box sx={{ p: 1.5 }}>
        <Typography component='p' variant='p' fontSize={16}>
          {title}
        </Typography>
      </Box>
      <Stack
        direction='row'
        justifyContent='space-between'
        sx={{ width: 650, ...breakpoints, px: 1.5, pb: 1.5 }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            width: '90%',
          }}
        >
          <Typography noWrap component='p' variant='p'>
            {url}
          </Typography>
        </Box>

        <CopyToClipboard onCopy={() => copyToClipboard()} text={url}>
          <IconButton>
            <ContentCopyIcon />
          </IconButton>
        </CopyToClipboard>
      </Stack>
    </Paper>
  )
}

const Share = () => {
  const [message, setMessage] = useState('')
  const [variant, setVariant] = useState('success')
  const [snackOpen, setSnackOpen] = useState(false)

  const theme = useTheme()
  const router = useRouter()

  const breakpoints = {
    [theme.breakpoints.down('760')]: {
      maxWidth: 500,
    },
    [theme.breakpoints.down('610')]: {
      maxWidth: 400,
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: 300,
    },
    [theme.breakpoints.down('300')]: {
      maxWidth: 250,
    },
  }

  const snackClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setSnackOpen(false)
  }

  // fake data till host control
  const hostUrl =
    'bcbxcmbmxbcmbxvbczbcbzvcbmxzcvmbvmczcnxB<XNcbZXBczbx,bc,zbxcnbzcxbzmcmbcbcxvNMXcmZVXczbxbcn,zbx,czbnxbc,m'
  const viewUrl =
    'kkhadkhakdadfsgfhskkhadkhakdadfsgfhskkhadkhakdadfsgfhskkhadkhakdadfsgfhskkhadkhakdadfsgfhskkhadkhakdadfsgfhs'

  const hostControl = true
  const meetingName = `Meeting Name: Test Name`
  const attendee = `Join link for Attendee: ${viewUrl}`
  const host = `Join link for Host: ${hostUrl}`
  let msg = ''

  if (hostControl) {
    msg = msg + `${meetingName}\n${attendee}\n${host}`
  } else {
    msg = msg + `${meetingName}\n${host}`
  }

  const copyToClipboard = () => {
    setMessage('Copied to Clipboard!')
    setVariant('info')
    setSnackOpen(true)
  }

  return (
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
          <PaperSurface
            breakpoints={breakpoints}
            title='Attendee URL'
            setSnackOpen={setSnackOpen}
            setVariant={setVariant}
            setMessage={setMessage}
            url={viewUrl}
          />
          <PaperSurface
            breakpoints={breakpoints}
            title='Host URL'
            setSnackOpen={setSnackOpen}
            setVariant={setVariant}
            setMessage={setMessage}
            url={hostUrl}
          />
          <Button
            sx={{
              py: 1.2,
              width: 550,
              borderRadius: '25px',
              my: 2,
              ...breakpoints,
            }}
            variant='contained'
            onClick={() => router.push('/join')}
          >
            Start Meeting (as Host)
          </Button>

          <CopyToClipboard onCopy={() => copyToClipboard()} text={msg}>
            <Button
              sx={{
                py: 1.2,
                width: 550,
                borderRadius: '25px',
                my: 2,
                ...breakpoints,
              }}
              variant='outlined'
              onClick={() => console.log('clicked')}
            >
              Copy invite to Clipboard
            </Button>
          </CopyToClipboard>
        </Box>
      </Box>
      <SnackBar
        snackOpen={snackOpen}
        snackClose={snackClose}
        variant={variant}
        message={message}
      />
    </Box>
  )
}

export default Share
