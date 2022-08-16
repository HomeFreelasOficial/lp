import styled from 'styled-components';

export const Background = styled.div `
background-image: url(./src/assets/frameloginecadastro.svg);
width: auto;
height: auto;
background-position: center;
background-size: cover;
background-repeat: no-repeat;
padding-block: 4.5em;
display: flex;
justify-content: center;
align-items: center;

@media screen and (min-width: 768px){
  padding-block: 10em;
}

@media screen and (min-height: 768){
  padding-block: 10em;
}

`