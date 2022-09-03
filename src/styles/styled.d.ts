import 'styled-components'
import theme from './theme'

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
      }
  }
}




