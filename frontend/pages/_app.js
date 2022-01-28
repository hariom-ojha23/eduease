import '../styles/globals.css'
import '@fontsource/lato/400.css'
import MainLayout from '../components/layouts/MainLayout'
import { createTheme, ThemeProvider } from '@mui/material'

const MyApp = ({ Component, pageProps }) => {
  const setTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  })
  return (
    <ThemeProvider theme={setTheme}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  )
}

export default MyApp
