import styled, { css } from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: max-content;
    padding: 1.6rem 7.7rem;
    position: sticky;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: var(--gray);
    z-index: 100;
`

export const Navbar = styled.nav`
    width: max-content;
    display: flex;
    align-items: center;
    flex-direction: row;
    column-gap: 3.3rem;
`

export const NavItem = styled.a`
    color: #fff;
    font-size: 2rem;
    line-height: 2.5rem;
    cursor: pointer;
    font-weight: 400;
    transition: all .3s;
    text-decoration: none;
    :hover {
        text-decoration: underline;
        filter: contrast(.85);
    }
    @media (max-width: 900px) {
        display: none;
    }
`

export const MenuItem = styled(NavItem)`
    @media (max-width: 900px) {
        display: initial;
    }
`

export const Logo = styled.div`
    width: 5rem;
    height: 5rem;
    background-image: url('/public/assets/logo.svg');
    background-position: center;
    background-size: 100%;
    cursor: pointer;
    background-repeat: no-repeat;
`

export const Arrow = styled.span<{ active: boolean }>`
    width: 3.1rem;
    height: 3.1rem;
    background-image: url('/public/assets/arrow.svg');
    background-position: center;
    background-size: 80%;
    cursor: pointer;
    background-repeat: no-repeat;
    transition: transform .3s ease-in-out;
    transform: ${props => props.active ? 'rotate(180deg)' : 'rotate(0)'};
    @media (min-width: 900px) {
        display: none;
    }
`

export const Actions = styled.div`
    display: flex;
    column-gap: 5.4rem;
    flex-direction: row;
    margin: 0 0 0 auto;
`

export const ActionButton = styled.button<{ variant: 'primary' | 'secondary' }>`
    padding: 1.5rem 1.6rem;
    font-size: 2rem;
    font-weight: 400;
    line-height: 2.5rem;
    cursor: pointer;
    border-radius: 8px;
    transition: filter .2s;
    :hover {
        filter: contrast(.85);
    }
    ${props => props.variant === 'primary' ? css`
        color: #000;
        background: #fff;
    ` : css`
        color: #fff;
        background: var(--gray);
    `}
`

export const Menu = styled(Container)<{ active: boolean }>`
    position: fixed;
    z-index: 0;
    top: 0;
    left: 0;
    display: flex;
    height: 9.1rem;
    padding: 0 7.7rem;
    align-items: center;
    flex-direction: row;
    column-gap: 3.3rem;
    transition: transform .3s ease-in-out;
    ${props => props.active ? css`
        transform: translateY(95%);
    ` : css`
        transform: translateY(0);
    `}

    @media (min-width: 900px) {
        display: none;
    }
`