import { Footer } from "../../Footer";
import { Wrapper } from "../client-call-service/styles";
import { TextoBold } from "../client-home/Body/styles";
import CardFreela from "./CardFreela/CardFreela";

import * as S from "./styles";
import Header from "../../Header";

export default function ClientServiceAccepted(){


  return(
    <Wrapper>
        <Header url="/cliente/inicio" visible={false} />
         <S.BodyOrganizer>
          <S.Card >
              <TextoBold >Pedido aceito!</TextoBold>
              <CardFreela imgURL="../src/assets/img/AlceuDispor.svg" name="Alceu Dispor" price="50R$ por hora"/>
              <TextoBold >Está a caminho</TextoBold>
          </S.Card>
          <S.ButtonConfirmService to='/cliente/servico-aceito/redirect'> Confirmar conclusão do serviço</S.ButtonConfirmService>
          </S.BodyOrganizer>
         <Footer/>
    </Wrapper>
   
  )
}