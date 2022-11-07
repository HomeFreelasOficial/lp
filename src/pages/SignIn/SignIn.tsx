import styled from "styled-components"
import { Body } from "../../components/signin/Body/Body"
import { Footer } from "../../components/signin/Footer/Footer"
import { HeaderCadastro } from "../../components/signin/Header/Header"

export default function SignIn() {

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


