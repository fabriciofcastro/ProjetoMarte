import styled from "styled-components";

export const ContainerFieldset = styled.fieldset`


`


export const ContainerForm = styled.form`


`

export const Labels = styled.label`
  font: normal 1.6rem 'Heebo';
  color: #fff;
`
export const Inputs = styled.input`
   width: 41.6rem;
   height: 5.6rem;
   border-radius: .6rem;
   background-color: ${ ({ theme }) => theme.Colors.backgroundForm};
   border: 1px solid #fff;
   margin: 1.2rem 0 2.4rem 0;
`
export const Checkbox = styled.input`
  border-radius: .6rem;
  background-color: ${ ({ theme }) => theme.Colors.backgroundForm};
  margin: 2.4rem 0 3.2rem 0;
  display: inline-block;
`

export const Textcheckbox = styled.span`
  font: regular 2rem 'Heebo';
  color: #fff;
  margin-left: 1rem;
`
