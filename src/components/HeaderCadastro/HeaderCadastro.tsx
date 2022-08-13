import styled, { StyledComponent } from 'styled-components'
import { Colors } from '../../pages/SignUp/global';
import { DarkModeButton } from './DarkModeButton/DarkModeButton';


export function HeaderCadastro(){
  
  const Wrapper = styled.div `
  display: flex;
  align-items: center;
  gap: 9px;
  margin-left: 9px;
  justify-content: center;

  @media screen and (min-width: 1024px) {
    gap: 20px;
  }
  `;

  const Header = styled.header `
  background-color: ${Colors.HEADER_BLACK};
  display: fixed;
  height: 56px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  
  @media screen and (min-width: 1024px) {
    height: 80px;
  }

  `

  const Item = styled.a `
  color: white;
  font-size: 12px;

  @media screen and (min-width: 1024px) {
    font-size: 18px;
  }
  @media screen and (min-height: 1024px) {
    font-size: 15px;
  }

  `
  const ItemLogo = styled.a `
  margin-left: 14px;
  margin-right: 15px;
  background-image: url(./src/assets/img/letrassemfundo2.svg);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 48px;
  height: 48px;

  
  `
  

  return (
    <Header>
      <Wrapper>
      <ItemLogo></ItemLogo>  
     <Item>Empresa</Item>
     <Item>Sobre nós</Item>
     <Item>Suporte</Item>
    </Wrapper>
    <DarkModeButton/>
    </Header>
    
  )
}