import styled from 'styled-components'


export const Card = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
padding: 10em;
width: 65em;
background-color: #F4F4F4;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 8px;

@media (min-width: 720px){
  font-size: 8px;
}

@media (min-width: 1024px){
  font-size: 12px;
}

@media (min-width: 1366px){
  font-size: 14px;
}
`
export const BodyWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100vw;
height: 100vh;
padding-block: 10rem;
`