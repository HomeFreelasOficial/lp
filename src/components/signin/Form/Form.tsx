import { useContext, useEffect, useState } from "react"
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
import axios from "axios"
import { redirect, useNavigate } from "react-router-dom"
import { useCookies } from 'react-cookie'
import { UserContext } from "../../../context/user"

export function Formulario(){

  const [cookies, setCookie, removeCookie] = useCookies(['token']);

  const navigate = useNavigate()

  const apiPath = 'https://localhost:1234/auth/sign-in'

  const {user} = useContext(UserContext)

  if (user.verified){

    const token = document.cookie.replace('token=', '')

    axios.post(apiPath, {}, {headers: {
      Authorization: token
    }})
    .then(res => {

      console.log(res)
      if(res.status == 200){
        return navigate("/selecionar")
      }
    })
  }
  

  const [account, setAccount] = useState(
    {
      email: "",
      senha: "",
    }
  )


  function sendData(e : React.MouseEvent<HTMLButtonElement, MouseEvent>){

    e.preventDefault()

    axios.post(apiPath, {
      email: account.email,
      password: account.senha,
    })
    .then(function (response) {
      console.log(response)
      if(response.data.code == 200){
        setCookie("token", response.data.body.jwt, { path: '/'})

        return navigate('/selecionar')
      } 

    })
    .catch(function (error: Error) {
      console.log(error)
      alert('email ou senha incorretos')
    });
  }
  
  return (
  <Wrapper>
   <Title>Login</Title>
    <Form>
      <Input 
      type="email" 
      onChange={(e) => setAccount({...account, email: e.target.value})}
      name="nome" 
      value={account.email}   
      id="nome" 
         placeholder="Insira seu email"/>
      <Input
      type="password" 
      onChange={(e) => setAccount({...account, senha: e.target.value})}
      name="senha" 
      value={account.senha}   
      id="senha" 
         placeholder="Insira seu senha"/>
    <Botoes>
      <BotaoFormulario 
      tipo="submit" 
      text="Confirmar" 
      clicado={false} 
      componentColor="black" 
      componentWidth="273px"
      onClick={(e) => sendData(e)}/>
    </Botoes>
    <Texto>Não tem conta? <LinkCadastro href="signup">Cadastre-se</LinkCadastro></Texto>
    </Form>
  </Wrapper>
  
  )
} 
