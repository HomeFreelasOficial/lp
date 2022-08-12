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

  background-color: ${Colors.BACKGROUND_PRIMARY}
`;

export const TitleFirstDiv = styled.h1`
  padding: 10px;

  font-size: 16px;
  text-align: justify;

  color: ${Colors.WHITE}
`;

export const TextFirstDiv = styled.p`
  width: 45%;
  padding: 10px;

  font-size: 13px;
  text-align: justify;

  color: ${Colors.WHITE}
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
`;

export const SecondDescriptionDiv = styled.div`
  display: flex;
  justify-content: center;

  padding-top: 25px;

  width: 100%;
  height: 40vh;

  background-image: url('./src/img/SecondDescriptionDiv/image-second-div.png');
  background-repeat: no-repeat
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
`;

export const WorkInfo = styled.div`
  padding: 5px 16px;

  h2 {
    font-size: 13px
  }

  p {
    font-size: 10px
  }
`;

export const UnderLineWorkInfo = styled.div`
  margin-left: 20px;  

  width: 215px;
  height: 1px;

  background-color: ${Colors.LIGHT_GRAY};
`;

export const ThridDescriptionDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  flex-direction: column;  

  padding: 10px;

  width: 100%;
  height: 315px;

  background-image: url('./src/img/ThirdDescriptionDiv/image-third-div.png');
  background-repeat: no-repeat;

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
`;

export const ContainerThirdDiv = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const ContainerItemsThirdDiv = styled.div`
width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const ItemsThirdDiv = styled.img`
  
  border: 1px solid ${Colors.BLACK};
  border-radius: 10px;

  background-color: ${Colors.WHITE};
`;

export const ArrowThirdDiv = styled.img`

`;