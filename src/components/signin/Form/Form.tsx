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
import axios from "axios"
import { useNavigate } from "react-router-dom"

export function Formulario(){

  const navigate = useNavigate()

  const apiPath = 'https://api.homefreelas.com.br/auth/signin'

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

      if(response.status === 200){
        return navigate('/selecionar')
      }
    })
    .catch(function (error: Error) {
      console.log(error)
      alert('Algo deu errado')
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
