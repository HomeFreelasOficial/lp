import { HeaderCadastro } from "../../signin/Header/Header";
import { Footer } from "../../Footer";
import { Wrapper } from "../client-call-service/styles";
import { TextoBold } from "../client-home/Body/styles";
import CardFreela from "./CardFreela/CardFreela";
import { ButtonConfirmService, Card, BodyOrganizer } from "./styles";

export default function ClientServiceAccepted(){
   
  return(
    <Wrapper>
         <HeaderCadastro path='/cliente/inicio'/>
         <BodyOrganizer>
           <Card>
            <TextoBold>Pedido aceito!</TextoBold>
            <CardFreela imgURL="../src/assets/img/AlceuDispor.svg" name="Alceu Dispor" price="50R$ por hora"/>
            <TextoBold>Está a caminho</TextoBold>
           </Card>
          <ButtonConfirmService>Confirmar conclusão do serviço</ButtonConfirmService>
         </BodyOrganizer>
         <Footer/>
    </Wrapper>
   
  )
}