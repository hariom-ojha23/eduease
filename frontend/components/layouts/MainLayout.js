import Head from 'next/head'
import { Box } from '@mui/material'

const MainLayout = ({ children }) => {
  return (
    <Box>
      <Head>
        <title>Eduease | Modern Way To Learn</title>
        <meta name='description' content='Online classrooms' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <div className='main'>{children}</div>
    </Box>
  )
}

export default MainLayout
