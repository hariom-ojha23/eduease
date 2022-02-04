import React, { useState, useContext, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import { Box, CssBaseline, Paper, Typography } from '@mui/material'
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
import VideoGrid from '../../components/VideoGrid'

import { SessionContext } from '../../components/SessionContext'

const MeetingRoom = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [chatOpen, setChatOpen] = useState(false)
  const [memberOpen, setMemberOpen] = useState(false)
  const [settingOpen, setSettingOpen] = useState(false)
  const [showVideo, setShowVideo] = useState(false)
  const [openMic, setOpenMic] = useState(false)

  const router = useRouter()

  const { userVideo, members, createSession } = useContext(SessionContext)
  const { meetingId } = router.query

  // useEffect to create a sessin on joining
  useEffect(async () => {
    console.log(meetingId)
    if (meetingId === null) {
      return
    }
    createSession(meetingId)
  }, [meetingId])

  // togglers to toggle drawer video and mic
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
  console.log(members)
  console.log(userVideo)

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
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
        <Box sx={{ pb: 0.7, height: '88%' }}>
          <Box
            elevation={5}
            sx={{
              borderRadius: '10px',
              height: '100%',
              padding: '10px',
              backgroundColor: 'transparent',
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <video
              style={{
                width: '50%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '15px',
                backgroundColor: 'black',
              }}
              muted
              playsInline
              autoPlay={true}
              ref={userVideo}
            />
            {members.map((peer, index) => (
              <VideoGrid peer={peer} key={index} />
            ))}
          </Box>
        </Box>
        <Box sx={{ pt: 0.7, height: '12%' }}>
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
              info=''
              bgColor={showVideo ? 'green' : 'red'}
            />
            <ControlIcon
              toggle={micToggle}
              icon={openMic ? <MicRounded /> : <MicOffRounded />}
              info=''
              bgColor={openMic ? 'green' : 'red'}
            />
            <ControlIcon icon={<PresentToAllRounded />} info='' />
            <ControlIcon icon={<CallEndRounded />} info='' bgColor='red' />
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
