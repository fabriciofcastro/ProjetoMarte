import styled from "styled-components";
import start from '../../../public/images/stars.jpg'
import marte from '../../../public/images/mars.svg'

export const SAbount = styled.div`
  height: 124.1rem;
  width: 100%;
  font-family: 'Heebo';
  background-image: url(${start.src});
  background-repeat: no-repeat, no-repeat;
  background-size: 100% 100%;
`


/**
 *   Box Description
 */


export const BoxText = styled.div`
    height: 78.8rem;
    width: 100%;
    display: flex;
    margin-left: 15.5rem;
    margin: 0 auto;
    background-image: url(${marte.src});
    background-repeat: no-repeat;
    background-position: 12rem 9rem;
    color: #fff;

    p {
      font-size: 1.6rem;
     line-height: 2.5rem;
     margin-bottom: 2.4rem;
    }
`


export const BoxDescript = styled.div`
    width: 60.3rem;
    height: 37.8rem;
    margin: 20rem 0 0 75rem;
`

export const TitleH3 = styled.div`
    letter-spacing: .4rem;
    font-size: 1.8rem;
    color: ${props => props.theme.Colors.colorTitleH3};
    font-family: 'heebo';
    margin-bottom: 1.4rem;
`

export const TitleH1 = styled.div`
    font-size: 3.2rem;
    margin-bottom: 2.6rem;
`




