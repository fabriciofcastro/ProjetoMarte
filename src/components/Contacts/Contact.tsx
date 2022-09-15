import Image from "next/image"
import { ContainerBoxForm, ContentContact, BoxForm, SContact, BoxRocket, ContentBox, TitleForm, Text_P, ContainerFieldset } from "./StyleContact"
import ticket from '../../../public/images/icon-ticket.svg'
import { LinkMinhaVagaForm } from "../Button/Button"
import Form from "./Form/Form"
import { Chekts } from "./Form/FormStyle"

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
                Preencha os campos abaixo apara entrar na lista de espera
              </Text_P>

              <Form />
              <LinkMinhaVagaForm href="/#">
                Garantir minha vaga
              </LinkMinhaVagaForm>
            </ContentBox>

          </BoxForm>
        </ContainerBoxForm>
        <BoxRocket />
      </ContentContact>
    </SContact>
  )
}