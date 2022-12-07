import styled from "styled-components";
import { Link } from "react-router-dom";

export const ButtonPay = styled(Link)`
color: white;
background-color: #47EE6C;
padding: 2rem 6rem;
border-radius: 10px;
font-size: 2.5rem;
text-decoration: none;

@media (min-width: 720px){
    padding: 1rem 8rem;
    border-radius: 5px;
    font-weight: 600;

    font-size: 1.5rem;

}`