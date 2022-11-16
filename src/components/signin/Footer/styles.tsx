import styled from "styled-components";
export const FooterComponent = styled.footer`

  width: auto;
  height: 100%;
  display: flex;
  z-index: 1;
 
  align-items: center;
  justify-content: center;
  background-color: #222628;
  gap: 1.5em;
  padding: 3em;
 
  @media screen and (min-width: 768px){
   padding: 3em;
  }
 
  @media screen and (min-height: 768px){
   gap: 1.75em;
  }
 
  @media screen and (min-width: 1366px){
   padding: 2em;
  }
`
export const Texto = styled.p`
color: white;
font-size: 12px;
`

