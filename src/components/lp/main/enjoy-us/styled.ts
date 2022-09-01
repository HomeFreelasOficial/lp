import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 3.9rem;
`

export const Title = styled.h1`
    font-weight: 700;
    font-size: 2.5rem;
    text-align: center;
    width: 100%;
`

export const Cards = styled.div`
    width: 100%;
    height: max-content;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
`

export const Card = styled.div`
    cursor: pointer;
    width: 33.8rem;
    height: 27rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: 1px solid #000;
    border-radius: 8px;
    background-color: #fff;
    display: flex;
    align-items: center;
    transition: all .3s ease-in-out;
    justify-content: center;
    :hover {
        transform: scale(1.02);
        box-shadow: 0px 6px 4px 3px var(--pink);
        border: 1px solid var(--pink);
        span {
            background-color: var(--pink);
        }
    }
`

export const CardIcon = styled.span<{ icon: string }>`
    display: block;
    mask-image: ${props => `url(${props.icon})`};
    mask-repeat: no-repeat;
    mask-size: auto;
    mask-position: center;
    background-color: #000;
    transition: all .3s ease-in-out;
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