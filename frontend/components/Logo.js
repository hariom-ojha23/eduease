import Image from 'next/image'
import { Box } from '@mui/material'
import logo from '../public/logo.png'

const Logo = () => {
  return (
    <Box
      sx={{
        width: '30%',
        height: '50%',
        mx: 'auto',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Image src={logo} alt='eduease logo' width='100%' height='100%' />
    </Box>
  )
}

export default Logo
