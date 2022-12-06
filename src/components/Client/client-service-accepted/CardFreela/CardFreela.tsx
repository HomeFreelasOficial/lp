import styled from "styled-components";
import { Texto, TextoBold } from "../../client-home/Body/styles";
import { Card, DivInfo } from "./styles";

interface ICardFreela {
  name: string,
  imgURL: string,
  price: number,
  hours: number
}

export default function CardFreela(props: ICardFreela){

  const FreelaPicture = styled.img`
    width: 65px;
    height: 65px;
    border-radius: 32px;
    content: url(${props.imgURL});

    @media (min-width: 720px){
       width: 85px;
       height: 85px;
    }

    @media (min-width: 1024px){
      width: 105px;
      height: 105px;
    }

    @media (min-width: 1366px){
      width: 125px;
      height: 125px;
    }
  `
  return(
    <Card>
      <FreelaPicture alt={props.name}/>
      <DivInfo>
      <TextoBold>{props.name}</TextoBold>
      <Texto>R${props.price+''} por hora</Texto>
      <Texto>{props.hours+''} horas estimadas</Texto>
      </DivInfo>
    </Card>
  )
  
}