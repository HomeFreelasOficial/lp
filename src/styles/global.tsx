import { createGlobalStyle } from "styled-components";

export enum Colors {
  BACKGROUND_PRIMARY = "#222628",
  WHITE = "#FFFFFF",
  BLACK = "#000000",
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;