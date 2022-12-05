import { HeaderCadastro } from "../../signin/Header/Header";
import { Footer } from "../../Footer";
import { Wrapper } from "../client-call-service/styles";
import CardFirst from "./Cards/CardFirst";


import { useNavigate } from "react-router-dom";
import * as S from './Cards/styles';
import { useState } from "react";
import CardSecond from "./Cards/cardSecond";

export default function ClientServiceAccepted(){

  const [Card, setCard] = useState(false);

  return(
    <Wrapper>
         <HeaderCadastro path='/cliente/inicio'/>
         <S.BodyOrganizer>
           { false ?
           <CardFirst/>:
           <CardSecond/>
          }
         </S.BodyOrganizer>
         <Footer/>
    </Wrapper>
   
  )
}