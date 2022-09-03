import styled from 'styled-components';
import Head from '~/components/Head';

export const Title = styled.h1`
  background-color: ${props => props.theme.Colors.gray03};
`;

export default function Header() {
  return <Title>Olá Fabricio</Title>;
}
