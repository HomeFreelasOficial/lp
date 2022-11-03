import styled, { css } from "styled-components";

export const Component = styled.button<{ variant: 'primary' | 'secondary' }>`
    padding: 2rem 4.2rem;
    border-radius: 8px;
    font-weight: 700;
    font-size: 2.5rem;
    line-height: 2.5rem;
    width: max-content;
    cursor: pointer;
    transition: filter .3s;
    :hover {
        filter: contrast(.85);
    }
    ${props => props.variant === 'primary' ? css`
        color: #000;
        background: #fff;
    ` : css`
        color: #fff;
        background: #000;
    `}
`