import styled from "styled-components";

interface IBotao {
  cor: string,
  ativo?: boolean,
  funcao?: React.MouseEventHandler<HTMLButtonElement>,
  texto: string
}

const Botao = styled.button<IBotao>`
    background-color: ${props => props.ativo ? "white" : props.cor};
    border: ${props => props.ativo ? "1px solid" + props.cor : "none"};
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Poppins';
    color: ${props => props.ativo ? props.cor : "white"};
    width: 257px;
    height: 34px;
    border-radius: 8px;


    @media (min-width: 720px){
  font-size: 12px;
}

@media (min-width: 1024px){
  font-size: 12px;
  width: 35em;
}

@media (min-width: 1366px){
  font-size: 14px;
  width: 38em;
}
  `

export default function BotaoServicos(props: IBotao){

  

  return (
    <Botao onClick={props.funcao} {...props}>
      {props.texto}
    </Botao>
  )

}