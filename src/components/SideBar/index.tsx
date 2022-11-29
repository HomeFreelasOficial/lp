import * as S from "./styles";

export default function SideBar(props: ({
  openOrClose: boolean;
})){
  
  return(
    <>
    <S.Navigation openOrCloseSide={props.openOrClose}>
      <S.Wrapper>
         <S.Text href="/perfil">
          Editar Perfil
         </S.Text>
         <S.Text href="/">
          Log out
         </S.Text>
      </S.Wrapper>
    </S.Navigation>
    </>
  )
}