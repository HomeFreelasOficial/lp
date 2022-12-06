import { Footer } from "../../Footer";
import { BodyOrganizer, Wrapper } from "../client-call-service/styles";
import { TextoBold } from "../client-home/Body/styles";
import CardFreela from "./CardFreela/CardFreela";
import * as S from "./styles";
import Header from "../../Header";
import SideBar from "../../SideBar";
import { useContext, useState } from 'react'
import { JobContext } from "../../../context/job";
import axios from "axios";

export default function ClientServiceAccepted(){

  const [sideBar, setSideBar] = useState(false)
  const { professional, job } = useContext(JobContext)

  function sideOpenClose() {
    setSideBar(old => !old)
  }

  const cancelRequest = () => {axios.post(`http://localhost:1234/jobs/${job.id}/cancel`)
  }
  

  return(
    <S.Wrapper>
          <Header visible={true} url="/cliente/inicio" functionSideBar={sideOpenClose}/>
         {sideBar === true ? 
          <SideBar openOrClose={sideBar}/> 
          : 
          <SideBar openOrClose={sideBar}/>
          }
         <BodyOrganizer>
           <S.Card>
            <TextoBold>Pedido aceito!</TextoBold>
            <CardFreela 
              imgURL={professional.picture} 
              name={professional.name}
              price={professional.perHour}
              hours={job.MINIMUM_HOURS}
              />
            <TextoBold>Está a caminho</TextoBold>
           </S.Card>
          <S.ButtonCancelService onClick={cancelRequest}>Rejeitar Profissional</S.ButtonCancelService>
          <S.ButtonConfirmService>Confirmar conclusão do serviço</S.ButtonConfirmService>
         </BodyOrganizer>
         <Footer/>
    </S.Wrapper>
   
  )
}