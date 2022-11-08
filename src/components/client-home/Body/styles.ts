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
`

export const Card = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
padding: 2em;
width: 65em;
height: 30em;
background-color: #F4F4F4;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 8px;
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
`

export const CardLocalizacao = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 2em;
padding-right: 6em;
width: 65em;
height: 30em;
background-color: #F4F4F4;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 8px;
`

export const OrganizadorCardLocalizacao = styled.div`
display: flex;
flex-direction: column;
`

export const IconeLocal = styled.img`
width: 38px;
height: 50px;
content: url("../src/assets/img/icon-local.svg");
`

export const TextoBold = styled.p`
font-family: 'Poppins';
font-weight: 700;
font-size: 13px;
line-height: 20px;
`

export const Texto = styled.p`
font-family: 'Poppins';
font-weight: 400;
font-size: 11px;
line-height: 21px;
`

export const BotaoRoxo = styled.button`
width: 250px;
height: 44px;
background-color: #8811D2;
border-radius: 4px;
color: white;
font-weight: 700;
font-size: 13px;

:hover{

  cursor: pointer;
  color: #8811D2;
  background-color: white;
  border: #8811D2;
}
`