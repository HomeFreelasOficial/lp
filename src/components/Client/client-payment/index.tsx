import { Footer } from "../../signin/Footer/Footer";
import { HeaderCadastro } from "../../signin/Header/Header";
import { Wrapper } from "../client-call-service/styles";

import * as S from './styles';



export default function Payment(){
  return(
    <>
    <Wrapper>
      <HeaderCadastro path='/cliente/inicio'/>
      <Footer/>
    </Wrapper>
    </>
  )
}