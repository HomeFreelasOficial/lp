import { useState } from "react"
import {
  Wrapper, 
  Title,
  Input,
  Form,
  Botoes,
  Texto,
  LinkCadastro,
} from "./styles"
import { BotaoFormulario } from "./Button/Button"

export function Formulario(){

  const [account, setAccount] = useState(
    {
      nome: "",
      email: "",
      senha: "",
    }
  )
  
  return (
  <Wrapper>
   <Title>Login</Title>
    <Form>
      <Input 
      type="text" 
      onChange={(e) => setAccount({...account, nome: e.target.value})}
      name="nome" 
      value={account.nome}   
      id="nome" 
         placeholder="Insira seu nome ou email"/>
      <Input
      type="password" 
      onChange={(e) => setAccount({...account, senha: e.target.value})}
      name="senha" 
      value={account.senha}   
      id="senha" 
         placeholder="Insira seu senha"/>
    <Botoes>
      <BotaoFormulario text="Confirmar" clicado={false} componentColor="black" componentWidth="273px"/>
    </Botoes>
    <Texto>Não tem conta? <LinkCadastro href="#">Cadastre-se</LinkCadastro></Texto>
    </Form>
  </Wrapper>
  
  )
} 
