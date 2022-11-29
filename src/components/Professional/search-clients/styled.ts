import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 5rem;
`

export const CardSearchingClients = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 5rem;
width: 65rem;
height: 30rem;
background-color: #F4F4F4;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 8px;
`

export const TextBold = styled.p`
font-weight: 700;
font-size: 13px;
line-height: 20px;

@media (min-width: 1366px) {
  font-size: 20px;
}
`

export const ButtonCancelSearching = styled.button`
width: 250px;
height: 44px;
background-color: #FF0000;
border-radius: 4px;
color: white;
font-weight: 700;
font-size: 13px;

transition: all .4s ease;

:hover{
  cursor: pointer;
  color: #FF0000;
  background-color: white;
  border: 1px solid #FF0000;
}
`