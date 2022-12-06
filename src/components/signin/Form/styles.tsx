import styled from "styled-components"

export const Background = styled.div `
width: auto;
height: 100vh;
padding-block: 17.5em;
display: flex;
justify-content: center;
align-items: center;
`

export const Wrapper = styled.div `
  display:flex;
  flex-direction: column;
  background: #F4F4F4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  width: 341px;
  height: 310px;
  margin-inline: 44px;
  align-items: center;
  text-align: center;
  gap: 20px;

  @media screen and (min-width: 1024px) {
    width: 413px;
    height: 310px;
  }

  @media screen and (min-width: 1366px) {
    width: 50rem;
    height: 35rem
  }

`
export const Title = styled.h2 `
  margin-top: 23px;
  font-weight: 700;
  font-size: 20px;
  @media screen and (min-width: 1024px){
    font-size: 25px;
  }

  @media screen and (min-width: 1366px){
    font-size: 28px;
  }
`

export const Input = styled.input `
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

@media screen and (min-width: 1024px){
  font-size: 16px;
     width: 30rem;
  }

  @media screen and (min-width: 1366px){
  font-size: 20px;
     width: 30rem;
     height: 5rem;
  }
`

export const Form = styled.form `
height: auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 5px;
margin-inline: 36px;

@media screen and (min-width: 1024px){
margin-inline: 70px;}
`

export const Botoes = styled.div `
display: flex;
flex-wrap: wrap;
gap: 4px;
margin-top: 8px;
width: 280px;
justify-content: center;
@media screen and (min-width: 1024px){
  gap: 6px;
}

@media screen and (min-width: 1024px){
    width: 35rem;
  }

`
export const Texto = styled.p `
font-size: 14px;
font-weight: 400;
margin-top: 4px;
font-weight: 500;

@media screen and (min-width: 1024px){
  font-size: 15px;
}
`
export const LinkCadastro = styled.a `
font-size: 14px;
font-weight: 700;
color: black;
text-decoration: none;

@media screen and (min-width: 1024px){
  font-size: 15px;
}
`

export const ErrorMessage = styled.p `
font-size: 10px;
margin-top: 4px;
font-weight: 500;
color: red;

@media screen and (min-width: 1024px){
  font-size: 15px;
}
`

export const ButtonForm = styled.button`
  background-color: #000;
  color: #fff;
  padding: 1rem 10rem;
  border-radius: 8px;
  cursor: pointer;

  transition: all .4s ease-in-out;

  &:hover {
    opacity: .8;
  }
`
