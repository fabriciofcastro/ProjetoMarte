import Head from 'next/head';
import foto1 from '../../../public/images/gallery-1.jpg'
import foto2 from '../../../public/images/gallery-2.jpg'
import foto3 from '../../../public/images/gallery-3.jpg'
import logoWhite from '../../../public/images/logo-space-y.svg'
import {
  SAbount,
  BoxText,
  BoxDescript,
  TitleH3,
  TitleH1,
  ContainerSlider,
  BoxTextSlider,
  ImgSlider,
  P_Text,
  ContainerSliderImg,
  Achor,
  LogoAbount
} from './styled'


export default function Abount() {

  return (
    <>
      <Head >
        <title>Sobre Marte</title>
        <meta property='org:title' content='Sobre Marte' key='title' />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.2/min/tiny-slider.js">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/tiny-slider.css" />
        </script>
      </Head>
      <SAbount>

        <BoxText >
          <BoxDescript>
            <TitleH3>POR QUE MARTE?</TitleH3>
            <TitleH1>Sobre o planeta vermelho</TitleH1>
            <p>
              A uma distância média de 140 milhões de milhas, Marte é um dos vizinhos habitáveis ​​mais próximos da Terra. Marte está mais ou menos a metade da distância da Terra do Sol, então ainda tem luz solar decente. Está um pouco frio, mas podemos esquentar. Sua atmosfera é composta principalmente de CO2 com um pouco de nitrogênio e argônio e alguns outros oligoelementos, o que significa que podemos cultivar plantas em Marte apenas comprimindo a atmosfera.
            </p>
            <p>
              A gravidade em Marte é cerca de 38% da da Terra, então você seria capaz de levantar coisas pesadas e dar voltas. Além disso, o dia está notavelmente próximo ao da Terra.
            </p>
          </BoxDescript>
        </BoxText>

        {/**  S L I D E R */ }

        <ContainerSlider>
          <BoxTextSlider>
            <LogoAbount src={ logoWhite.src }
              alt='Logo da expresa espacila space y'
            />
            <P_Text>
              O caminho para <br />
              tornar a humanidade
              multiplanetária.
            </P_Text>
            <Achor target="_blank" href="https://www.spacex.com/">
              Increva-se agora
            </Achor>

          </BoxTextSlider>
          <ContainerSliderImg>
            <ImgSlider src={ foto1.src } alt="Acampamento em marte, com instalação de exploração" />
            <ImgSlider src={ foto2.src } alt="Acampamento em marte, com sondas e robos de exploração" />
            <ImgSlider src={ foto3.src } alt="Veiculo de coleta do solo" />
          </ContainerSliderImg>
        </ContainerSlider>
      </SAbount>

    </>
  );
}

