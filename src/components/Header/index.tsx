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
} from "./styles";

export function Header() {
  const [active, setActive] = useState<boolean>(false); 

  return(
    <>
    <ConfigHeader>
      <DivLogoButton>
        <ImageLogo src='./src/img/HeaderImages/letrassemfundo-2.png' alt='Logo HomeFreelas' />
        <ButtonNavBar src='./src/img/HeaderImages/arrow-down.png' alt='Botão para barra de navegação' onClick={ () => setActive(!active) } />
      </DivLogoButton>
      <DivButtons>
        <ImagePersonSign src='./src/img/HeaderImages/Person-buttons.png' alt='Icone pessoa botões de cadastrar'/>
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