import styled from "styled-components"

export const Wrapper = styled.div `
display:flex;
  flex-direction: column;
  background-color: white;
  border: 1px solid black;
  border-radius: 8px;
  width: 341px;
  height: 150px;
  align-items: center;
  text-align: center;
  box-shadow: 2px 0px rgba(0, 0, 0, 0.5);
  gap: 20px;
  padding-bottom: 150px;

  @media screen and (min-width: 1024px) {
    width: 413px;
    height: px;
  }

`
export const Title = styled.h2 `
  margin-top: 23px;
  font-weight: 700;
  font-size: 20px;
  @media screen and (min-width: 1024px){
    font-size: 25px;
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

@media screen and (min-width: 1024px){
  gap: 6px;
}
`
export const Texto = styled.p `
font-size: 14px;
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