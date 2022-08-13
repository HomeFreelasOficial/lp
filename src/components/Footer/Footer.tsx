import styled from "styled-components";

export function Footer() {

  const Lista = styled.div `
  display: flex;
  flex-direction: column;
  align-items: space-between;
  gap: 10px;
  
  @media screen and (min-width: 1024px){
   gap: 35px;
  }
  `
  
  const ItensLista = styled.div `
  display: flex;
  flex-direction: column;
  gap: 1px;
  
  @media screen and (min-width: 1024px){
   gap: 3px;
  }
  `
  
  const ItemLista = styled.a `
  font-size: 10px;
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  
  @media screen and (min-width: 1024px){
   font-size: 17px;
  };
  
  @media screen and (min-height: 800px){
   font-size: 17px;
  };
  
  @media screen and (min-height: 1024px){
   font-size: 20px;
  }
  `
  
  const Titulo = styled.h3 `
  font-size: 10px;
  font-weight: 700;
  color: white;
  
  @media screen and (min-width: 1024px){
   font-size: 20px;
  };
  
  @media screen and (min-height: 800px){
   font-size: 20px;
  };
  
  @media screen and (min-height: 1024px){
   font-size: 22px;
  };
  `
  
  const Texto = styled.p `
  font-size: 10px;
  color: white;
  
  @media screen and (min-width: 1024px){
   font-size: 15px;
  }
  
  @media screen and (min-height: 800px){
   font-size: 16px;
  }
  
  @media screen and (min-height: 1024px){
   font-size: 18px;
  }
  `
  
  const ListaBaixo = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  `
  
  const ListaCima = styled.div `
  display: flex;
  justify-content: space-around;
  margin-right: auto;
  gap: 2em;
  
  @media screen and (min-width: 1024px){
    gap: 75px;
  }
  `
  const Footer = styled.footer `
  width: auto;
  background-color: #222628;
  height: 101px;
  display: flex;
  flex-direction: column;
  align-items: space-around;
  justify-content: space-around;
  padding: 1.5em;
  
  @media screen and (min-height: 700px){
   height: 200px;
  }
  
  @media screen and (min-height: 800px){
   height: 350px;
  }
  
  @media screen and (min-height: 1024px){
   height: 550px;
  }
  
  @media screen and (min-width: 1024px){
    padding: 1.5em;
  }
  
  @media screen and (min-height: 1350px){
   height: 700px;
  }
  
  @media screen and (min-width: 1259px){
   padding-inline: 10em
  }
  `
  
  
  const LogoAndroid = styled.img `
  content: url(./src/assets/img/whiteAndroid6.svg);
  margin-left: 1px;
  width: 10px;
  `

 return (
  <Footer>
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
  </Footer>
 )

}