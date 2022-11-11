import styled from "styled-components";

interface IBotao {
  componentWidth: string,
  componentColor: string,
  text: string,
  clicado?: boolean,
  onClick?: React.MouseEventHandler<HTMLButtonElement>
} 

export function ButtonConfirm(props: IBotao){

   const NovoBotao = styled.button `
   width: ${props.componentWidth};
   background-color: ${props.clicado === true? "white" : props.componentColor};
   color: ${props.clicado === false? "white" : props.componentColor};
   font-weight: 700;
   font-size: 13px;
   font-family: 'Poppins';
   height: 40px;
   border: ${props.clicado === true? "2px solid" : "none"};
   border-color: ${props.clicado === true? props.componentColor : "transparent"};
   border-radius: 5px;

   :hover {
    color: ${props.componentColor};
    background-color: white;
    border: 2px solid black;
    cursor: pointer;
   }

   @media screen and (min-width: 1024px){
    font-size: 15px;
  }

   `
   
   return (
    <NovoBotao onClick={props.onClick}>{props.text}</NovoBotao>
   )
}

