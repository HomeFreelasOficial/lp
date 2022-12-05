import { HeaderCadastro } from "../../signin/Header/Header";
import { Footer } from "../../Footer";
import { Wrapper } from "../client-call-service/styles";
import { TextoBold } from "../client-home/Body/styles";
import CardFreela from "./CardFreela/CardFreela";
import { useNavigate } from "react-router-dom";
import * as S from './styles';

export default function ClientServiceAccepted(){

  function Erase(){
    let Confirm = document.getElementsByClassName('Confirm');
  }

  return(
    <Wrapper>
         <HeaderCadastro path='/cliente/inicio'/>
         <S.BodyOrganizer>
           <S.Card className="Confirm">
            <TextoBold >Pedido aceito!</TextoBold>
            <CardFreela imgURL="../src/assets/img/AlceuDispor.svg" name="Alceu Dispor" price="50R$ por hora"/>
            <TextoBold >Está a caminho</TextoBold>
           </S.Card>
          <S.ButtonConfirmService onClick={() => Erase()} className="Confirm"> Confirmar conclusão do serviço</S.ButtonConfirmService>
         </S.BodyOrganizer>
         <Footer/>
    </Wrapper>
   
  )
}