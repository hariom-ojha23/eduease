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
import logo from '../public/logo.png'

const ToolBar = styled(MuiToolbar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open, drawerWidth }) => ({
  [theme.breakpoints.down('600')]: {
    padding: '10px'
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
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
      }),
  }
}))

const AppBar = (props) => {
  const { drawerOpen, drawerWidth, drawerToggle } = props
  const theme = useTheme()

  return (
    <ToolBar position='fixed' open={drawerOpen} drawerWidth={drawerWidth}>
      <Box sx={{ mx: 2, mr: 3, display: { xs: 'none', md: 'flex' } }}>
        <Image src={logo} alt='eduease logo' height='65%' width='65%' />
      </Box>

      <Paper
        elevation={5}
        sx={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          [theme.breakpoints.down('340')]: { justifyContent: 'center' },
          flexGrow: '1',
          backgroundColor: '#073980',
          borderRadius: 3,
          p: 0.7,
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
          <IconButton>
            <ContentCopy />
          </IconButton>
        </Box>
        <Box>
          <IconButton sx={{ mr: 1.7 }} onClick={drawerToggle}>
            <ChatRounded />
          </IconButton>
          <IconButton sx={{ mr: 1.7 }} onClick={drawerToggle}>
            <PeopleAltRounded />
          </IconButton>
          <IconButton sx={{ mr: 2 }} onClick={drawerToggle}>
            <SettingsRounded />
          </IconButton>
        </Box>
      </Paper>
    </ToolBar>
  )
}

export default AppBar
