import { BgNuvem, ImgLogo, InforFooter, LogoFooter, RedeSociais, SFooter, LogoRedeSociais, NavBarFooter, ListItems, LinkRedeSocial } from './StyleFooter'
import logoFooter from '../../../public/images/logo-space-y.svg'
import instagram from '../../../public/images/instagram.svg'
import facebook from '../../../public/images/facebook.svg'
import linkedin from '../../../public/images/linkedin.svg'


export default function Footer() {

  return (
    <SFooter>
      <BgNuvem />
      <InforFooter>
        <LogoFooter>
          <ImgLogo src={ logoFooter.src } alt='Logo space y' />
        </LogoFooter>
        <RedeSociais>
          <LinkRedeSocial href='/#'>
            <LogoRedeSociais src={ linkedin.src } alt='Logo Linkedin' />
          </LinkRedeSocial>

          <LinkRedeSocial href='/#'>
            <LogoRedeSociais src={ facebook.src } alt='Logo Facebook' />
          </LinkRedeSocial>

          <LinkRedeSocial href='/#'>
            <LogoRedeSociais src={ instagram.src } alt='Logo Instagram' />
          </LinkRedeSocial>
        </RedeSociais>

        <NavBarFooter>
          <ListItems href='/#'> Início     </ListItems>
          <ListItems href='/#'> Sobre nós  </ListItems>
          <ListItems href='/#'> Missões    </ListItems>
          <ListItems href='/#'> Contato    </ListItems>
        </NavBarFooter>
      </InforFooter>
    </SFooter>
  )
}