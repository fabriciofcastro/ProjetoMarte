import { Checkbox, ContainerForm, GrupChecked, Inputs, Labels, Textcheckbox } from "./FormStyle"

const Form = () => {

  return (
    <>
      <ContainerForm action="https://www.spacex.com/" method="POST">
        <Labels htmlFor="name">Nome</Labels>
        <Inputs type='text' id="name" />

        <Labels htmlFor="email">E-mail</Labels>
        <Inputs type='email' form="email" />

        <Labels htmlFor="phone">Telefone</Labels>
        <Inputs type='tel' id="phone" />
        <GrupChecked>
          <Checkbox type='checkbox' id="checked"/>
          <Textcheckbox htmlFor="checked">
            Concordo em receber comunicações
          </Textcheckbox>
        </GrupChecked>
      </ContainerForm>

    </>
  )
}

export default Form