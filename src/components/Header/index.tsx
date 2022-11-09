import {
  Header,
  Wrapper,
  ItemLogo,
  MenuBurguer,
  Logo,
  ImgBurguer
} from "./styles"

export function HeaderApp(props: {
  functionSideBar?: React.MouseEventHandler<HTMLButtonElement>
}){
  return (
    <Header>
      <Wrapper>
        <ItemLogo href="/cliente/inicio"><Logo/></ItemLogo>  
        <MenuBurguer onClick={props.functionSideBar}><ImgBurguer/></MenuBurguer>
      </Wrapper>
    </Header>
    
  )
}