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
  url: string
}){
  return (
    <Header>
      <Wrapper>
        <ItemLogo href={props.url}><Logo/></ItemLogo>  
        <MenuBurguer onClick={props.functionSideBar}><ImgBurguer/></MenuBurguer>
      </Wrapper>
    </Header>
    
  )
}