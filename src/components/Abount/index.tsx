import Head from 'next/head';
import Image from 'next/image';
import { S_Abount, Imagem } from './styled'
import start from '../../../public/images/stars.jpg'  // esta imagem deveria se background
import PlanetaMarte from '../../../public/images/mars.svg' // esta deveria ficar por cima

export default function Abount() {
  return (
    <>
      <Head >
        <title>Sobre Marte</title>

      </Head>
      <S_Abount>
        <Imagem src={ start } />
        <Image src={ PlanetaMarte } />

      </S_Abount>

    </>
  );
}
