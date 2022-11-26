import { useState } from "react";
import { TextoBold } from "../client-home/Body/styles";
import { HeaderCadastro } from "../../signin/Header/Header";
import { Footer } from "../../Footer";
import BotaoServicos from "./Botao";
import { ButtonConfirm } from "./Botao/BotaoConfirma";
import { BodyOrganizer, Wrapper, CardBotao, Card, DescriptionForm, InputTitle, Description } from "./styles";
import axios from "axios";
import { redirect } from "react-router-dom";



export default function ClientCallService() {

   const [isActiveEncanamento, setIsActiveEncanamento] = useState(false)
   const [isActiveEletrica, setIsActiveEletrica] = useState(false)
   const [isActiveReparos, setIsActiveReparos] = useState(false)

   const [typeOfService, setTypeOfService] = useState("")

   const [info, setInfo] = useState({
    title: "",
    description: ""
   })

   function sendData(){
    axios.post('https://api.homefreelas.com.br/jobs', {
      title: info.title,
      description: info.description,
      clientId: 1,
      type: typeOfService,
      
    })
    .then(function (response) {
      console.log(response)
      
      if (response.status == 200) {
        return redirect("/cliente/aguardando-freelancer")
      }
    })
    .catch(function (error) {
      console.error(error);
    });
  }

  

  return (
    <Wrapper>
    <HeaderCadastro path='/cliente/inicio'/>
    <BodyOrganizer>
    <CardBotao>
    <TextoBold>Qual é o problema?</TextoBold>
    <BotaoServicos ativo={isActiveEncanamento} funcao={() => {
      setIsActiveEncanamento(!isActiveEncanamento)
      setIsActiveReparos(false)
      setIsActiveEletrica(false)
      setTypeOfService("plumbing")
    }} cor="#116AD2" texto="Encanamento" />
    <BotaoServicos ativo={isActiveEletrica} funcao={() => {
      setIsActiveEletrica(!isActiveEletrica)
      setIsActiveEncanamento(false)
      setIsActiveReparos(false)
      setTypeOfService("electric")
    }}
     cor="#F8B137" texto="Elétrica" />
    <BotaoServicos ativo={isActiveReparos} cor="#FF3A5E" funcao={() => {
      setIsActiveReparos(!isActiveReparos)
      setIsActiveEletrica(false)
      setIsActiveEncanamento(false)
      setTypeOfService("technical_repairs")
    }} texto="Reparos técnicos" />
    </CardBotao>
    <Card>
      <DescriptionForm>
      <InputTitle placeholder="Insira aqui o título do trabalho" value={info.title} onChange={(e) => { setInfo({...info, title: e.target.value})}}/>
      <Description placeholder="Descreva o problema detalhadamente aqui!" value={info.description} onChange={(e) => { setInfo({...info, description: e.target.value})}}>
      </Description>
      <ButtonConfirm text="Chamar Freela" clicado={false} componentColor="black" componentWidth="20em" onClick={() => sendData()}/>
      </DescriptionForm>
    </Card>
    </BodyOrganizer>
    <Footer/>
    </Wrapper>
  )
}