import styled from "styled-components";

interface IBotaoSenha {
  ativo: boolean,
  funcao: React.MouseEventHandler<HTMLButtonElement>
}

export default function BotaoSenha(props: IBotaoSenha){
  
  const Botao = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.8em;
  height: 1.8em;
  border-radius: 32px;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  `
  const OlhoAberto = styled.img`
  width: 20px;
  height: 20px;
  content: url('./src/assets/img/eye-crossed.svg');
  `

  const OlhoFechado = styled.img`
  width: 20px;
  height: 20px;
  content: url('./src/assets/img/eye-closed.svg');
  `


  return(
    <Botao onClick={props.funcao}>
      {props.ativo === true? <OlhoAberto width="20px"/> : <OlhoFechado width="20px"/>}
    </Botao>

  )
}