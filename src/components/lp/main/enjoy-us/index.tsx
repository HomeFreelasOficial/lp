import { useState } from "react";
import Button from "../../button";
import Section from "../../section";
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

  const firstActiveItem = activeItemIndex === 0;
  const secondActiveItem = activeItemIndex === 1;
  const thirdActiveItem = activeItemIndex === 2;

  return (
    <Section background="url(/assets/enjoy-us-background.svg)">
      <S.Wrapper>
        <S.Title>Serviços de qualidade, para todas as suas requisições</S.Title>
        <S.Cards>
          <S.Card>
            <S.CardIcon icon="/assets/security-icon.svg" />
          </S.Card>
          <S.Card>
            <S.CardIcon icon="/assets/time-icon.svg" />
          </S.Card>
          <S.Card>
            <S.CardIcon icon="/assets/solve-icon.svg" />
          </S.Card>
        </S.Cards>
        <S.ServiceDescription>
          <h1>Título</h1>
          <p>Descrição</p>
          <Button label="Cadastrar" variant="secondary" />
        </S.ServiceDescription>
      </S.Wrapper>
    </Section>
  );
}
