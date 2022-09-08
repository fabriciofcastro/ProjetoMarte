import Head from 'next/head';
import { S_Abount, Imagem } from './styled'


export default function Abount() {
  return (
    <>
      <Head >
        <title>Sobre Marte</title>

      </Head>
      <S_Abount>
        <Imagem src='../../../public/images/stars.jpg' alt='sadsa'/>

      </S_Abount>

    </>
  );
}
