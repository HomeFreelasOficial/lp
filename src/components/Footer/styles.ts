import styled from "styled-components"


export const FooterComponent = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 1.7rem;
  background-color: #222628;
  padding: 2rem;
 
  @media screen and (min-width: 768px){
   padding: 5rem;
  }
 
  @media screen and (min-height: 768px){
   gap: 1.75rem;
  }
 
  @media screen and (min-width: 1366px){
   padding: 3rem;
  }
`
export const Text = styled.p`
color: white;
font-size: 12px;

@media screen and (min-width: 768px){
  font-size: 24px;
}
`
