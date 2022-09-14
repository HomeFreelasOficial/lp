import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --gray: #222628;
        --font-family: 'Poppins', sans-serif;
        --pink: #BC0081;
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

    body {
        overflow-x: hidden;
        scroll-behavior: auto;

        ::-webkit-scrollbar {
            background: var(--gray);
            width: 1rem;
        }

        ::-webkit-scrollbar-thumb {
            border-radius: 12px;
            background: var(--pink);
        }
    }

    @media (max-width: 650px) {
        html {
            font-size: 50%;
        }   
    }
`