import '@/styles/globals.css'
import { customTheme } from '@/themes/custom-theme'
import { darkTheme } from '@/themes/dark-theme'
import { lightTheme } from '@/themes/light-theme'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline, Theme } from '@mui/material'
import Cookies from 'js-cookie'
import { GetServerSideProps } from 'next'
import type { AppContext, AppProps } from 'next/app'
import { useEffect, useState } from 'react'


interface Props extends AppProps {
  theme:string
}

export default function App({ Component, pageProps }: Props) {
  const [currentTheme, setCurrentTheme] = useState(lightTheme)

  useEffect(() => {
    const cookieTheme = Cookies.get("theme") || "light"
     const selectedTheme:Theme = cookieTheme === "light" ? lightTheme : 
     (cookieTheme === "dark") ?
      darkTheme : customTheme

      setCurrentTheme(selectedTheme)
  }, [])
  

 

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}


// Ejemplo

// App.getInitialProps = async(appContext:AppContext) => {
  
//   const {theme} = appContext.ctx.req ? (appContext.ctx.req as any).cookies : {theme: "light"}
//   const validThemes = ["light", "dark", "custom"]
  
//   return {
//     theme: validThemes.includes(theme) ? theme : "dark",
//   }
// }