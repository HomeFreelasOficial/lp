import { Footer } from "../../Footer";
import { BodyOrganizer, Wrapper } from "../client-call-service/styles";
import { TextoBold } from "../client-home/Body/styles";
import CardFreela from "./CardFreela/CardFreela";
import { ButtonConfirmService, Card } from "./styles";
import Header from "../../Header";
import SideBar from "../../SideBar";
import { useState } from 'react'

export default function ClientServiceAccepted(){

  const [sideBar, setSideBar] = useState(false)

  function sideOpenClose() {
    setSideBar(old => !old)
  }
  

  return(
    <Wrapper>
          <Header visible={true} url="/cliente/inicio" functionSideBar={sideOpenClose}/>
         {sideBar === true ? 
          <SideBar openOrClose={sideBar}/> 
          : 
          <SideBar openOrClose={sideBar}/>
          }
         <BodyOrganizer>
           <Card>
            <TextoBold>Pedido aceito!</TextoBold>
            <CardFreela imgURL="../src/assets/img/AlceuDispor.svg" name="Alceu Dispor" price="50R$ por hora"/>
            <TextoBold>Está a caminho</TextoBold>
           </Card>
          <ButtonConfirmService>Confirmar conclusão do serviço</ButtonConfirmService>
         </BodyOrganizer>
         <Footer/>
    </Wrapper>
   
  )
}