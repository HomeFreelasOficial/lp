import { useState } from "react"
import styled from "styled-components"
import { BotaoFormulario } from "./Botao/Botao"

export function FormularioCadastro(){

  const [account, setAccount] = useState(
    {
      nome: "",
      sobrenome: "",
      email: "",
      confirmaEmail: "",
      senha: "",
      confirmaSenha: ""
    }
  )
  
  const Wrapper = styled.div `
  display:flex;
  flex-direction: column;
  background-color: white;
  border: 1px solid black;
  border-radius: 8px;
  width: 341px;
  height: 469px;
  margin-inline: 44px;
  align-items: center;
  text-align: center;
  box-shadow: 2px 0px rgba(0, 0, 0, 0.5);
  gap: 20px;

  @media screen and (min-width: 1024px) {
    width: 413px;
    height: 483px;
  }

  `
  const Title = styled.h2 `
  margin-top: 23px;
  font-weight: 700;
  font-size: 20px;

  @media screen and (min-width: 1024px){
    font-size: 25px;
  }
  `

  const Input = styled.input `
  border: 1px solid rgba(0, 0, 0, 0.7);
  border-radius: 8px;
  padding-left: 8px;
  width: 262px;
  height: 36px;

  ::placeholder {
    color: rgba(0, 0, 0, 0.4);
    font-size: 15px;
    font-family: 'Poppins';
  }
  `

  const Formulario = styled.form `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-inline: 36px;

  @media screen and (min-width: 1024px){
  margin-inline: 70px;
  }
  `

  const Botoes = styled.div `
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 8px;
  width: 280px;

  @media screen and (min-width: 1024px){
    gap: 6px;
  }
  `
  const Texto = styled.p `
  font-size: 10px;
  margin-top: 4px;
  font-weight: 500;

  @media screen and (min-width: 1024px){
    font-size: 15px;
  }
  `
  const LinkLogin = styled.a `
  font-size: 10px;
  font-weight: 700;
  color: black;
  text-decoration: none;

  @media screen and (min-width: 1024px){
    font-size: 15px;
  }
  `

  const [clienteClicado, setClienteClicado] = useState(false)
  const [profissionalClicado, setProfissionalClicado] = useState(false)

  function handleClienteClicado() {
    setClienteClicado(!clienteClicado)
    setProfissionalClicado(false)
  }

  function handleProfissionalClicado() {
    setProfissionalClicado(!profissionalClicado)
    setClienteClicado(false)
  }

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
         placeholder="Insira seu nome"/>
      <Input 
      type="text" 
      onChange={(e) => setAccount({...account, sobrenome: e.target.value})}
      name="sobrenome" 
      value={account.sobrenome}   
      id="sobrenome" 
         placeholder="Insira seu sobrenome"/>
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
      <BotaoFormulario onClick={handleClienteClicado} clicado={clienteClicado} text="Cliente" componentColor="#8811D2" componentWidth="134px"/>
      <BotaoFormulario onClick={handleProfissionalClicado} clicado={profissionalClicado} text="Profissional" componentColor="#FF00C7" componentWidth="134px"/>
      <BotaoFormulario text="Confirmar" clicado={false} componentColor="black" componentWidth="273px"/>
    </Botoes>
    <Texto>Já tem conta? Faça <LinkLogin href="#">login</LinkLogin></Texto>
    </Formulario>
  </Wrapper>
  
  )
} 
