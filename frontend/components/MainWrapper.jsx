import React from 'react'
import { styled } from '@mui/material/styles'


const Main = styled('main', {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open, drawerWidth }) => ({
  padding: '12px',
  [theme.breakpoints.up('lg')]: { 
    ...(!open && {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      [theme.breakpoints.up('md')]: {
        marginRight: -(drawerWidth - 20),
        width: '100%',
      },
      [theme.breakpoints.down('md')]: {
        marginRight: '20px',
        width: '100%',
      },
      [theme.breakpoints.down('sm')]: {
        marginRight: '10px',
        width: '100%',
      },
    }),
    ...(open && {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
      width: `calc(100% - ${drawerWidth}px)`,
      [theme.breakpoints.down('md')]: {
        marginRight: '20px',
      },
      [theme.breakpoints.down('sm')]: {
        marginRight: '10px',
      },
    }),
  }
}))

const MainWrapper = (props) => {
  const { children, drawerOpen, drawerWidth } = props
  return (
    <Main open={drawerOpen} drawerWidth={drawerWidth}>
      {children}
    </Main>
  )
}

export default MainWrapper
