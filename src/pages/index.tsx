import type { NextPage } from 'next';
import Head from 'next/head'
import Header from '~/components/Home';
import { ImgPlanet } from '~/components/Home/style';
import Planeta from '../../public/images/home-mars-right.svg'
import Image from 'next/image';

import Abount from '../components/Abount/index';

const Home: NextPage = () => {
  return (
    <>
       <Header />
      <Abount />

    </>
  )
};

export default Home;
