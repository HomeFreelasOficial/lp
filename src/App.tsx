import styled from "styled-components"
import { Body } from "./components/Body/Body"
import { Footer } from "./components/Footer/Footer"
import { HeaderCadastro } from "./components/Header/Header"

export default function App() {

  const Wrapper = styled.div `
  display: flex;
  flex-direction: column;
  `

  return (
    <Wrapper>
      <HeaderCadastro/>
      <Body/>
      <Footer/>
    </Wrapper>
  )
}


