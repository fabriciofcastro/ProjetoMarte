import styled from "styled-components";
import nuvem from '../../../public/images/Smoke_footer.svg'

export const SFooter = styled.footer`
  width: 100%;
  height: 41.5rem;
  background-color: ${props => props.theme.Colors.gray01};

`

export const BgNuvem = styled.section`
  width: 100%;
  height: 27.5rem;
  background-image: url(${nuvem.src});
  background-repeat: no-repeat;
  background-size: cover;

`
export const InforFooter = styled.section`
  width: 100%;
  height: 13.6rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const LogoFooter = styled.figure`
    width: 22.7rem;
    height: 3.5rem;
`

export const ImgLogo = styled.img`
    width: 100%;
`

export const RedeSociais = styled.figure`
  width: auto;
  height: auto;

`

export const LogoRedeSociais = styled.img`
    padding: 0 1.8rem;

`

export const LinkRedeSocial = styled.a`
    cursor: point;
`

export const NavBarFooter = styled.nav`
  width: auto;
  height: auto;
`

export const ListItems = styled.a`
    font: normal 1.6rem 'Heebo';
    color: #fff;
    letter-spacing: .1rem;
    padding: 0 2.5rem;

      &:hover {
        color: ${({theme}) => theme.Colors.mars};
      }
`