import * as S from './styled';

import Section from '../../../Section';
import CardWork from '../../../CardWork';

export default function Main() {
  return(
    <Section>
      <S.Container>
        <S.BoxWrapper>
          <S.Title>Clientes encontrados:</S.Title>
          <S.RootList>
            <S.ViewportList>
              <CardWork />
              <CardWork />
              <CardWork />
              <CardWork />
              <CardWork />
            </S.ViewportList>
            <S.ScrollbarList orientation='vertical'>
              <S.ThumbList />
            </S.ScrollbarList>
            <S.Corner />
          </S.RootList>
        </S.BoxWrapper>
      </S.Container>
    </Section>
  );
}