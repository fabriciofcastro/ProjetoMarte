import type { NextPage } from 'next';
import Head from 'next/head'
import Header from '~/components/Home';
import Abount from '../components/Abount/index';
import Contact from '~/components/Contacts/Contact';
import Footer from '~/components/Footer/Footer';

const Home: NextPage = () => {
  return (
    <>
      <Head></Head>
      <Header />
      <Abount />
      <Contact />
      <Footer />
    </>
  )
};

export default Home;
