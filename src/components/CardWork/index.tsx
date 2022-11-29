import { useState } from 'react';

import * as S from './styled';

interface CardWorkPros {
  id: string,
  description: string,
  type: 'plumbing' |  'electric' | 'technical_repairs',
  thumb: string,
  name: string,
}

export default function CardWork({ id, description, type, name, thumb }: CardWorkPros) {
  const [active, setActive] = useState<boolean>(false);

  return(
    <S.Container>
      <S.Wrapper>
        <S.ImageClient src={thumb} alt="imagem do cliente"/>
        <S.WrapperNameAndProblem>
          <S.NameUser>{name}</S.NameUser>
          <S.Problem>{type}</S.Problem>
        </S.WrapperNameAndProblem>
        <S.Arrow active={active} onClick={() => setActive(old => !old)}/>
      </S.Wrapper>
        <S.WrapperDescription active={active}>
          <S.ShortDescription>
            {description}
          </S.ShortDescription>
        </S.WrapperDescription>
      <S.ButtonAccept to={`/profissional/clientes-encontrados/${id}`} >
        Confirmar
      </S.ButtonAccept>
    </S.Container>
  );
}