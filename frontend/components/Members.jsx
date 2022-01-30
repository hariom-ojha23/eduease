import React from 'react'
import Image from 'next/image'
import {
  Avatar,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Button,
} from '@mui/material'
import { MicRounded, Share } from '@mui/icons-material'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import person from '../public/person.png'

function generate(element) {
  return [0, 1, 2, 3, 4, 5, 6, 7, 8].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  )
}

const Members = () => {
  return (
    <Box sx={{ flex: 1, height: '100%', p: 1.5, px: 2 }}>
      <Typography component='p' variant='h6' fontSize={16}>
        All Members
      </Typography>
      <Typography component='p' variant='p' fontSize={14} sx={{ mt: 2 }}>
        Use these host seetings to keep control of your meeting
      </Typography>
      <CopyToClipboard text={'Invite Member'}>
        <Button
          variant='outlined'
          fullWidth
          startIcon={<Share />}
          sx={{ mt: 2, color: 'whitesmoke' }}
        >
          Invite Member
        </Button>
      </CopyToClipboard>
      <List dense={false} sx={{ my: 2 }}>
        {generate(
          <ListItem
            secondaryAction={
              <IconButton edge='end' aria-label='delete'>
                <MicRounded color='success' />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar sx={{ backgroundColor: 'purple' }}>
                <Image src={person} alt='person' width='100%' height='100%' />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary='Single-line item' secondary='Attendee' />
          </ListItem>
        )}
      </List>
    </Box>
  )
}

export default Members
