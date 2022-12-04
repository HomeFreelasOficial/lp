import styled from "styled-components";

export const Wrapper = styled.div`
z-index: 1;
display: flex;
position: relative;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 14em;
padding-top: 15em;
padding-bottom: 15em;
height: 100vh;

@media (min-width: 720px){
  padding-top: 35em;
  padding-bottom: 35em;
}
`

export const Card = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
padding: 2rem;
width: 65rem;
height: 30rem;
background-color: #F4F4F4;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 8px;

@media screen and (min-width: 720px){
  font-size: 16px;
}
`

export const CardBotao = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
padding: 2em;
width: 65em;
height: 30em;
background-color: #F4F4F4;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 8px;

@media (min-width: 720px){
  height: 35rem;
  gap: 4em;
}

@media (min-width: 1024px){
  height: 45rem;
  gap: 5em;
}
`

export const CardLocalizacao = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 2em;
padding-right: 6em;
width: 65em;
gap: 2em;
height: 30em;
background-color: #F4F4F4;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 8px;
@media (min-width: 720px){
  height: 35rem;
}
`

export const OrganizadorCardLocalizacao = styled.div`
display: flex;
flex-direction: column;
gap: 3em;
`

export const IconeLocal = styled.img`
width: 38px;
height: 50px;
content: url("../src/assets/img/icon-local.svg");
`

export const TextoBold = styled.p`
font-family: "Poppins";
font-weight: 700;
font-size: 13px;
line-height: 20px;

@media (min-width: 720px){
  font-size: 16px;
}

@media (min-width: 1024px){
  font-size: 18px;
}

@media (min-width: 1366px){
  font-size: 20px;
}
`

export const Texto = styled.p`
font-family: 'Poppins';
font-weight: 400;
font-size: 11px;
line-height: 21px;

@media (min-width: 720px){
  font-size: 14px;
}

@media (min-width: 1024px){
  font-size: 16px;
}

@media (min-width: 1366px){
  font-size: 18px;
}
`

export const BotaoRoxo = styled.a`
width: 250px;
height: 44px;
text-decoration: none;
text-align: center;
display: flex;
justify-content: center;
align-items: center;
background-color: #8811D2;
border-radius: 4px;
color: white;
font-weight: 700;
font-size: 13px;

:hover{
  cursor: pointer;
  color: #8811D2;
  background-color: white;
  border: 2px solid #8811D2;
}
`