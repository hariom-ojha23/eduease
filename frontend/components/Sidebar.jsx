import React from 'react'
import { Paper, Drawer } from '@mui/material'
import { useTheme } from '@mui/material/styles'

import Chat from './Chat'
import Members from './Members'
import Settings from './Settings'

const Sidebar = (props) => {
  const {
    drawerOpen,
    drawerToggle,
    drawerWidth,
    chatOpen,
    memberOpen,
    settingOpen,
  } = props

  const theme = useTheme()

  return (
    <Drawer
      variant='persistent'
      anchor='right'
      open={drawerOpen}
      onClose={drawerToggle}
      sx={{
        '& .MuiDrawer-paper': {
          backgroundColor: 'transparent',
          width: drawerWidth,
          color: theme.palette.text.primary,
          borderLeft: 'none',
          [theme.breakpoints.down('lg')]: {
            top: '88px',
            paddingBottom: '90px',
          },
        },
      }}
      ModalProps={{ keepMounted: true }}
      color='inherit'
    >
      <Paper
        elevation={5}
        sx={{
          m: 2,
          ml: 0,
          borderRadius: 3,
          flex: 1,
          backgroundColor: '#073980',
          [theme.breakpoints.down('lg')]: {
            mt: 0,
          },
        }}
      >
        {chatOpen && <Chat />}
        {memberOpen && <Members />}
        {settingOpen && <Settings />}
      </Paper>
    </Drawer>
  )
}

export default Sidebar
