import { useState } from "react";
import Button from "../../button";
import Section from "../../section";
import * as S from "./styled";

type Content = {
  title: string;
  description: string;
};

const data: { [key: string]: Content } = {
  workWithUs: {
    title: "Trabalhe de forma informal",
    description:
      "Ofereça seus serviços na nossa plataforma de forma prática e viável.",
  },
  requestProfessionals: {
    title: "Solicite serviços",
    description:
      "Ofereça seus serviços na nossa plataforma de forma prática e viável.",
  },
};

export default function UseOurAplication() {
  const [activeItemIndex, setActiveItemIndex] = useState<number>(0);

  const firstActiveItem = activeItemIndex === 0;
  const secondActiveItem = activeItemIndex === 1;

  const activeKey = firstActiveItem ? "workWithUs" : "requestProfessionals";

  return (
    <Section background="url(/assets/use-our-app-background.svg)">
      <S.Box>
        <div>
          <S.BoxHeader>
            <S.Button
              active={firstActiveItem}
              onClick={() => setActiveItemIndex(0)}
            >
              <S.ButtonIcon icon="/assets/work-with-us-icon.svg" />
              <S.ButtonText>Trabalhe conosco</S.ButtonText>
            </S.Button>
            <S.Button
              active={secondActiveItem}
              onClick={() => setActiveItemIndex(1)}
            >
              <S.ButtonIcon icon="/assets/request-professionals-icon.svg" />
              <S.ButtonText>Solicite profissionais</S.ButtonText>
            </S.Button>
          </S.BoxHeader>
          <S.Indicator activeItemIndex={activeItemIndex} />
        </div>
        <S.BoxMain>
          <h1>{data[activeKey].title}</h1>
          <p>{data[activeKey].description}</p>
          <Button label="Cadastrar" variant="secondary" />
        </S.BoxMain>
        <S.BoxFooter>
          <a href="#">Saiba mais como trabalhar informalmente conosco.</a>
        </S.BoxFooter>
      </S.Box>
    </Section>
  );
}
