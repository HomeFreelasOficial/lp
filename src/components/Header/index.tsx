import { useState } from "react";

import { 
  ImageLogo, 
  ConfigHeader,
  ButtonNavBar,
  ImagePersonSign,
  DivButtons,
  ButtonSign,
  DivLogoButton,
  DivNavBar,
  Item,
  NavBar,
  
} from "./styles";

export function Header() {
  const [active, setActive] = useState<boolean>(false); 

  return(
    <>
    <ConfigHeader>
      <DivLogoButton>
        <ImageLogo src='./src/img/HeaderImages/letrassemfundo-2.svg' alt='Logo HomeFreelas' />
        <ButtonNavBar src='./src/img/HeaderImages/arrow-down.svg' alt='Botão para barra de navegação' onClick={ () => setActive(!active) } />
          <NavBar>        
              <ul>
                <Item>Empresa</Item>
                <Item>Sobre nós</Item>
                <Item>Suporte</Item>
              </ul>            
          </NavBar>
      </DivLogoButton>
      <DivButtons>
        <ImagePersonSign src='./src/img/HeaderImages/person.svg' alt='Icone pessoa botões de cadastrar'/>
        <ButtonSign>Fazer login</ButtonSign>
        <ButtonSign signUp >Cadastre-se</ButtonSign>
      </DivButtons>
    </ConfigHeader>
      
      {active ? 
        <DivNavBar>
          <nav>
            <ul>
              <Item>Empresa</Item>
              <Item>Sobre nós</Item>
              <Item>Suporte</Item>
            </ul>
          </nav>
        </DivNavBar>
      : <></>}
  
    </>
  );
}