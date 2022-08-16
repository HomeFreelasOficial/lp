import styled from "styled-components";
import { Colors } from '../../styles/global';

interface ButtonColors {
  white: Boolean;
}

export const FirstDescriptionDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  position: relative;

  overflow: hidden;

  width: 100%;
  height: 50vh;

  margin-top: 56px;

  background-color: ${Colors.BACKGROUND_PRIMARY};

  @media screen and (min-width: 768px) {
    margin-top: 91px;
  }
`;

export const TitleFirstDiv = styled.h1`
  padding: 10px;

  font-size: 16px;
  text-align: justify;

  color: ${Colors.WHITE};

  @media screen and (min-width: 768px) {
    width: 50%;

    font-size: 18px;
  }
`;

export const TextFirstDiv = styled.p`
  width: 45%;
  padding: 10px;

  font-size: 13px;
  text-align: justify;

  color: ${Colors.WHITE};

  @media screen and (min-width: 768px) {
    width: 50%;

    font-size: 15px;
  }
`;

export const Button = styled.button<ButtonColors>`
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 100px;
  height: 40px;
  
  margin-left: ${props => props.white ? 10+"px" : 0};
  margin-bottom: ${props => props.white ? 10+"px" : 0};
  padding: 5px;

  font-size: 14px;
  font-weight: 600;

  border: none;
  border-radius: 5px;

  cursor: pointer;

  color: ${props => props.white ? Colors.BLACK : Colors.WHITE};
  background-color: ${props => props.white ? Colors.WHITE : Colors.BLACK};
`;

export const ImageFirstDiv = styled.img`
  display: block;
  
  max-width: 100%;

  position: absolute;
  top: 100px;
  left: 200px;

  @media screen and (min-width: 768px) {
    width: 350px;
    height: 250px;

    top: 50px;
    left: 400px;
  }
`;

export const SecondDescriptionDiv = styled.div`
  display: flex;
  justify-content: center;

  padding-top: 25px;

  width: 100%;
  height: 40vh;

  background-image: url('./src/img/SecondDescriptionDiv/image-second-div.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media screen and (min-width: 768px) {
    height: 60vh;    

    justify-content: flex-start;
  }
`;

export const WorkDescriptionDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  width: 275px;
  height: 200px;

  padding: 10px;

  border-radius: 10px;

  background-color: ${Colors.WHITE};

  small {
    display: flex;
    justify-content: center;

    font-size: 8px;
  }

  @media screen and (min-width: 768px) {
    width: 450px;
    height: 310px;

    margin-left: 30px;

    small {
      font-size: 12px;
    }
  }
`;

export const ButtonsWork = styled.div`
  display: flex;
  justify-content: flex-start;
  justify-content: space-around;

  img {
    width: 30px;
    height: 30px;
  }

  small {
    font-size: 10px;
  }

  @media screen and (min-width: 768px) {
    img {
      width: 45px;
      height: 45px;
    }

    small {
      font-size: 13px;
    }
  }
`;

export const WorkWithUs = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  justify-content: space-between;
`;

export const RequestProfessionals = styled(WorkWithUs)``;

export const UnderLine = styled.div`
  margin-left: 15px;

  width: 90px;
  height: 1px;

  background-color: ${Colors.BLACK};

  @media screen and (min-width: 768px) {
    margin-left: 45px;
  
    width: 115px;
  }
`;

export const WorkInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 5px 16px;

  h2 {
    font-size: 13px
  }

  p {
    font-size: 10px
  }

  @media screen and (min-width: 768px) {
    padding-left: 45px;

    gap: 20px;

    h2 {
      font-size: 20px;
    }

    p {
      font-size: 15px;
    }
  }
`;

export const UnderLineWorkInfo = styled.div`
  margin-left: 20px;  

  width: 215px;
  height: 1px;

  background-color: ${Colors.LIGHT_GRAY};

  @media screen and (min-width: 768px) {
    width: 320px;

    margin-left: 55px;
  }
`;

export const ThridDescriptionDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  flex-direction: column;  

  padding: 10px;

  width: 100%;
  height: 47vh;

  background-image: url('./src/img/ThirdDescriptionDiv/image-third-div.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  h2 {
    font-size: 16px;
    align-self: flex-start;
  }

  p {
    font-size: 10px;

    text-align: justify;
  }

  button {
    align-self: flex-start;
  }

  @media screen and (min-width: 768px) {
    height: 60vh;

    h2 {
      font-size: 20px;
    }

    p {
      font-size: 15px;
    }
  }
`;

export const TitleTextThirdDiv = styled.p`
  font-weight: 600;
  font-size: 10px;
`;

export const UnderLineThirdDiv = styled.div`
  width: 275px;
  height: 3px;

  border-radius: 10px;

  background-color: ${Colors.BLACK};

  @media screen and (min-width: 768px) {
    width: 412px;
  }
`;

export const ContainerThirdDiv = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-around;

  @media screen and (min-width: 768px) {
    width: 50%;

    justify-content: stretch;
    justify-content: center;

    gap: 40px;
  }
`;

export const ContainerItemsThirdDiv = styled.div`
width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-around;

  @media screen and (min-width: 768px) {
    gap: 40px;
  }
`;

export const ItemsThirdDiv = styled.img`  
  border: 1px solid ${Colors.BLACK};
  border-radius: 10px;

  background-color: ${Colors.WHITE};
`;

export const ArrowThirdDiv = styled.img``;