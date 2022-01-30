import React from 'react'
import { Paper, Stack, Typography, IconButton } from '@mui/material'
import { useTheme } from '@mui/material/styles'

const ControlIcon = (props) => {
  const { icon, info, bgColor, toggle } = props
  const theme = useTheme()

  return (
    <Stack direction='column' align='center' sx={{ mx: 1.8 }}>
      <Paper
        elevation={3}
        sx={{
          borderRadius: '50%',
          height: '50px',
          width: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: bgColor,
        }}
      >
        <IconButton onClick={toggle}>{icon}</IconButton>
      </Paper>
      <Typography
        variant='h6'
        component='p'
        fontSize={16}
        sx={{
          mt: 1.2,
          [theme.breakpoints.down('600')]: {
            display: 'none',
          },
        }}
      >
        {info}
      </Typography>
    </Stack>
  )
}

export default ControlIcon
