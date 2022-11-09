import { Footer } from "../../components/Footer";
import { HeaderCadastro } from "../../components/signin/Header/Header";
import styled from "styled-components";

export default function SelectType(props: {
  componentColor?: string
}){

  const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding-inline: 10em;
  padding-top: 10em;
  padding-bottom: 12em;
  `

  const Card = styled.div`
  display: flex;
  width: 50em;
  height: 35em;  
  background: #F4F4F4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3px;
  
  `

  const Texto = styled.p`
    font-family: 'Poppins';
    font-weight: 700;
    font-size: 15px;
    line-height: 20px;
    padding-bottom: 2em;

   @media screen and (min-width: 768px){
    font-size: 20px
   }
   
  `

  const BotaoCliente = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12em;
  height: 2.5em;
  background-color: #8811D2;
  border-radius: 8px;
  color: white;
  font-family: 'Poppins';
  font-weight: 700;
  font-size: 13px;
  text-decoration: none;

  :hover {
    cursor: pointer;

    background-color: white;
    border: 2px solid #8811D2;
    color: #8811D2;
  }

  @media screen and (min-width: 768px){
    font-size: 18px;
    width: 16em;
    height: 3em;
   }
  `

const BotaoProfissional = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12em;
  height: 2.5em;
  background-color: #FF00C7;
  border-radius: 8px;
  color: white;
  font-family: 'Poppins';
  font-weight: 700;
  font-size: 13px;
  text-decoration: none;

  :hover {
    cursor: pointer;

    background-color: white;
    border: 2px solid #FF00C7;
    color: #FF00C7;
  }

  @media screen and (min-width: 768px){
    font-size: 18px;
    width: 16em;
    height: 3em;
   }
`

  
  return (
    <>
    <HeaderCadastro/>
    
    <Wrapper> 
      <Card>
      <Texto>Deseja se conectar como?</Texto>
      <BotaoCliente href="/cliente/inicio">Cliente</BotaoCliente>
      <BotaoProfissional href="/profissional/inicio">Profissional</BotaoProfissional>
      </Card>
    </Wrapper>
    
    <Footer/>
    </>
  )
}
