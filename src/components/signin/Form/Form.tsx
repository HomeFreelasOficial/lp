import { useContext, useEffect, useState, FormEvent,  useRef } from "react"
import * as S from './styles'
import axios from "axios"
import { redirect, useNavigate } from "react-router-dom"
import { useCookies } from 'react-cookie'
import { UserContext } from "../../../context/user"

export function Formulario(){
  const navigate = useNavigate()
  const { login, dataUser } = useContext(UserContext)
  const emailField = useRef<HTMLInputElement>(null)
  const passwordField = useRef<HTMLInputElement>(null)
  const [error, setError] = useState<string>('')

  const send = async (evt: FormEvent) => {
    evt.preventDefault();
    setError('')
    const email = emailField.current?.value
    const password = passwordField.current?.value
    if (!email || !password) setError('Preencha todos os campos')
    try { 
      await login(email, password)
      navigate('/selecionar')
    } catch (error: any) {
      setError(error.message)
    }
  }
  
  return (
    <S.Background>
      <S.Wrapper>
        <S.Title>Login</S.Title>
        <S.Form method="POST">
          <S.Input 
            type="email" 
            name="nome" 
            id="nome" 
            ref={emailField}
            placeholder="Insira seu email"
          />
          <S.Input
            type="password" 
            name="senha" 
            id="senha" 
            ref={passwordField}
            placeholder="Insira seu senha"
          />
            <S.ButtonForm onClick={send}>
              Confirmar  
            </S.ButtonForm>
          <S.Texto>Não tem conta? <S.LinkCadastro href="signup">Cadastre-se</S.LinkCadastro></S.Texto>
          <S.ErrorMessage>{error}</S.ErrorMessage>
        </S.Form>
      </S.Wrapper>
    </S.Background>
  )
} 