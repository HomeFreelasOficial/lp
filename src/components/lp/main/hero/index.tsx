import Button from "../../button";
import Section from "../../section";
import * as S from "./styled";

import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <>
      <Section background="var(--gray)">
        <S.Wrapper>
          <S.Content>
            <S.Title>
              Proporcionamos resolver seu problema e gerar trabalho para
              profissionais
            </S.Title>
            <S.Text>
              Viabilizando a conexão entre cliente e profissional visamos
              solucionar sua necessidade e dar a oportunidade de trabalho para o
              profissional de forma prática e segura.
            </S.Text>
            <Button label="Quero me cadastrar" variant="primary" onClick={() => navigate('/signUp')} />
          </S.Content>
          <S.Image />
        </S.Wrapper>
      </Section>
    </>
  );
}
