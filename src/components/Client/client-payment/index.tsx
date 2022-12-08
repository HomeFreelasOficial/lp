import { Footer } from "../../signin/Footer/Footer";
import Header from "../../Header";
import { Wrapper } from "../client-call-service/styles";
import * as S from "./styles";
import Selector from "./selector/Selector";
import { TextBold } from "../client-home/styled";
import { BodyOrganizer } from "../client-call-service/styles";
import { useContext } from "react";
import { UserContext } from "../../../context/user";
import { JobContext } from "../../../context/job";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Payment(){

  const navigate = useNavigate()
  const { dataUser } = useContext(UserContext) 
  const { job } = useContext(JobContext)

  const pay = async () => {
     axios.post(`http://localhost:1234/jobs/${job.id}/pay`, 
      {
        headers : {
          Authorization: dataUser.token
        }
      }
    )
    .then(res => {
      console.log(res)
      navigate('/cliente/servico-aceito/retornar')      
    })
    .catch(err => {
      console.log(err)
    })
  }

  return(
    <Wrapper>
      <Header url="/cliente/inicio" visible={false}/>
      <BodyOrganizer>
        <S.Card>
            <TextBold>Selecione o método de pagamento</TextBold>
            <Selector/>
            <S.ConfirmButton onClick={pay}>Confirmar</S.ConfirmButton>
        </S.Card>
      </BodyOrganizer>
      <Footer/>
    </Wrapper>
  )
}