import * as S from "./styles"

export default function Header(props: {
  functionSideBar?: React.MouseEventHandler<HTMLButtonElement>
  url?: string
}){
  return (
    <S.Container>
      <S.Wrapper>
        <S.ItemLogo href={props.url}><S.Logo/></S.ItemLogo>  
        <S.MenuBurguer onClick={props.functionSideBar}><S.ImgBurguer/></S.MenuBurguer>
      </S.Wrapper>
    </S.Container>
    
  )
}