import {
    FooterComponent,
    ListaCima,
    Lista,
    ItemLista,
    ItensLista,
    Titulo,
    LogoAndroid,
    ListaBaixo,
    Texto
  } from "./styles"
  
  
  export function Footer() {
  
  
  
   return (
    <FooterComponent>
      <ListaCima>
        <Lista>
          <Titulo>HomeFreelas</Titulo>
          <ItensLista>
            <ItemLista>Segurança</ItemLista>
            <ItemLista>Diferenciais</ItemLista>
            <ItemLista>Privacidade e termos</ItemLista>
          </ItensLista>
        </Lista>
        <Lista>
          <Titulo>Empresa</Titulo>
          <ItensLista>
            <ItemLista>Sobre nós</ItemLista>
            <ItemLista>Fale conosco</ItemLista>
            <ItemLista>Acesse o suporte</ItemLista>
          </ItensLista>
        </Lista>
        <Lista>
          <Titulo>Download</Titulo>
          <ItensLista>
            <ItemLista>Android<LogoAndroid/></ItemLista>
          </ItensLista>
        </Lista>
      </ListaCima>
      <ListaBaixo>
        <Texto>2020 &copy; HomeFreelas</Texto>
        <Texto>Privacidade e termos</Texto>
      </ListaBaixo>
    </FooterComponent>
   )
  
  }