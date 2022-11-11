import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9em;
  margin-left: 0.9em;
  justify-content: center;
  @media screen and (min-width: 1024px) {
    gap: 2em;
  }
  `;

export const Header = styled.header`
  background-color: #222628;
  display: fixed;
  height: 10em;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  
  @media screen and (min-width: 1024px) {
    height: 5.6em;
  }
  `

export const Item = styled.a`
   color: white;
  font-size: 12px;
  @media screen and (min-width: 1024px) {
    font-size: 18px;
  }
  @media screen and (min-height: 1024px) {
    font-size: 15px;
  }
  `
export const ItemLogo = styled.a`
  margin-left: 14px;
  margin-right: 15px;
  background-image: url("../src/assets/letrassemfundo.svg");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 48px;
  height: 48px;
  `