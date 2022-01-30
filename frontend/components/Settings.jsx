import React from 'react'
import { Box, Typography } from '@mui/material'

function Settings() {
  return (
    <Box sx={{ flex: 1, height: '100%', p: 1.5, px: 2 }}>
      <Typography component='p' variant='h6' fontSize={16}>
        Host Controls
      </Typography>
      <Typography component='p' variant='p' fontSize={14} sx={{mt: 2}}>
        Use these host seetings to keep control of your meeting
      </Typography>
    </Box>
  )
}

export default Settings
