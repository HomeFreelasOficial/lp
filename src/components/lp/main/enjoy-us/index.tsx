import Button from "../../button";
import Section from "../../section";
import * as S from "./styled";

export default function EnjoyUs() {
  return (
    <Section background="url(/assets/enjoy-us-background.svg)">
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
    </Section>
  );
}
