import { Footer } from "../../signin/Footer/Footer";
import Header from "../../Header";
import { Wrapper } from "../client-call-service/styles";
import * as S from "./styles";

import { TextBold } from "../client-home/styled";
import { BodyOrganizer } from "../client-call-service/styles";


export default function Payment(){
  return(
    <Wrapper>
      <Header url="/cliente/inicio" visible={false}/>
      <BodyOrganizer>
        <S.Card>
            <TextBold>Pagamento realizado.</TextBold>
            <TextBold>Obrigado por utilizar HomeFreelas!</TextBold>
            <S.BtnExit to='/'>Voltar a tela inicial</S.BtnExit>
        </S.Card>
      </BodyOrganizer>
      <Footer/>
    </Wrapper>
  )
}