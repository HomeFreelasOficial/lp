import styled from "styled-components"

export function DarkModeButton(){

  const Botao = styled.button `
  background-color: transparent;
  background-image: url(./src/assets/img/whiteMode5.svg);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 24px;
  height: 24px;
  border: none;
  margin-top: 16px;
  margin-right: 8px;
  
  @media screen and (min-width: 1024px){
    background-size: contain;
    width: 36px;
    height: 36px;
    margin-top: 21px;
    margin-right: 10px;
  }
  `

  return (
   <Botao/>
  )
}