import styled from "styled-components";

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

export const ButtonConfirmService = styled.a`
width: 30em;
height: 15em;
border-radius: 8px;
font-size: 10px;
background-color: #227133;
color: white;
text-decoration: none;
text-align: center;
padding-block: 1em;

:hover {
  border: 1px solid #227133;
  background-color: white;
  color: #227133;
  cursor: pointer;
}
`