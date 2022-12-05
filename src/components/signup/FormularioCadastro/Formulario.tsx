import { useRef, useState } from "react"
import styled from "styled-components"
import { BotaoFormulario } from "./Botao/Botao"
import BotaoSenha from "./Botao/BotaoSenha"
import * as S from "./styles"
import { cpf } from "cpf-cnpj-validator"

import axios from "axios"
import { redirect } from "react-router-dom"

export function FormularioCadastro(){

  const apiPath = 'https://localhost:1234/auth/sign-up'

  const [olhoAtivo, setOlhoAtivo] = useState(true)
  const [errorIsActive, setErrorIsActive] = useState<boolean>(false)
  const [userWasRegistered, setUserWasRegistered] = useState<boolean>(false)
  const [errorText, setErrorText] = useState("")
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

  function sendData(e : React.MouseEvent<HTMLButtonElement, MouseEvent>){

    e.preventDefault()

    if (account.senha !== account.confirmaSenha){
      setErrorText("As senhas não são iguais!")
      setErrorIsActive(true)
      setUserWasRegistered(false)
      return
    }
    if (cpf.isValid(account.cpf) === false) {
      setErrorText("Insira um cpf válido!")
      setErrorIsActive(true)
      setUserWasRegistered(false)
      return
    }
    axios.post(apiPath, {
      name: account.nome,
      email: account.email,
      password: account.senha,
      age: +account.age,
      cpf: account.cpf
    })
    .then(function (response) {
      console.log(response)

      if(response.status === 201){
       setUserWasRegistered(true)
       setErrorIsActive(false)
      }
    })
    .catch(function (error) {
      console.log(error)
      console.log(error.response.data.body.name)

      switch (error.response.data.body.name){
        case "UserAlreadyExistsError":
          setErrorText("Esse usuário já foi cadastrado!")
          setErrorIsActive(true)
          setUserWasRegistered(false)
          break;
        case "UnderageError":
          setErrorText("Você não pode se cadastrar com menos de 18 anos!")
          setErrorIsActive(true)
          setUserWasRegistered(false)
          break;
        case "RequiredFieldsError":
          setErrorText("Insira os valores corretamente!")
          setErrorIsActive(true)
          setUserWasRegistered(false)
          break;
      } 
       
    });
    setAccount(
      {
        nome: "",
        cpf: "",
        email: "",
        age: "",
        senha: "",
        confirmaSenha: ""
      }
    )
  }
 

  return (
  <S.Wrapper>
   <S.Title>Cadastre-se</S.Title>
    <S.Formulario>
      <S.Input 
      autoFocus
      type="text" 
      onChange={(e) => setAccount({...account, nome: e.target.value})}
      name="nome" 
      value={account.nome}   
      id="nome" 
         placeholder="Insira seu nome completo"/>
      <S.Input 
      type="text" 
      onChange={(e) => setAccount({...account, cpf: e.target.value})}
      name="cpf" 
      value={account.cpf}   
      id="cpf" 
      maxLength={11}

      placeholder="Insira seu CPF"/>
      <S.Input 
      type="email" 
      onChange={(e) => setAccount({...account, email: e.target.value})}
      name="email" 
      value={account.email}   
      id="email"
         placeholder="Insira seu e-mail"/>
      <S.Input 
      type="text" 
      onChange={(e) => setAccount({...account, age: e.target.value})}
      name="age" 
      value={account.age}   
      id="age" 
         placeholder="Digite sua idade"/>
      <S.DivInputSenha>
      <S.InputSenha
      type={olhoAtivo === true ? "password" : "text"} 
      onChange={(e) => setAccount({...account, senha: e.target.value})}
      name="senha" 
      value={account.senha}   
      id="senha" 
      placeholder="Insira sua senha"/>
      <BotaoSenha ativo={olhoAtivo} funcao={() => {
        setOlhoAtivo(!olhoAtivo)
      }}/>
      </S.DivInputSenha>
      <S.DivInputSenha>
      <S.InputSenha  
      type={olhoAtivo === true ? "password" : "text"} 
      onChange={(e) => setAccount({...account, confirmaSenha: e.target.value})}
      name="confirmaSenha" 
      value={account.confirmaSenha}   
      id="confirmaSenha" 
      placeholder="Confirme sua senha"/>
      </S.DivInputSenha>
    <S.Botoes>
      <BotaoFormulario 
      tipo="submit" 
      text="Confirmar" 
      clicado={false} 
      componentColor="black" 
      componentWidth="17.5em" 
      onClick={(e) => sendData(e)}/>
    </S.Botoes>
    <S.Texto>Já tem conta? Faça <S.LinkLogin href="signin">login</S.LinkLogin></S.Texto>
    {errorIsActive? <S.TextoErro>{errorText}</S.TextoErro> : <></>}
    {userWasRegistered? <S.TextoUserLogado>Pronto! Agora verifique sua caixa de email</S.TextoUserLogado> : <></>}
    </S.Formulario>
  </S.Wrapper>
  
  )
} 
