
import styled from "styled-components"
import { HeaderCadastro } from "../../components/signin/Header/Header"
import { BodyCadastro } from "../../components/signup/Body/Body"
import { Footer } from "../../components/Footer"


export default function SignUp() {

  const Wrapper = styled.div `
  display: flex;
  flex-direction: column;
  `

  return (
    <Wrapper>
      <HeaderCadastro path="/"/>
      <BodyCadastro/>
      <Footer/>
    </Wrapper>
  )
}