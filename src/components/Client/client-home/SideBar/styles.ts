import styled, { css } from "styled-components";

export const Navigation = styled.div<{ openOrCloseSide: boolean }>`
background-color: #222628;
margin-left: auto;
margin-top: 5rem;
position: fixed;
right: 0;
display: block;
z-index: 8;
filter: drop-shadow(-59px 0px 100px rgba(0, 0, 0, 0.25));
width: 204px;
height: 100vh;
opacity: 0.97;

transition: transform .3s ease-in-out;

${props => props.openOrCloseSide === true ? 
css`
  transform: translateX(1%);
` 
: 
css`
  transform: translateX(100%);
`
}
`
export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding-top: 3rem;
padding-left: 4rem;
gap: 3em;
`

export const Text = styled.a`
font-family: 'Poppins';
text-decoration: none;
font-weight: 400;
font-size: 15px;
color: white;
`