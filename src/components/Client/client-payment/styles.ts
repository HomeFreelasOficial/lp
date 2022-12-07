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

export const ConfirmButton = styled(Link)`
    background-color: #8811D2;
    color: white;
    text-decoration: none;

    font-weight: 600;
    font-size: 3rem;

    padding: 1rem 8rem;
    border-radius: 8px;
`