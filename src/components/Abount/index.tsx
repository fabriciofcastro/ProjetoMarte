import Head from 'next/head';
import { useState } from 'react';
import { SAbount, BoxText, BoxDescript, TitleH3, TitleH1 } from './styled'


export default function Abount() {

  return (
    <>
      <Head >
        <title>Sobre Marte</title>
        <meta property='org:title' content='Sobre Marte' key='title' />
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


      </SAbount>

    </>
  );
}

