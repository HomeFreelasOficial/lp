import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0.9em;
  padding-inline: 10px;
  justify-content: space-between;
  width: 100%;
  `;

export const Header = styled.header`
  background-color: #222628;
  z-index: 12;
  display: fixed;
  height: 10em;
  width: 100%;
  align-items: center;
  @media screen and (min-width: 1024px) {
    height: 5.6em;
  }
  `

  export const ItemLogo = styled.a`
  width: 48px;
  height: 48px;
  `

  export const Logo = styled.img`
  width: 48px;
  height: 48px;
  content: url('../src/assets/letrassemfundo.svg');
  `

  export const MenuBurguer = styled.button`
  width: 32px;
  height: 36px;
  background-color: transparent;
  :hover {
    cursor: pointer;
  }
  `

export const ImgBurguer = styled.img`
width: 32px;
height: 38px;
content: url('../src/assets/img/menu-burguer.svg');
`