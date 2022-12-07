import styled from "styled-components";
import { Link } from "react-router-dom";

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

export const BtnExit = styled(Link)`
    background-color: #000000;
    color: #ffffff;
    
    padding: 1rem 9rem;
    border-radius: 10px;

    font-size: 2.5rem;
    font-weight: 600;
    text-decoration: none;

    @media (min-width: 720px) {
        font-size: 2rem;
        
    }
`;