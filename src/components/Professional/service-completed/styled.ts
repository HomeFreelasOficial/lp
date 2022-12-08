import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`

export const Card = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 2rem;
padding: 5rem;
background-color: #F4F4F4;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 8px;
`

export const TextBold = styled.p`
font-weight: 700;
font-size: 3rem;
line-height: 2.5rem;

@media (min-width: 624px) {
  font-size: 2.5rem;
}

@media (min-width: 1366px) {
  font-size: 2rem;
}
`

export const Description = styled.p`
  text-align: center;
  font-size: 2.5rem;
  line-height: 3rem;
  letter-spacing: .3rem;
`

export const ButtonReturnHome = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  width: 40rem;
  height: 3em;
  background-color: #000000;
  border-radius: 8px;
  color: white;
  font-weight: 700;
  font-size: 2rem;
  text-decoration: none;

  transition: all .4s ease;

  :hover {
    cursor: pointer;

    background-color: white;
    border: 2px solid #000000;
    color: #000000;
  }

  @media (min-width: 769px) {
    font-size: 1.7rem;
  }
`