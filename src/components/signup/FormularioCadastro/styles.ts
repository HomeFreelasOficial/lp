 
  import styled from "styled-components"
  
  export const Wrapper = styled.div `
  display:flex;
  flex-direction: column;
  background: #F4F4F4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  width: 341px;
  height: 500px;
  margin-inline: 44px;
  align-items: center;
  text-align: center;
  gap: 20px;

  @media screen and (min-width: 1024px) {
    width: 413px;
    height: 529px;
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

  @media screen and (min-width: 1024px){
    width: 300px;
    height: 45px;
    font-size: 16px;
  }
  `
  export const InputSenha = styled.input `
  background-color: transparent;

  ::placeholder {
    color: rgba(0, 0, 0, 0.4);
    font-size: 15px;
    font-family: 'Poppins';
  }

  @media screen and (min-width: 1024px){
    width: 300px;
    font-size: 16px;
  }
  `
  

  export const Formulario = styled.form `
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

  export const DivInputSenha = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  border-radius: 8px;
  padding-inline: 8px;
  width: 262px;
  height: 36px;
  background-color: white;
  @media screen and (min-width: 1024px){
    width: 300px;
    height: 45px;
  }
  `

  export const Botoes = styled.div `
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4px;
  margin-top: 8px;
  width: 280px;

  @media screen and (min-width: 1024px){
    gap: 6px;
    width: 300px;
  }
  `
  export const Texto = styled.p `
  font-size: 10px;
  margin-top: 4px;
  font-weight: 500;

  @media screen and (min-width: 1024px){
    font-size: 15px;
  }
  `

export const TextoErro = styled.p `
font-size: 10px;
margin-top: 4px;
font-weight: 500;
color: red;

@media screen and (min-width: 1024px){
  font-size: 15px;
}
`

export const TextoUserLogado = styled.p `
  font-size: 10px;
  margin-top: 4px;
  font-weight: 500;
  color: green;

  @media screen and (min-width: 1024px){
    font-size: 15px;
  }
  `

  export const LinkLogin = styled.a `
  font-size: 10px;
  font-weight: 700;
  color: black;
  text-decoration: none;

  @media screen and (min-width: 1024px){
    font-size: 15px;
  }
  `