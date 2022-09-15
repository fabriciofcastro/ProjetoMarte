import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global';
import theme from '~/styles/themes/theme';
import Layout from '~/components/Layout';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href="../../public/images/icon-flag.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;600&display=swap" rel="stylesheet" />
      </Head>

      <ThemeProvider theme={ theme }>
        <Component { ...pageProps } />
        <GlobalStyle />
      </ThemeProvider>

    </>
  );
}

export default MyApp;
