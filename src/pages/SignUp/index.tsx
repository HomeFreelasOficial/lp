
import styled from "styled-components"
import { BodyCadastro } from "../../components/BodyCadastro/BodyCadastro"
import { Footer } from "../../components/Footer/Footer"
import { HeaderCadastro } from "../../components/HeaderCadastro/HeaderCadastro"

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