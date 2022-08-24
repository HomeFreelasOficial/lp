import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --gray: #222628;
        --font-family: 'Poppins', sans-serif;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        outline: none;
        border: none;
        font-family: var(--font-family);
    }

    html {
        font-size: 62.5%;
    }

    @media (max-width: 650px) {
        html {
            font-size: 50%;
        }   
    }
`