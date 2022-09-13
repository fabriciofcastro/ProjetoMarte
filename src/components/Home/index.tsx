
import Image from 'next/image';
import { SHome, SHeader, Slogan, Experiencia, Foguete, Exclusiva, Missao, ContentBox } from './style';
import Logo from '../../../public/images/logo-space-y.svg'
import { Button } from '../Button/Button';
import foguete from '../../../public/images/icon-rocket.svg'
import bandeira from '../../../public/images/icon-flag.svg'
import telescope from '../../../public/images/icon-telescope.svg'
import Head from 'next/head';

export default function Header() {

  return (
    <>
      <Head>
        <title>Spece Y - Seu destino para Marte</title>
        <meta property='org:title' content='Spece Y - Seu destino para Marte' key='title' />
      </Head>

      <SHome >
      <ContentBox>
        <SHeader>
          <Image src={ Logo } alt="Logo space y" />
        </SHeader>
        <Slogan>
          <h5>FINALMENTE É POSSÍVEL!</h5>
          <h1>Sua jornada para Marte <br /> Começa aqui! </h1>

          <p>A primeira viagem para Marte estará disponivél apartir do dia <br />
            12/03/2028. Iscreva-se em nossa lista de espera.
          </p>
          <Button >Inscreva-se agora</Button>
        </Slogan>
        <Experiencia>
          <Foguete>
            <Image src={ foguete } alt='Imagem foguete' />
            <p>Foguete com mais alta <br />
              tecnologia e conforto
            </p>
          </Foguete>
          <Missao>
            <Image src={ bandeira } alt='Imagem de bandeira estiada' />
            <p>Mai de 100 missões <br />
              consecutivas com sucesso
            </p>
          </Missao>
          <Exclusiva >
            <Image src={ telescope } alt='Imagem de Telescópio' />
            <p>Experiência única <br />
              e exclusiva
            </p>
          </Exclusiva>
        </Experiencia>
        </ContentBox>
      </SHome>
    </>
  )
}
