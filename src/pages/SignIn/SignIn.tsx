import * as S from './styled'
import { Formulario } from "../../components/signin/Form/Form"
import { Footer } from "../../components/Footer"
import { HeaderCadastro } from "../../components/signin/Header/Header"

export default function SignIn() {
  return (
    <>
      <S.Wrapper>
        <HeaderCadastro path="/"/>
        <Formulario />
        <Footer/>
      </S.Wrapper>
    </>
  )
}


