import { HeaderCadastro } from "../../signin/Header/Header";
import { Footer } from "../../signup/Footer/Footer";
import { BodyOrganizer, Wrapper } from "../client-call-service/styles";
import { TextoBold } from "../client-home/Body/styles";
import CardFreela from "./CardFreela/CardFreela";
import { ButtonConfirmService, Card } from "./styles";

export default function ClientServiceAccepted(){


  return(
    <Wrapper>
         <HeaderCadastro/>
         <BodyOrganizer>
           <Card>
            <TextoBold>Pedido aceito!</TextoBold>
            <CardFreela imgURL="../src/assets/img/AlceuDispor.svg" name="Alceu Dispor" price="50R$ por hora"/>
            <TextoBold>Está a caminho</TextoBold>
           </Card>
          <ButtonConfirmService href="/cliente/servico-aceito/pagamento">Confirmar conclusão do serviço</ButtonConfirmService>
         </BodyOrganizer>
         <Footer/>
    </Wrapper>
   
  )
}