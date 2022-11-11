import { Footer } from "../../signin/Footer/Footer";
import { HeaderCadastro } from "../../signin/Header/Header";
import { BodyOrganizer, Wrapper } from "../client-call-service/styles";




export default function Payment(){

  return(
    <>
    <Wrapper>
      <HeaderCadastro path='/cliente/inicio'/>
      <BodyOrganizer>
        
      </BodyOrganizer>
      <Footer/>
    </Wrapper>
    </>
  )
}