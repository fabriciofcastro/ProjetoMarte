import styled from 'styled-components'

export const LinkEscrevase = styled.a`
  width: 26.4rem;
  height: 5.5rem;
  background-color: ${props => props.theme.Colors.bgButton};
  border-radius: .65rem;
  font: bold 1.8rem 'Heebo';
  color: #FFF;
  cursor: point;
  display: block;
  padding: 1.7% 5.5rem;
`
export const LinkMinhaVagaForm = styled(LinkEscrevase)`
  width: 41.6rem;
  height: 6.5rem;
  padding: 5% 12rem;
`