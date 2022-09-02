import Header from '../header/Header'
import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2? family=Heebo:wght@300;400;500;700;800&display=swap"
           rel="stylesheet"
        />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <title>Space Y - Partiu Marte! </title>
      </Head>
      <Header />

      <main>{children}</main>
    </>
  )
}
