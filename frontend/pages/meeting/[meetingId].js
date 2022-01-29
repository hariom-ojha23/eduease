import React, { useState } from 'react'
import { Box, CssBaseline } from '@mui/material'

import Sidebar from '../../components/Sidebar'
import AppBar from '../../components/AppBar'
import MainWrapper from '../../components/MainWrapper'

const drawerWidth = 350

const MeetingRoom = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const drawerToggle = () => {
    setDrawerOpen(!drawerOpen)
  }
  return (
    <Box>
      <CssBaseline />

      <AppBar
        drawerOpen={drawerOpen}
        drawerToggle={drawerToggle}
        drawerWidth={drawerWidth}
      />

      <MainWrapper
        drawerOpen={drawerOpen}
        drawerWidth={drawerWidth}
      ></MainWrapper>

      <Sidebar
        drawerOpen={drawerOpen}
        drawerToggle={drawerToggle}
        drawerWidth={drawerWidth}
      />
    </Box>
  )
}

export default MeetingRoom
