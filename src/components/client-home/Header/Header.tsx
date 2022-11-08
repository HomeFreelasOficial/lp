import {
  Header,
  Wrapper,
  ItemLogo,
  MenuBurguer,
  Logo,
  ImgBurguer
} from "./styles"

export function HeaderApp(props: {
  funcao?: React.MouseEventHandler<HTMLButtonElement>
}){
  return (
    <Header>
      <Wrapper>
      <ItemLogo href="/cliente/inicio"><Logo/></ItemLogo>  
      <MenuBurguer onClick={props.funcao}><ImgBurguer/></MenuBurguer>
    </Wrapper>
    </Header>
    
  )
}