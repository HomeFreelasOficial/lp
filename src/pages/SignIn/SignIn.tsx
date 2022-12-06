import styled from "styled-components"
import { Body } from "../../components/signin/Body/Body"
import { Footer } from "../../components/Footer"
import { HeaderCadastro } from "../../components/signin/Header/Header"
import { UserContextWrapper } from "../../context/user"


export default function SignIn() {

  const Wrapper = styled.div `
  display: flex;
  flex-direction: column;
  `

  return (
    <UserContextWrapper>
      <Wrapper>
        <HeaderCadastro path="/"/>
        <Body/>
        <Footer/>
      </Wrapper>
    </UserContextWrapper>
  )
}


