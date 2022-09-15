import styled from "styled-components";
import background from '../../../public/images/background-stars-form.jpg'
import rocket from '../../../public/images/rocket.svg'

export const SContact = styled.section`
  width: 100%;
  height: 107rem;
  background-image: url(${background.src}) ;
  background-repeat: no-repeat;
  background-size: 100%;
`
                 /* Caixa Pai */
export const ContentContact = styled.section`
    width: 121.8rem;
    height: 107.2rem;
    display: flex;
    margin: 0 auto;
`
/* Ciaxa do formulário */
export const ContainerBoxForm = styled.section`
  width: 60.6rem;
  height: auto;
  display: flex;
  align-items: center;
`
          /* Formulário*/
export const BoxForm = styled.section`
    width: 52rem;
    height: 79.2rem;
    background-color: ${({theme}) => theme.Colors.backgroundForm};
    border-radius: 2rem;
    display: flex;
    justify-content: center;
    border: 1px solid white
`

export const ContentBox = styled.section`
    width: 41.7rem;
    height: 62rem;
    margin-top: 3.9rem;
    
`

export const TitleForm = styled.h2`
    color: #fff;
    font: bold 2.4rem 'Heebo';
    width: 28.4rem;
    margin: 1.6rem 0 1.6rem ;
`
export const Text_P = styled.p`
     color: #fff;
     font: normal 1.6rem 'Heebo';
     margin-bottom: 3.2rem;
     width: 28rem;
`

           /* Caixa do foguete */

export const BoxRocket = styled.section`
    width: 60.6rem;
    height: auto;
    background-image: url(${rocket.src});
    background-repeat: no-repeat;
    background-position-y: 14rem;
`
