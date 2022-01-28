import Head from 'next/head'
import { Box } from '@mui/material'

const MainLayout = ({ children }) => {
  return (
    <Box>
      <Head>
        <title>Eduease</title>
        <meta name='description' content='Online classrooms' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <main>{children}</main>
    </Box>
  )
}

export default MainLayout
