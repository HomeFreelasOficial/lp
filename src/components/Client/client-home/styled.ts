import styled from "styled-components"
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
  height: 100vh;
  padding-top: 8.8rem;
`

export const CardLocalization = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  padding-right: 6rem;
  width: 65rem;
  height: 30rem;
  background-color: #F4F4F4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`

export const ContainerCardLocalization = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 1366px) {
  gap: 1.5rem;
}
`

export const IconeLocation = styled.img`
width: 38px;
height: 50px;
content: url("../src/assets/img/icon-local.svg");
`

export const TextBold = styled.p`
font-weight: 700;
font-size: 13px;
line-height: 20px;

@media (min-width: 1366px) {
  font-size: 20px;
}
`

export const Text = styled.p`
font-weight: 400;
font-size: 11px;
line-height: 21px;

@media (min-width: 1366px) {
  line-height: 28px;
  font-size: 20px;
}
`

export const CardButton = styled.div`
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

export const ButtonSearch = styled(Link)`
display: flex;
justify-content: center;
align-items: center;
text-decoration: none;
width: 250px;
height: 44px;
background-color: #8811D2;
border-radius: 4px;
color: white;
font-weight: 700;
font-size: 13px;

transition: all .4s ease;

:hover{
  cursor: pointer;
  color: #8811D2;
  background-color: white;
  border: 1px solid #8811D2;
}
`