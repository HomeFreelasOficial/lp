import styled, { css } from "styled-components";

export const Box = styled.div`
    background: #fff;
    padding: 2.1rem 3.6rem;
    border-radius: 8px;
    width: max-content;
    display: flex;
    flex-direction: column;
    row-gap: 3.9rem;
`

export const BoxHeader = styled.header`
    width: max-content;
    display: flex;
    column-gap: 8.8rem;
`

export const Button = styled.button<{ active: boolean }>`
    width: 23.1rem;
    height: 9rem;
    cursor: pointer;
    background: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform .3s cubic-bezier(.12,.28,.24,.91);

    ${props => css`
        transform: ${props.active ? 'scale(1.1)' : 'none'};
    `}

    span:nth-child(1) {
        background-color: ${props => props.active ? '#BC0081' : '#000'};
    }

    span:nth-child(2) {
        color: ${props => props.active ? '#BC0081' : '#000'};
    }
`

export const ButtonIcon = styled.span<{ icon: string }>`
    display: inline-block;
    width: 5.6rem;
    height: 5.6rem;
    mask-image: ${props => `url(${props.icon})`};
    mask-position: center;
    mask-size: 100%;
`

export const ButtonText = styled.span`
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.5rem;
`

export const BoxMain = styled.main`
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

export const BoxFooter = styled.footer`
    a {
        font-weight: 400;
        font-size: 1.5rem;
        line-height: 2.5rem;
        width: max-content;
        color: #000;
        text-decoration: none;

        :hover {
            border-bottom: 1px solid #C4C4C4;
        }
    }
`

export const Indicator = styled.span<{activeItemIndex: number}>`
    display: block;
    border-radius: 30%;
    width: 23.9rem;
    height: .3rem;
    background: #BC0081;
    transition: transform .3s cubic-bezier(.12,.28,.24,.91);
    transform: ${props => `translateX(calc(${(props.activeItemIndex * 100)}% + ${(props.activeItemIndex * 7.2)}rem))`};
`

