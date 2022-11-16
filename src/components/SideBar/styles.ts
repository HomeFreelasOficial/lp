import styled, { css } from "styled-components";

export const Navigation = styled.div<{ openOrCloseSide: boolean }>`
background-color: #222628;
margin-left: auto;
position: fixed;
right: 0;
display: block;
z-index: 8;
filter: drop-shadow(-59px 0px 100px rgba(0, 0, 0, 0.25));
width: 35rem;
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

@media (max-width: 1024px) {
  width: 28rem;
}

`
export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding-top: 3rem;
padding-left: 3rem;
gap: 5em;
`

export const Text = styled.a`
text-decoration: none;
font-weight: 400;
font-size: 2rem;
color: white;

@media (min-width: 480px) {
  font-size: 2.5rem;
}

@media (min-width: 375px) {
  font-size: 3rem;
}

`