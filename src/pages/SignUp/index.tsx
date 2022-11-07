
import styled from "styled-components"
import { BodyCadastro } from "../../components/signup/Body/Body"
import { Footer } from "../../components/signup/Footer/Footer"
import { HeaderCadastro } from "../../components/signup/Header/Header"


export default function SignUp() {

  const Wrapper = styled.div `
  display: flex;
  flex-direction: column;
  `

  return (
    <Wrapper>
      <HeaderCadastro/>
      <BodyCadastro/>
      <Footer/>
    </Wrapper>
  )
}