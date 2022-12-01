import { useState } from 'react';
import { Job } from '../../entities/job';

import * as S from './styled';

export default function CardWork(props: Job) {
  const [active, setActive] = useState<boolean>(false);

  return(
    <S.Container>
      <S.Wrapper>
        <S.ImageClient src={props.thumb} alt="imagem do cliente"/>
        <S.WrapperNameAndProblem>
          <S.NameUser>{props.name}</S.NameUser>
          <S.Problem>{props.typeId}</S.Problem>
        </S.WrapperNameAndProblem>
        <S.Arrow active={active} onClick={() => setActive(old => !old)}/>
      </S.Wrapper>
        <S.WrapperDescription active={active}>
          <S.ShortDescription>
            {props.description}
          </S.ShortDescription>
        </S.WrapperDescription>
      <S.ButtonAccept to={`/profissional/clientes-encontrados/${props.jobId}`} >
        Confirmar
      </S.ButtonAccept>
    </S.Container>
  );
}