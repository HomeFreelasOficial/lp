import styled from 'styled-components';
import { Colors } from "../../styles/global";

interface ButtonSignProps {
  signUp?: Boolean;
}

export const ImageLogo = styled.img`
  display: flex;
  align-items: center;
  
  width: 38px;
  height: 38px;

  background-repeat: no-repeat;

  @media screen and (min-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

export const ConfigHeader = styled.header`
    width: 100%;
    height: 56px;
  
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-around;
  
    position: fixed;  
    top: 0;
  
    z-index: 3;
  
    background-color: ${Colors.BACKGROUND_PRIMARY};
    color: ${Colors.WHITE};

    @media screen and (min-width: 768px) {
    height: 91px
  }
`;

export const NavBar = styled.nav`
  display: flex;

  width: 50px;
  height: 56px;

  visibility: hidden;

  @media screen and (min-width: 768px) {
    width: 100%;
    height: 91px;
    
    align-items: center;
    justify-content: center;

    visibility: visible;
  }
`;

export const ButtonNavBar = styled.img`
  width: 31px;
  height: 31px;

  cursor: pointer;

  background-repeat: no-repeat;

  @media screen and (min-width: 768px) {
    visibility: hidden;
  }
`;

export const ImagePersonSign = styled.img`
  width: 17px;
  height: 17px;
  
  margin-bottom: 2px;

  background-repeat: no-repeat;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const DivButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 200px;
  height: 35px;

  @media screen and (min-width: 768px) {
    width: 350px;
    justify-content: flex-end;

    & button {
      font-size: 15px;
    }
  }
`;

export const ButtonSign = styled.button<ButtonSignProps>`
  padding: 7px;

  font-size: 13px;

  border: none;
  border-radius: ${props => props.signUp ? 5+"px" : "none"};

  color: ${props => props.signUp ? Colors.BLACK : Colors.WHITE };
  background-color: ${props => props.signUp ? Colors.WHITE : "transparent"}
`;

export const DivLogoButton = styled.div`
  display: flex;
  align-items: center;

  gap: 15px;
`;

export const DivNavBar = styled.div`
  position: fixed;

  display: flex;
  align-items: center;
  justify-content: space-around; 

  width: 100%;
  height: 50px;

  z-index:2;

  background-color: ${Colors.BACKGROUND_PRIMARY};
  color: ${Colors.WHITE};    
`;

export const Item = styled.li`
  list-style-type: none;

  padding: 15px;

  font-size: 12px;

  cursor: pointer;

  display: inline-flex;

  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`;