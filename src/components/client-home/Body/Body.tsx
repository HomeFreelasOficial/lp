import { Card, CardLocalizacao, IconeLocal, Texto, TextoBold, Wrapper, OrganizadorCardLocalizacao } from "./styles";


export default function BodyApp() {
  return(
     <Wrapper>
      <CardLocalizacao>
        <OrganizadorCardLocalizacao>
        <TextoBold>Ative a localização</TextoBold>
        <Texto>Para utilizar as funcionalidades do Homefreelas, é necessário que a localização do seu dispositivo esteja ativada</Texto>
        </OrganizadorCardLocalizacao>
        <IconeLocal/>
     </CardLocalizacao>
     <Card>
     </Card>
     <Card>
     </Card>
     </Wrapper>
  )
}