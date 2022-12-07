import { Footer } from "../../signin/Footer/Footer";
import Header from "../../Header";
import { Wrapper } from "../client-call-service/styles";
import * as S from "./styles";

import Selector from "./selector/Selector";
import { TextBold } from "../client-home/styled";
import { BodyOrganizer }  from "../client-call-service/styles";


export default function Payment(){
  return(
    <Wrapper>
      <Header url="/cliente/inicio" visible={false}/>
      <BodyOrganizer>
        <S.Card>
            <TextBold>Selecione o método de pagamento</TextBold>
            <Selector/>
            <S.ConfirmButton to='/cliente/servico-aceito/retornar'>Confirmar</S.ConfirmButton>
        </S.Card>
      </BodyOrganizer>
      <Footer/>
    </Wrapper>
  )
}