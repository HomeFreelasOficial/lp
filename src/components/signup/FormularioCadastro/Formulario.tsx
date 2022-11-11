import { useState } from "react"
import styled from "styled-components"
import { BotaoFormulario } from "./Botao/Botao"
import BotaoSenha from "./Botao/BotaoSenha"
import {
  Wrapper,
  Title,
  Formulario,
  Input,
  Botoes,
  Texto, 
  LinkLogin,
  InputSenha,
  DivInputSenha
} from "./styles"
import { v4 as uuidv4 } from 'uuid';

import axios from "axios"
import { redirect } from "react-router-dom"

export function FormularioCadastro(){

  const [olhoAtivo, setOlhoAtivo] = useState(true)
  const [account, setAccount] = useState(
    {
      nome: "",
      cpf: "",
      email: "",
      age: "",
      senha: "",
      confirmaSenha: ""
    }
  )

  function sendData(){
    axios.post('/user', {
      name: account.nome,
      email: account.email,
      password: account.senha,
      age: +account.age,
      cpf: account.cpf
    })
    .then(function (response) {
      if (response.status === 200) {
        console.log('Usuário cadastrado')
      }
    })
    .catch(function (error: Error) {
      prompt(error.message)

      return redirect('signup')
    });
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
         placeholder="Insira seu nome completo"/>
      <Input 
      type="text" 
      onChange={(e) => setAccount({...account, cpf: e.target.value})}
      name="cpf" 
      value={account.cpf}   
      id="cpf" 
         placeholder="Insira seu CPF"/>
      <Input 
      type="email" 
      onChange={(e) => setAccount({...account, email: e.target.value})}
      name="email" 
      value={account.email}   
      id="email"
         placeholder="Insira seu e-mail"/>
      <Input 
      type="email" 
      onChange={(e) => setAccount({...account, age: e.target.value})}
      name="age" 
      value={account.age}   
      id="age" 
         placeholder="Digite sua idade"/>
      <DivInputSenha>
      <InputSenha
      type={olhoAtivo === true ? "password" : "text"} 
      onChange={(e) => setAccount({...account, senha: e.target.value})}
      name="senha" 
      value={account.senha}   
      id="senha" 
      placeholder="Insira sua senha"/>
      <BotaoSenha ativo={olhoAtivo} funcao={() => {
        setOlhoAtivo(!olhoAtivo)
      }}/>
      </DivInputSenha>
      <DivInputSenha>
      <InputSenha  
      type={olhoAtivo === true ? "password" : "text"} 
      onChange={(e) => setAccount({...account, confirmaSenha: e.target.value})}
      name="confirmaSenha" 
      value={account.confirmaSenha}   
      id="confirmaSenha" 
         placeholder="Confirme sua senha"/>
      </DivInputSenha>
    <Botoes>
      <BotaoFormulario text="Confirmar" clicado={false} componentColor="black" componentWidth="17.5em" onClick={() => sendData()}/>
    </Botoes>
    <Texto>Já tem conta? Faça <LinkLogin href="signin">login</LinkLogin></Texto>
    </Formulario>
  </Wrapper>
  
  )
} 
