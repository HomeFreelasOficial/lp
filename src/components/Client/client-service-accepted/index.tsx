import { Footer } from "../../Footer";
import { BodyOrganizer, Wrapper } from "../client-call-service/styles";
import { TextBold } from "../client-home/styled";
import CardFreela from "./CardFreela/CardFreela";
import * as S from "./styles";
import Header from "../../Header";
import SideBar from "../../SideBar";
import { useContext, useState } from 'react'
import { JobContext } from "../../../context/job";
import axios from "axios";

export default function ClientServiceAccepted(){

  const { professional, job } = useContext(JobContext)

  return(
    <S.Wrapper>
          <Header visible={false} url="/cliente/inicio"/>

         <BodyOrganizer>
           <S.Card>
            <TextBold>Pedido aceito!</TextBold>
            <CardFreela 
              imgURL={professional.picture} 
              name={professional.name}
              price={professional.perHour}
              hours={job.MINIMUM_HOURS}
              />
            <TextBold>Está a caminho</TextBold>
           </S.Card>
          <S.ButtonConfirmService to="/cliente/servico-aceito/pagamento">Confirmar conclusão do serviço</S.ButtonConfirmService>
         </BodyOrganizer>
         <Footer/>
    </S.Wrapper>
   
  )
}