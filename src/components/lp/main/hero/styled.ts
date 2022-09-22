import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 4.3rem;
    color: #fff;
    width: 50%;

    @media (max-width: 1022px) {
        width: 100%;
    }
`   

export const Title = styled.h1`
    font-size: 2.6rem;
    font-weight: 700;
    line-height: 2.5rem;
`

export const Text = styled.p`
    font-size: 2rem;
    font-weight: 400;
    line-height: 2.5rem;
`

export const Image = styled.div`
    width: 47.2rem;
    height: 29.5rem;
    margin-left: auto;
    background-image: url(/public/assets/hero-image.svg);
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 8px;
    background-color: linear-gradient(90deg, rgba(1,0,36,1) 0%, rgba(188,0,129,1) 100%, rgba(0,212,255,1) 100%);

    @media (max-width: 1022px) {
        display: none;
    }
`
