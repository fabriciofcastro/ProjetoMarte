import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global';
import theme from '~/styles/themes/theme';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default MyApp;
