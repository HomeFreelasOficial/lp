import { DarkModeButton } from './DarkModeButton/DarkModeButton';
import {
  Header,
  Wrapper,
  ItemLogo,
  Item
} from "./styles"

export function HeaderCadastro(){
  
 

  return (
    <Header>
      <Wrapper>
      <ItemLogo></ItemLogo>  
     <Item>Sobre nós</Item>
     <Item>Suporte</Item>
    </Wrapper>
    <DarkModeButton/>
    </Header>
    
  )
}