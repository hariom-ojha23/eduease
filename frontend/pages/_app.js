import React from 'react'
import Head from 'next/head'
import { ContextProvider } from '../components/SessionContext'
import MainLayout from '../components/layouts/MainLayout'
import { createTheme, ThemeProvider } from '@mui/material'
import '../styles/globals.css'
import '@fontsource/lato/400.css'

const MyApp = ({ Component, pageProps }) => {
  const setTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  })
  return (
    <>
      <Head>
        <script
          defer
          src='https://unpkg.com/peerjs@1.3.1/dist/peerjs.min.js'
        ></script>
      </Head>
      <ThemeProvider theme={setTheme}>
        <MainLayout>
          <ContextProvider>
            <Component {...pageProps} />
          </ContextProvider>
        </MainLayout>
      </ThemeProvider>
    </>
  )
}

export default MyApp
