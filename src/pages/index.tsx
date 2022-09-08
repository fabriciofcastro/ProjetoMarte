import type { NextPage } from 'next';
import Head from 'next/head'
import Header from '~/components/Home';
import { ImgPlanet } from '~/components/Home/style';
import Planeta from '../../public/images/home-mars-right.svg'
import Image from 'next/image';
import Globalstyled from '../styles/global'
import Abount from '../components/Abount/index';

const Home: NextPage = () => {
  return (
    <>
    <Globalstyled />
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2? family=Heebo:wght@300;400;500;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />

      </Head>
      
      <Header />
      <Abount />


    </>
  )
};

export default Home;
