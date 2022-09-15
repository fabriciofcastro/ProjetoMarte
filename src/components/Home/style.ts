import styled from 'styled-components';
import Planeta from '../../../public/images/home-mars-right.svg'

export const SHome = styled.div`
  width: 100%;
  height:  81.6rem;
  background-image: url(${Planeta.src});
  background-repeat: no-repeat;
  background-position: 100% 1.6rem;
  font-family: 'Heebo';
`

export const ContentBox = styled.div`
   height: 81.6rem;
   width: 121.8rem;
   margin: 0 auto;
`

export const SHeader = styled.div`
    width: 100%;
    height: 8.9rem;
    padding: 2.4rem 0;
`
export const Slogan = styled.div`
  width: 81.5rem;
  height: 35.9rem;
  color: #FFF;
  margin: 9.5rem 0 11.1rem 0;

  h5 {
    color: #F5D15F;
    letter-spacing: .4rem;
    margin-bottom: .8rem;
    font-size: 1.8rem;
  }

    h1 {
      font: bold 6.2rem 'Heebo';
    }

    p {
      font: 300 2rem 'Heebo';
      margin: 3.5rem 0;
      line-height: 2.9rem;
    }
`

export const Experiencia = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 13.46rem 0 2.6rem 0 ;
  height: 11.24rem;
  align-items: center;
`

export const Foguete = styled.section`
    font: 400 1.6rem 'Heebo';
    color: ${({ theme }) => theme.Colors.gray05};
`

export const Missao = styled(Foguete)`

`

export const Exclusiva = styled(Foguete)`

`

