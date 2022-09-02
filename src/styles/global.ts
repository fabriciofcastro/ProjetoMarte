import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

:root {

  

}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.Colors.background};
    color: ${props => props.theme.Colors.text};
    font: 400 16px Roboto, sans-serif;
  }

  a {
    color: ${props => props.theme.Colors.background};
    text-decoration: none;
  }
`
