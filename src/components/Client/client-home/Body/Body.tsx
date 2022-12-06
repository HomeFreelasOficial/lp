import { Card, CardBotao, CardLocalizacao, IconeLocal, Texto, TextoBold, Wrapper, OrganizadorCardLocalizacao, BotaoRoxo } from "./styles";
import { Link } from "react-router-dom";

export default function BodyApp() {
  return(
     <Wrapper>
      <CardLocalizacao>
        <OrganizadorCardLocalizacao>
        <TextoBold>Ative a localização</TextoBold>
        <Texto>Para utilizar as funcionalidades do Homefreelas, é necessário que a localização do seu dispositivo esteja ativada.</Texto>
        </OrganizadorCardLocalizacao>
        <IconeLocal/>
     </CardLocalizacao>
     <CardBotao>
      <TextoBold>Deu problema?</TextoBold>
      <Link to="/cliente/pedir-servico">
        <BotaoRoxo>Peça um freela aqui!</BotaoRoxo>
      </Link>
     </CardBotao>
     <Card>
      <TextoBold>Primeira vez aqui?</TextoBold>
      <Texto>Só clicar no botão roxo no card de cima, depois disso você vai poder específicar qual é o tipo de problema
        e em pouco tempo vamos achar alguém pra lidar com ele.
      </Texto>
     </Card>
     </Wrapper>
  )
}