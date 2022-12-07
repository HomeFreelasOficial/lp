<<<<<<< HEAD
import * as S from './styled';
import Section from "../../Section";


export default function Main() {
  return(
    <Section>
      <S.Container>
        <S.WrapperCard>
          <S.TitleWrapperCard>Selecione o método de pagamento</S.TitleWrapperCard>
          
        </S.WrapperCard>
      </S.Container>
    </Section>
  );
=======
import { Footer } from "../../signin/Footer/Footer";
import Header from "../../Header";
import { Wrapper } from "../client-call-service/styles";
import * as S from "./styles";

import Selector from "./selector/selector";
import { TextoBold } from "../client-home/Body/styles";
import { BodyOrganizer } from "../client-service-accepted/styles";


export default function Payment(){
  return(
    <Wrapper>
      <Header url="/cliente/inicio" visible={false}/>
      <BodyOrganizer>
        <S.Card>
            <TextoBold>Selecione o método de pagamento</TextoBold>
            <Selector/>
            <S.ConfirmButton to='/cliente/servico-aceito/retornar'>Confirmar</S.ConfirmButton>
        </S.Card>
      </BodyOrganizer>
      <Footer/>
    </Wrapper>
  )
>>>>>>> 3ebf80ae6afc4d007fa35784a265cbc513fcbbfb
}