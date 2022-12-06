import * as S from './styled';

import Section from '../../Section';
import CardWork from '../../CardWork';

import { useContext } from 'react';
import { JobsContext } from '../../../context/jobs';

export default function Main() {
  const { jobs } = useContext(JobsContext);

  console.log(jobs)

  return(
    <Section>
      <S.Container>
        <S.BoxWrapper>
          <S.Title>Clientes encontrados:</S.Title>
          <S.RootList>
            <S.ViewportList>
              {jobs.map(el => (
                <CardWork key={el.id} {...el} />
              ))}
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