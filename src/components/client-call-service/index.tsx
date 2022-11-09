import styled from "styled-components";
import { TextoBold } from "../client-home/Body/styles";
import { HeaderCadastro } from "../signin/Header/Header";
import { Footer } from "../signup/Footer/Footer";
import BotaoServicos from "./Botao";
import { BodyOrganizer, Wrapper, CardBotao } from "./styles";



export default function ClientCallService() {


  return (
    <Wrapper>
    <HeaderCadastro/>
    <BodyOrganizer>
    <CardBotao>
    <TextoBold>Qual é o problema?</TextoBold>
    <BotaoServicos cor="#116AD2" texto="Encanamento" />
    <BotaoServicos cor="#FFD600" texto="Elétrica" />
    <BotaoServicos cor="#FF3A5E" texto="Reparos técnicos" />
    </CardBotao>
    </BodyOrganizer>
    <Footer/>
    </Wrapper>
  )
}