import Image from "next/image"
import {
       ContainerBoxForm,
       ContentContact,
       BoxForm, SContact,
       BoxRocket,
       ContentBox,
       TitleForm,
       Text_P
      } from "./StyleContact"
import ticket from '../../../public/images/icon-ticket.svg'
import Form from "./Form/Form"
import { ButtonForm } from "../Button/Button"


export default function Contact() {

  return (
    <SContact>
      <ContentContact >
        <ContainerBoxForm>
          <BoxForm>
            <ContentBox>
              <Image src={ ticket } alt="Desenho ingresso" />
              <TitleForm >
                Garanta sua viagem para a primeira viagem
              </TitleForm>
              <Text_P>
                Preencha os campos baixo para entrar na lista de espera
              </Text_P>

              <Form />
              <ButtonForm type="button">
                Garantir minha vaga
              </ButtonForm>
            </ContentBox>

          </BoxForm>
        </ContainerBoxForm>
        <BoxRocket />
      </ContentContact>
    </SContact>
  )
}