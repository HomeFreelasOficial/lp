import { Footer } from "../../Footer";
import { BodyOrganizer, Wrapper } from "../client-call-service/styles";
import { TextBold } from "../client-home/styled";
import { ButtonPay } from "./styled";
import { Card } from "../client-service-accepted/styles";
import Header from "../../Header";

export default function ClientServiceAccepted(){

  return(
    <Wrapper>
        <Header url="/cliente/inicio" visible={false} />
        <BodyOrganizer>
            <Card>
              <TextBold>
              Confirme a finalização do serviço.
              </TextBold>
              <ButtonPay to="/cliente/servico-aceito/pagamento">Ir para o pagamento</ButtonPay>
            </Card>
          </BodyOrganizer>
         <Footer/>
    </Wrapper>
   
  )
}