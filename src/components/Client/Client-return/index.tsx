import { Footer } from "../../signin/Footer/Footer";
import Header from "../../Header";
import { Wrapper } from "../client-call-service/styles";
import * as S from "./styles";

import { TextoBold } from "../client-home/Body/styles";
import { BodyOrganizer } from "../client-service-accepted/styles";


export default function Payment(){
  return(
    <Wrapper>
      <Header url="/cliente/inicio" visible={false}/>
      <BodyOrganizer>
        <S.Card>
            <TextoBold>Pagamento realizado.</TextoBold>
            <TextoBold>Obrigado por utilizar HomeFreelas!</TextoBold>
            <S.BtnExit to='/'>Voltar a tela inicial</S.BtnExit>
        </S.Card>
      </BodyOrganizer>
      <Footer/>
    </Wrapper>
  )
}