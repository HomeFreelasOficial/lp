import styled from "styled-components";

export const Title = styled.h1`
    font-weight: 700;
    font-size: 2.5rem;
`

export const Cards = styled.div`
    width: 100%;
    height: max-content;
    display: flex;
    flex-direction: row;
    column-gap: 6rem;
`

export const Card = styled.div`
    width: 33.8rem;
    height: 27rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: 1px solid #000;
    border-radius: 8px;
    background-color: #fff;
`

export const CardIcon = styled.span<{ icon: string }>`
    display: block;
    mask-image: ${props => `url(${props.icon})`};
    mask-repeat: no-repeat;
    mask-size: auto;
    mask-position: center;
    background-color: #000;
    width: 80%;
    height: 80%;
`

export const ServiceDescription = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 2rem;
    max-width: 46.3rem;

    h1 {
        font-weight: 700;
        font-size: 2.8rem;
    }

    p {
        font-weight: 400;
        font-size: 1.8rem;
        line-height: 2.5rem;
    }
`