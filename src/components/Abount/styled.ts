import styled from "styled-components";
import start from '../../../public/images/stars.jpg'
import marte from '../../../public/images/mars.svg'



export const SAbount = styled.div`
  height: 124.1rem;
  width: 100%;
  font-family: 'Heebo';
  background-image: url(${start.src});
  background-repeat: no-repeat;
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
    background-position: 10% 55%;
    color: #fff;

    p {
        font-size: 1.6rem;
        line-height: 2.5rem;
        margin-bottom: 2.4rem;
    }
`

export const BoxDescript = styled.div`
    max-width: 35%;
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

/**
 *  SLIDER CARROSSEL
 */

export const ContainerSlider = styled.div`
    width: 125rem;
    height: 35.3rem;
    display: flex;
`
export const LogoAbount = styled.img`
    width: 16.2rem;
    height: 2.5rem;
    margin: 0 0 1.3rem -2rem;
`

export const P_Text = styled.p`
    color: #fff;
    font: bold 1.8rem 'Heebo';
    letter-spacing: .1rem;
    margin-bottom: 1.7rem;
`

export const Achor = styled.a `
    font: bold 1.8rem 'Heebo';
    color: #FF8C70;
`

export const BoxTextSlider = styled.section`
    width: 22.9rem;
    height: 35.3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

`

export const ContainerSliderImg = styled.div`
    width: 34.5rem;
    height: 35.3rem;
    display: flex;

`
export const ImgSlider = styled.img`
    border-radius: 1rem;
    width: 34rem;
    height: 35.3rem;
`


