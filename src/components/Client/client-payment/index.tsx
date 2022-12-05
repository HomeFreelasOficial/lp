import { Footer } from "../../signin/Footer/Footer";
import { HeaderCadastro } from "../../signin/Header/Header";
import { Wrapper } from "../client-call-service/styles";
import { Card } from '../client-service-accepted/styles';
import {BodyOrganizer} from "../client-service-accepted/styles"
import { TextoBold } from "../client-home/Body/styles";
import * as S from './style';



export default function Payment(){

  return(
    <>
    <Wrapper>
      <HeaderCadastro path='/cliente/inicio'/>
      <BodyOrganizer>
        <Card>
          <TextoBold>
          Confirme a finalização do serviço.
          </TextoBold>
          <S.Button>Ir para o pagamento</S.Button>
        </Card>
      </BodyOrganizer>
      <Footer/>
    </Wrapper>
    </>
  )
}