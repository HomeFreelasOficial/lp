import {
  Header,
  Wrapper,
  ItemLogo,
} from "./styles"

interface IHeader {
  path?: string
}

export function HeaderCadastro(props: IHeader){
  return (
    <Header>
      <Wrapper>
      <ItemLogo href={props.path}></ItemLogo>  
    </Wrapper>
    </Header>
  )
}
