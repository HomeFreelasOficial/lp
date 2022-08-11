import { 
  ImageLogo, 
  ConfigHeader,
  ButtonNavBar,
  ImagePersonSign,
  DivButtons,
  ButtonSign,
  DivLogoButton,
} from "./styles";

export function Header() {
  return(
    <ConfigHeader>
      <DivLogoButton>
        <ImageLogo src='./src/img/HeaderImages/letrassemfundo-2.png' alt='Logo HomeFreelas' />
        <ButtonNavBar src='./src/img/HeaderImages/arrow-down.png' alt='Botão para barra de navegação' />
      </DivLogoButton>
      <DivButtons>
        <ImagePersonSign src='./src/img/HeaderImages/Person-buttons.png' alt='Icone pessoa botões de cadastrar'/>
        <ButtonSign>Fazer login</ButtonSign>
        <ButtonSign signUp >Cadastre-se</ButtonSign>
      </DivButtons>

    </ConfigHeader>
  );
}