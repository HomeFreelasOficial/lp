import { createGlobalStyle } from "styled-components";

export enum Colors {
  BACKGROUND_PRIMARY = "#222628",
  WHITE = "#FFFFFF",
  BLACK = "#000000",
  LIGHT_GRAY = "#D3D3D3",
  PINK = "#BC0081",
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {  
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
}

  button {
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
  }
`;