import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../button";
import Section from "../../../Section";
import * as S from "./styled";

  type Content = {
    title: string,
    description: string,
  };

  const data: { [key: string]: Content } = {
    security: {
      title: "Segurança",
      description: "Descrição Segurança",
    },
    time: {
      title: "Agilidade",
      description: "Descrição Agilidade",
    },
    solve: {
      title: "Confiabilidade",
      description: "Descrição Confiabilidade",
    },
  }

export default function EnjoyUs() {
  const [activeItemIndex, setActiveItemIndex] = useState<number>(0)

  const navigate = useNavigate();

  const firstActiveItem = activeItemIndex === 0;
  const secondActiveItem = activeItemIndex === 1;
  const thirdActiveItem = activeItemIndex === 2;

  const activeKey = firstActiveItem ? "security" : secondActiveItem ? "time" : "solve";

  return (
    <Section background="url(/assets/enjoy-us-background.svg)">
      <S.Wrapper>
        <S.Title>Serviços de qualidade, para todas as suas requisições</S.Title>
        <S.Cards>
          <S.Card>
            <S.CardIcon itsNotASolve icon="/assets/security-icon.svg" active={firstActiveItem} onClick={() => {setActiveItemIndex(0)}} />
          </S.Card>
          <S.Card>
            <S.CardIcon itsNotASolve icon="/assets/time-icon.svg" active={secondActiveItem} onClick={() => {setActiveItemIndex(1)}} />
          </S.Card>
          <S.Card>
            <S.CardIcon icon="/assets/solve-icon.svg" active={thirdActiveItem} onClick={() => {setActiveItemIndex(2)}} />
          </S.Card>
        </S.Cards>
        <S.ServiceDescription>
          <h1>{data[activeKey].title}</h1>
          <p>{data[activeKey].description}</p>
          <Button label="Cadastrar" variant="secondary" onClick={() => navigate('/signUp')} />
        </S.ServiceDescription>
      </S.Wrapper>
    </Section>
  );
}
