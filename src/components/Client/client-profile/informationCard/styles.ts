import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    padding: 2rem 2.5rem;
    width: max-content;
    height: max-content;
    background-color: #F4F4F4;
    flex-direction: column;
    gap: 0.5rem;
    border-radius: 8px;
    align-items: flex-start;
    @media (max-width: 375px){
        width: 250px;
    }
`

export const Label = styled.p`
    font-size: 15px;

    @media (min-width: 375px) {
        display: flex;
        justify-content: center;
        align-items: center;
        }
`

export const Input = styled.input`

    border: 1px solid rgba(0, 0, 0, 0.7);
    border-radius: 8px;
    padding-left: 8px;
    width: 35rem;
    height: 25px;
    margin-top: 1rem;

    ::placeholder {
    color: rgba(0, 0, 0, 0.4);
    font-size: 12px;
    font-family: 'Poppins';
    }

    @media (min-width: 375px) {
        width: 45rem;
        
    }

    @media screen {
        
    }
`