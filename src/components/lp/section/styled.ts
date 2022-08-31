import styled from "styled-components";

export const Container = styled.div<{ background?: string }>`
    padding: 5.5rem 7.6rem;
    width: 100vw;
    height: max-content;
    background: ${props => props.background};
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
`

Container.defaultProps = {
    background: ''
}