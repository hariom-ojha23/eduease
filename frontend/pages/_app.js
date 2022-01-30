import React from 'react'
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
    <ThemeProvider theme={setTheme}>
      <MainLayout>
        <ContextProvider>
          <Component {...pageProps} />
        </ContextProvider>
      </MainLayout>
    </ThemeProvider>
  )
}

export default MyApp
