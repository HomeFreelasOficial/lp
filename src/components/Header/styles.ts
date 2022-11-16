import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0.9em;
  padding-inline: 10px;
  justify-content: space-between;
  width: 100%;
  `;

export const Container = styled.header`
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

  export const ItemLogo = styled.a`
    width: 5rem;
    height: 5rem;
    background-image: url('/public/assets/logo.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    cursor: pointer;

    @media (max-width: 375px) {
      width: 8rem;
      height: 8rem;
    }

    @media (max-width: 625px) {
      width: 7rem;
      height: 7rem;
    }
  `

export const Menu = styled.div<{ isOpened: boolean, visible: boolean }>`
${props => props.visible ? 
css` display: flex; ` 
: 
css` display: none;`}

width: 4.4rem;
height: max-content;
cursor: pointer;
flex-direction: column;
row-gap: 1rem;
position: relative;

transition: 0.5s;

:hover {
  opacity: 0.7;
}

div {
  height: .3rem;
  width: 4.4rem;
  background: #fff;
}
div {
  transition: all .2s ease-in-out;
}
${props => props.isOpened ? css`
div:nth-child(2) { display: none; }

div:nth-child(1) { 
  transform: rotate(-45deg) translateY(.9rem);
}
div:nth-child(3) {
  transform: rotate(45deg) translateY(-.9rem);
}
` : ''}
`