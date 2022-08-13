import styled from "styled-components";
import { FormularioCadastro } from "../FormularioCadastro/Formulario";


export function BodyCadastro(){

  const Background = styled.div `
  background-image: url(./src/assets/img/Frame36.svg);
  width: 100vw;
  height: auto;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding-block: 39px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1024px){
    padding-block: 100px;
  }

  `


  return (
    <Background>
      <FormularioCadastro/>
    </Background>
  )
}