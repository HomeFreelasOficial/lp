import * as S from "./styles";


export default function SideBar(props: ({
  openOrClose: boolean;
  type: 'client' | 'professional'
})){
  
  return(
    <>
    <S.Navigation openOrCloseSide={props.openOrClose}>
      <S.Wrapper>
         <S.Text to={props.type === 'client'? "/cliente/perfil" : "/profissional/perfil"}>
          Editar Perfil
         </S.Text>
         <S.Text to="/">
          Log out
         </S.Text>
      </S.Wrapper>
    </S.Navigation>
    </>
  )
}