import React from 'react'
import {
  Paper,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { ContentCopy } from '@mui/icons-material'

const Sidebar = (props) => {
  const { drawerOpen, drawerToggle, drawerWidth } = props

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
        sx={{ m: 2, borderRadius: 3, flex: 1, backgroundColor: '#073980', [theme.breakpoints.down('lg')]: {
          mt: 0
        }, }}
      >
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text) => (
            <ListItem button key={text}>
              <ListItemIcon>
                <ContentCopy />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Drawer>
  )
}

export default Sidebar
