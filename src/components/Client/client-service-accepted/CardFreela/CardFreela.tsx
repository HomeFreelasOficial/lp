import styled from "styled-components";
import { Texto, TextoBold } from "../../client-home/Body/styles";
import { Card, DivInfo } from "./styles";

interface ICardFreela {
  name: string,
  imgURL: string,
  price: string
}

export default function CardFreela(props: ICardFreela){

  const FreelaPicture = styled.img`
    width: 55px;
    height: 55px;
    border-radius: 32px;
    content: url(${props.imgURL});
  `
  return(
    <Card>
      <FreelaPicture alt={props.name}/>
      <DivInfo>
      <TextoBold>{props.name}</TextoBold>
      <Texto>{props.price}</Texto>
      </DivInfo>
    </Card>
  )
  
}