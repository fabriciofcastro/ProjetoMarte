import { StaticImageData } from 'next/image'
import 'styled-components'
import theme from './theme'

declare module "react" {
  interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
    alt?: string;
        loading?: "eager" | "lazy" | "auto"
        crossOrigin?: "anonymous" | "use-credentials" | "";
        decoding?: "async" | "auto" | "sync";
        height?: number | string;
        sizes?: string;
        src?: string;
        srcSet?: string;
        useMap?: string;
        width?: number | string;
  }
}


export type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
      title: string

      Colors: {
        space:  string,
        spaceLigth: string
        spaceDark: string,
        gray01: string,
        gray02: string,
        gray03: string,
        gray04: string,
        gray05: string,
        mars: string,
        marsLight: string,
        marsDark: string,
        sun: string,
        uranus: string,
        jupiter: string,
        earth: string,
        saturn: string,
        text: string,
        background: string,
        backgroundSection: string,
        backgroundForm: string,
        bgButton: string,
        Imagem: string
      }

      Imag: {
        img: StaticImageData
      }
  }
}




