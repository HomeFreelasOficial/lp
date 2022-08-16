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
      <BotaoFormulario onClick={handleClienteClicado} clicado={clienteClicado} text="Cliente" componentColor="#8811D2" componentWidth="134px"/>
      <BotaoFormulario onClick={handleProfissionalClicado} clicado={profissionalClicado} text="Profissional" componentColor="#FF00C7" componentWidth="134px"/>
      <BotaoFormulario text="Confirmar" clicado={false} componentColor="black" componentWidth="273px"/>
    </Botoes>
    <Texto>Não tem conta? <LinkCadastro href="#">Cadastre-se</LinkCadastro></Texto>
    </Form>
  </Wrapper>
  
  )
} 
