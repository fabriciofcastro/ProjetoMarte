import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global'
import spaceY from '~/styles/themes/spaceY'


import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return(
      <ThemeProvider theme={spaceY}>
          <Component {...pageProps} />
          <GlobalStyle />
      </ThemeProvider>
  )
}

export default MyApp
