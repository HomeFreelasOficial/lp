import { useState, useContext } from "react";
import { Texto, TextoBold } from "../client-home/Body/styles";
import { HeaderCadastro } from "../../signin/Header/Header";
import { Footer } from "../../Footer";
import BotaoServicos from "./Botao";
import { ButtonConfirm } from "./Botao/BotaoConfirma";
import { BodyOrganizer, Wrapper, CardBotao, Card, DescriptionForm, InputTitle, Description } from "./styles";
import axios from "axios";
import { redirect } from "react-router-dom";
import getGeolocationByAddress from "../../../gateways/geolocationGateway";
import { User, UserContext } from "../../../context/user";


export default function ClientCallService() {

   const [isActiveEncanamento, setIsActiveEncanamento] = useState(false)
   const [isActiveEletrica, setIsActiveEletrica] = useState(false)
   const [isActiveReparos, setIsActiveReparos] = useState(false)

   const [typeOfService, setTypeOfService] = useState("")

   const [info, setInfo] = useState({
    title: "",
    description: "",
    address: "",
    number: ""
   })

   const { user } = useContext(UserContext)

   console.log(user)

   function sendData(e : React.MouseEvent<HTMLButtonElement, MouseEvent>){

    e.preventDefault()
    
    let geolocation = getGeolocationByAddress(info.address, +info.number)

    axios.post('https://api.homefreelas.com.br/jobs', {
      title: info.title,
      description: info.description,
      clientId: user.id,
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
         <TextoBold>Informações adicionais:</TextoBold>
      
      <Texto>Título do trabalho</Texto>
      <InputTitle placeholder="Ex. Minha torneira quebrou!" value={info.title} onChange={(e) => { setInfo({...info, title: e.target.value})}}/>
      <Texto>Dê uma descrição mais detalhada do problema</Texto>
      <Description placeholder="Ex. Estava lavando a louça quando a torneira parou de funcionar..." value={info.description} onChange={(e) => { setInfo({...info, description: e.target.value})}}>
      </Description>
      <TextoBold>Endereço:</TextoBold>
      <Texto>Nome da rua</Texto>
      <InputTitle placeholder="Ex. Rua Virgínia Ferni" value={info.address} onChange={(e) => {setInfo({...info, address: e.target.value})}}/>

      <Texto>Número</Texto>
      <InputTitle placeholder="Ex. 256" value={info.number} onChange={(e) => {setInfo({...info, number: e.target.value})}}/>

      <ButtonConfirm type='submit' text="Chamar Freela" clicado={false} componentColor="black" componentWidth="20em" onClick={(e) => sendData(e)}/>
      </DescriptionForm>
    </Card>
    </BodyOrganizer>
    <Footer/>
    </Wrapper>
  )
}