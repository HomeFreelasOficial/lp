import { useState } from "react";
import styled from "styled-components";
import { TextoBold } from "../client-home/Body/styles";
import { HeaderCadastro } from "../signin/Header/Header";
import { Footer } from "../signup/Footer/Footer";
import BotaoServicos from "./Botao";
import { BodyOrganizer, Wrapper, CardBotao, Card, DescriptionForm, InputTitle, Description } from "./styles";



export default function ClientCallService() {

   const [isActiveEncanamento, setIsActiveEncanamento] = useState(false)
   const [isActiveEletrica, setIsActiveEletrica] = useState(false)
   const [isActiveReparos, setIsActiveReparos] = useState(false)

   const [info, setInfo] = useState({
     title: "",
     description: ""
   })

  

  return (
    <Wrapper>
    <HeaderCadastro/>
    <BodyOrganizer>
    <CardBotao>
    <TextoBold>Qual é o problema?</TextoBold>
    <BotaoServicos ativo={isActiveEncanamento} funcao={() => {
      setIsActiveEncanamento(!isActiveEncanamento)
      setIsActiveReparos(false)
      setIsActiveEletrica(false)
    }} cor="#116AD2" texto="Encanamento" />
    <BotaoServicos ativo={isActiveEletrica} funcao={() => {
      setIsActiveEletrica(!isActiveEletrica)
      setIsActiveEncanamento(false)
      setIsActiveReparos(false)
    }}
     cor="#F8B137" texto="Elétrica" />
    <BotaoServicos ativo={isActiveReparos} cor="#FF3A5E" funcao={() => {
      setIsActiveReparos(!isActiveReparos)
      setIsActiveEletrica(false)
      setIsActiveEncanamento(false)
    }} texto="Reparos técnicos" />
    </CardBotao>
    <Card>
      <DescriptionForm>
        <InputTitle type="text" placeholder="Descreva o problema brevemente" value={info.title} onChange={(e) => { setInfo({...info, title: e.target.value})  }}/>
      <Description placeholder="Descreva o problema detalhadamente aqui!">
      </Description>
      </DescriptionForm>
    </Card>
    </BodyOrganizer>
    <Footer/>
    </Wrapper>
  )
}