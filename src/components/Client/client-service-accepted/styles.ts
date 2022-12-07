import styled from "styled-components";
import {Link} from "react-router-dom";

export const Card = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
padding: 2em;
gap: 3em;
width: 65em;
height: 35em;
background-color: #F4F4F4;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 8px;
`

export const ButtonConfirmService = styled(Link)`
width: 26rem;
height: 6rem;
border-radius: 8px;
font-size: 10px;
background-color: #227133;
color: white;
text-decoration: none;
text-align: center;
padding-block: 1em;
text-decoration: none;

:hover {
  border: 1px solid #227133;
  background-color: white;
  color: #227133;
  cursor: pointer;
}

@media (min-width: 720px){
  width: 32em;
  height: 10em;
  font-size: 14px;
}

@media (min-width: 1024px){
  width: 32em;
  height: 10em;
  font-size: 14px;
}
`

export const BodyOrganizer = styled.div`
display: flex;
flex-direction: column;
gap: 5em;
align-items: center;
justify-content: center;
padding-block: 60rem;

@media (min-width: 720px){
  padding-block: 18rem;

  font-size: 10px ;
}
`