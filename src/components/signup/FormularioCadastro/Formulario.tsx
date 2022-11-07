import { useState } from "react"
import styled from "styled-components"
import { BotaoFormulario } from "./Botao/Botao"
import {
  Wrapper,
  Title,
  Formulario,
  Input,
  Botoes,
  Texto, 
  LinkLogin
} from "./styles"

export function FormularioCadastro(){

  const [account, setAccount] = useState(
    {
      nome: "",
      cpf: "",
      email: "",
      confirmaEmail: "",
      senha: "",
      confirmaSenha: ""
    }
  )
 

  return (
  <Wrapper>
   <Title>Cadastre-se</Title>
    <Formulario>
      <Input 
      type="text" 
      onChange={(e) => setAccount({...account, nome: e.target.value})}
      name="nome" 
      value={account.nome}   
      id="nome" 
         placeholder="Insira seu nome completo"/>
      <Input 
      type="text" 
      onChange={(e) => setAccount({...account, cpf: e.target.value})}
      name="cpf" 
      value={account.cpf}   
      id="cpf" 
         placeholder="Insira seu cpf"/>
      <Input 
      type="email" 
      onChange={(e) => setAccount({...account, email: e.target.value})}
      name="email" 
      value={account.email}   
      id="email"
         placeholder="Insira seu e-mail"/>
      <Input 
      type="email" 
      onChange={(e) => setAccount({...account, confirmaEmail: e.target.value})}
      name="emailConfirma" 
      value={account.confirmaEmail}   
      id="emailConfirma" 
         placeholder="Confirme seu e-mail"/>
      <Input
      type="password" 
      onChange={(e) => setAccount({...account, senha: e.target.value})}
      name="senha" 
      value={account.senha}   
      id="senha" 
         placeholder="Insira seu senha"/>
      <Input  
      type="password" 
      onChange={(e) => setAccount({...account, confirmaSenha: e.target.value})}
      name="confirmaSenha" 
      value={account.confirmaSenha}   
      id="confirmaSenha" 
         placeholder="Confirme sua senha"/>
    <Botoes>
      <BotaoFormulario text="Confirmar" clicado={false} componentColor="black" componentWidth="273px"/>
    </Botoes>
    <Texto>Já tem conta? Faça <LinkLogin href="signin">login</LinkLogin></Texto>
    </Formulario>
  </Wrapper>
  
  )
} 
