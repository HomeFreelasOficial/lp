import { Footer } from "../../signin/Footer/Footer";
import Header from "../../Header";
import { BodyOrganizer, Wrapper } from "../client-call-service/styles";




export default function Payment(){

  return(
    <>
    <Wrapper>
      <Header url='/cliente/inicio'/>
      <BodyOrganizer>
        
      </BodyOrganizer>
      <Footer/>
    </Wrapper>
    </>
  )
}