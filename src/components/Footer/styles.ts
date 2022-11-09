import styled from "styled-components"
export const FooterComponent = styled.footer`

  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 1.7rem;
  background-color: #222628;
  padding: 2em;
 
  @media screen and (min-width: 768px){
   padding: 1em;
  }
 
  @media screen and (min-height: 768px){
   gap: 1.75em;
  }
 
  @media screen and (min-width: 1366px){
   padding: 2em;
  }
`
export const Text = styled.p`
color: white;
font-size: 12px;
`
