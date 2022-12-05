import { Footer } from "../../signin/Footer/Footer";
import { HeaderCadastro } from "../../signin/Header/Header";
import { Wrapper } from "../client-call-service/styles";

import { BodyOrganizer } from "../client-service-accepted/Cards/styles";
import Return from "./Cards/Return";
import Pay from "./Cards/Pay";


export default function Payment(){
  return(
    <Wrapper>
      <HeaderCadastro path='/cliente/inicio'/>
      <BodyOrganizer>
        { false?
        <Return/>:
        <Pay />
        }
      </BodyOrganizer>
      <Footer/>
    </Wrapper>
  )
}