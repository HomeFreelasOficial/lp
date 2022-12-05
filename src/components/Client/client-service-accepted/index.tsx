import { HeaderCadastro } from "../../signin/Header/Header";
import { Footer } from "../../Footer";
import { Wrapper } from "../client-call-service/styles";
import CardFirst from "./Cards/CardFirst";


import { BodyOrganizer } from "./Cards/styles";
import CardSecond from "./Cards/CardSecond";

export default function ClientServiceAccepted(){




  return(
    <Wrapper>
         <HeaderCadastro path='/cliente/inicio'/>
         <BodyOrganizer>
           { false ?
           <CardFirst/>:
           <CardSecond/>
          }
         </BodyOrganizer>
         <Footer/>
    </Wrapper>
   
  )
}