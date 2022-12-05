import styled from "styled-components";

export const Navigation = styled.div`
background-color: #222628;
margin-left: auto;
position: fixed;
right: 0;
display: block;
top: 0;
z-index: 8;
filter: drop-shadow(-59px 0px 100px rgba(0, 0, 0, 0.25));
width: 204px;
height: 100vh;
`
export const Wrapper = styled.div`
display: flex;
flex-direction: column;
padding: 1.5em;
`

export const DivCima = styled.div`
display: flex;
justify-content: end;
`
export const DivBaixo = styled.div`
padding-top: 3em;
padding-left: 4em;
display: flex;
flex-direction: column;
gap: 1em;
`
export const Texto = styled.a`
font-family: 'Poppins';
text-decoration: none;
font-weight: 400;
font-size: 15px;
color: white;
`

export const MenuBurguer = styled.button`
width: 32px;
height: 36px;
background-color: transparent;
:hover {
  cursor: pointer;
}
`

export const ImgBurguer = styled.img`
width: 32px;
height: 38px;
content: url('../src/assets/img/menu-burguer.svg');
`