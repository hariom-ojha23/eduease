import React from 'react'
import Image from 'next/image'
import { Box, Paper, IconButton, Divider, Typography } from '@mui/material'
import MuiToolbar from '@mui/material/Toolbar'
import { styled, useTheme } from '@mui/material/styles'
import {
  ChatRounded,
  PeopleAltRounded,
  SettingsRounded,
  ContentCopy,
} from '@mui/icons-material'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import logo from '../public/logo.png'

const ToolBar = styled(MuiToolbar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open, width }) => ({
  [theme.breakpoints.down('600')]: {
    padding: '10px',
  },
  padding: 0,
  backgroundColor: 'transparent',
  boxShadow: 'none',
  width: '100%',
  paddingTop: '12px',
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  [theme.breakpoints.up('lg')]: {
    ...(open && {
      width: `calc(100% - ${width}px)`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: width,
    }),
  },
}))

const AppBar = (props) => {
  const {
    drawerOpen,
    drawerWidth,
    drawerToggle,
    setChatOpen,
    setMemberOpen,
    setSettingOpen,
    chatOpen,
    memberOpen,
    settingOpen,
  } = props
  const theme = useTheme()

  const chatToggle = () => {
    if (drawerOpen) {
      if (chatOpen) {
        drawerToggle()
        return
      }
      setChatOpen(true)
      setMemberOpen(false)
      setSettingOpen(false)
      return
    }

    setChatOpen(true)
    setMemberOpen(false)
    setSettingOpen(false)
    drawerToggle()
  }

  const memberToggle = () => {
    if (drawerOpen) {
      if (memberOpen) {
        drawerToggle()
        return
      }
      setChatOpen(false)
      setMemberOpen(true)
      setSettingOpen(false)
      return
    }
    setChatOpen(false)
    setMemberOpen(true)
    setSettingOpen(false)
    drawerToggle()
  }

  const settingToggle = () => {
    if (drawerOpen) {
      if (settingOpen) {
        drawerToggle()
        return
      }
      setChatOpen(false)
      setMemberOpen(false)
      setSettingOpen(true)
      return
    }
    setChatOpen(false)
    setMemberOpen(false)
    setSettingOpen(true)
    drawerToggle()
  }

  return (
    <ToolBar position='fixed' open={drawerOpen} width={drawerWidth}>
      <Box sx={{ mx: 2, mr: 3, display: { xs: 'none', md: 'flex' } }}>
        <Image src={logo} alt='eduease logo' height='65%' width='65%' />
      </Box>

      <Paper
        elevation={10}
        sx={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          [theme.breakpoints.down('340')]: { justifyContent: 'center' },
          flexGrow: '1',
          backgroundColor: '#073980',
          borderRadius: 3,
          p: 1.2,
        }}
      >
        <Box
          sx={{
            ml: 2,
            display: 'flex',
            alignItems: 'center',
            [theme.breakpoints.down('340')]: { display: 'none' },
          }}
        >
          <Typography
            noWrap
            component='h1'
            variant='p'
            sx={{
              maxWidth: '300px',
              fontSize: 16,
              fontWeight: 500,
              [theme.breakpoints.down('450')]: { width: '50px' },
            }}
          >
            Productivity Report Meeting
          </Typography>
          <Divider
            orientation='vertical'
            variant='middle'
            flexItem
            sx={{ mx: 1.5 }}
          />
          <CopyToClipboard text={'Meeting link'}>
            <IconButton>
              <ContentCopy />
            </IconButton>
          </CopyToClipboard>
        </Box>
        <Box>
          <IconButton sx={{ mr: 1.7 }} onClick={chatToggle}>
            <ChatRounded />
          </IconButton>
          <IconButton sx={{ mr: 1.7 }} onClick={memberToggle}>
            <PeopleAltRounded />
          </IconButton>
          <IconButton sx={{ mr: 2 }} onClick={settingToggle}>
            <SettingsRounded />
          </IconButton>
        </Box>
      </Paper>
    </ToolBar>
  )
}

export default AppBar
