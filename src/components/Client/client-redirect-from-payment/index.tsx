import { Footer } from "../../Footer";
import { Wrapper } from "../client-call-service/styles";
import { TextoBold } from "../client-home/Body/styles";

import { ButtonPay } from "./styled";
import {BodyOrganizer, Card} from "../client-service-accepted/styles";
import Header from "../../Header";

export default function ClientServiceAccepted(){

  return(
    <Wrapper>
        <Header url="/cliente/inicio" visible={false} />
        <BodyOrganizer>
            <Card>
              <TextoBold>
              Confirme a finalização do serviço.
              </TextoBold>
              
              <ButtonPay to="/cliente/servico-aceito/pagamento">Ir para o pagamento</ButtonPay>
            </Card>
          </BodyOrganizer>
         <Footer/>
    </Wrapper>
   
  )
}