import { Footer } from "../../signin/Footer/Footer";
import { HeaderCadastro } from "../../signin/Header/Header";
import { BodyOrganizer, Wrapper } from "../client-call-service/styles";
import Header from "../../Header";
import SideBar from "../../SideBar";
import { useState } from "react";

export default function Payment(){

  const [sideBar, setSideBar] = useState(false)

  function sideOpenClose() {
    setSideBar(old => !old)
  }

  return(
    <>
    <Wrapper>
     <Header visible={true} url="/cliente/inicio" functionSideBar={sideOpenClose}/>
      {sideBar === true ? 
      <SideBar openOrClose={sideBar}/> 
      : 
      <SideBar openOrClose={sideBar}/>
     }
      <BodyOrganizer>
        
      </BodyOrganizer>
      <Footer/>
    </Wrapper>
    </>
  )
}