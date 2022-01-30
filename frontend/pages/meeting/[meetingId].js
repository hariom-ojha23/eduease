import React, { useState, useContext, useEffect } from 'react'
import { Box, CssBaseline, Paper, Stack, Typography } from '@mui/material'
import {
  VideocamRounded,
  VideocamOffRounded,
  MicRounded,
  MicOffRounded,
  PresentToAllRounded,
  CallEndRounded,
} from '@mui/icons-material'

import Sidebar from '../../components/Sidebar'
import AppBar from '../../components/AppBar'
import MainWrapper from '../../components/MainWrapper'
import ControlIcon from '../../components/ControlIcon'

const MeetingRoom = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [chatOpen, setChatOpen] = useState(false)
  const [memberOpen, setMemberOpen] = useState(false)
  const [settingOpen, setSettingOpen] = useState(false)
  const [showVideo, setShowVideo] = useState(false)
  const [openMic, setOpenMic] = useState(false)

  const drawerToggle = () => {
    setDrawerOpen(!drawerOpen)
  }

  const videoToggle = () => {
    setShowVideo(!showVideo)
    console.log('click')
  }

  const micToggle = () => {
    setOpenMic(!openMic)
  }

  const drawerWidth = 350

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: 'inherit',
        justifyContent: 'center',
      }}
    >
      <CssBaseline />

      <AppBar
        drawerOpen={drawerOpen}
        drawerToggle={drawerToggle}
        drawerWidth={drawerWidth}
        setChatOpen={setChatOpen}
        setMemberOpen={setMemberOpen}
        setSettingOpen={setSettingOpen}
        chatOpen={chatOpen}
        memberOpen={memberOpen}
        settingOpen={settingOpen}
      />

      <MainWrapper drawerOpen={drawerOpen} drawerWidth={drawerWidth}>
        <Box sx={{ pb: 0.7, height: '85%' }}>
          <Paper
            elevation={5}
            sx={{
              borderRadius: '10px',
              height: '100%',
              padding: '10px',
              backgroundColor: 'transparent',
            }}
          ></Paper>
        </Box>
        <Box sx={{ pt: 0.7, height: '15%' }}>
          <Paper
            elevation={10}
            sx={{
              borderRadius: '10px',
              backgroundColor: '#073980',
              padding: 2,
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <ControlIcon
              toggle={videoToggle}
              icon={showVideo ? <VideocamRounded /> : <VideocamOffRounded />}
              info='Cam'
              bgColor={showVideo ? 'green' : 'red'}
            />
            <ControlIcon
              toggle={micToggle}
              icon={openMic ? <MicRounded /> : <MicOffRounded />}
              info='Mic'
              bgColor={openMic ? 'green' : 'red'}
            />
            <ControlIcon icon={<PresentToAllRounded />} info='Share' />
            <ControlIcon icon={<CallEndRounded />} info='Leave' bgColor='red' />
          </Paper>
        </Box>
      </MainWrapper>
      <Sidebar
        drawerOpen={drawerOpen}
        drawerToggle={drawerToggle}
        drawerWidth={drawerWidth}
        chatOpen={chatOpen}
        memberOpen={memberOpen}
        settingOpen={settingOpen}
      />
    </Box>
  )
}

export default MeetingRoom
