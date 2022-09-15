import { Checkbox, ContainerFieldset, ContainerForm, Inputs, Labels, Textcheckbox } from "./FormStyle"

const Form = () => {

  return (
    <>
      <ContainerFieldset>
        <ContainerForm>
          <Labels>Nome</Labels>
          <Inputs type='text' />
          <Labels>E-mail</Labels>
          <Inputs  type='email' />
          <Labels>Telefone</Labels>
          <Inputs type='tel' />
          <Checkbox type='checkbox' />
          <Textcheckbox>
            Concordo em receber comunicações
          </Textcheckbox>
        </ContainerForm>
      </ContainerFieldset>
    </>
  )
}

export default Form