import styled from "styled-components";

export function Footer() {

 
  const Lista = styled.div `
  display: flex;
  flex-direction: column;
  align-items: space-between;
  gap: 1em;
 
  @media screen and (min-width: 768px){
   gap: 3.5em;
 }
  `
 
  const ItensLista = styled.div `
  display: flex;
  flex-direction: column;
  gap: 0.1em;
 
  @media screen and (min-width: 768px){
   gap: 0.3em;
 }
  `
 
  const ItemLista = styled.a `
  font-size: 0.75em;
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
 
  @media screen and (min-width: 768px){
   font-size: 1em;
 };
 
  `
 
  const TituloLista = styled.h3 `
  font-size: 0.8em;
  font-weight: 700;
  color: white;
 
  @media screen and (min-width: 768px){
   font-size: 20px;
 };
 
  `
 
  const Texto = styled.p `
  font-size: 0.7em;
  color: white;
 
  @media screen and (min-width: 768px){
   font-size: 1em;
 }
  `
 
  const DivBaixo = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  `
  
  const DivCima = styled.div `
  display: flex;
  justify-content: space-around;
  margin-right: auto;
  gap: 2em;
 
  @media screen and (min-width: 768px){
    gap: 75px;
 }
  `
  const Footer = styled.footer `
  display: flex;
  height: 20vh;
  flex-direction:  column;
  justify-content: center;
  background-color: #222628;
  gap: 1.5em;
  padding: 1em;
 
  @media screen and (min-width: 768px){
   padding: 2em;
  }
 
  @media screen and (min-height: 768px){
   gap: 2.5em;
  }
 
  @media screen and (min-width: 1366px){
   padding: 3em;
  }
  `
 
 
  const LogoAndroid = styled.img `
  content: url(./src/assets/img/whiteAndroid6.svg);
  margin-left: 1px;
  width: 10px;
 
  @media screen and (min-width: 768px){
   width: 23px;
   margin-left: 8px;
 }
  `
 
  return (
   <Footer>
     <DivCima>
       <Lista>
         <TituloLista>HomeFreelas</TituloLista>
         <ItensLista>
           <ItemLista>Segurança</ItemLista>
           <ItemLista>Diferenciais</ItemLista>
           <ItemLista>Privacidade e termos</ItemLista>
         </ItensLista>
       </Lista>
       <Lista>
         <TituloLista>Empresa</TituloLista>
         <ItensLista>
           <ItemLista>Sobre nós</ItemLista>
           <ItemLista>Fale conosco</ItemLista>
           <ItemLista>Acesse o suporte</ItemLista>
         </ItensLista>
       </Lista>
       <Lista>
         <TituloLista>Download</TituloLista>
         <ItensLista>
           <ItemLista>Android<LogoAndroid/></ItemLista>
         </ItensLista>
       </Lista>
     </DivCima>
     <DivBaixo>
       <Texto>2020 &copy; HomeFreelas</Texto>
       <Texto>Privacidade e termos</Texto>
     </DivBaixo>
   </Footer>
  )
 
}