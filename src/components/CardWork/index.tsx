import { useState } from 'react';

import * as S from './styled';

export default function CardWork() {
  const [active, setActive] = useState<boolean>(false);

  return(
    <S.Container>
      <S.Wrapper>
        <S.ImageClient src="testUser.png" alt="imagem do cliente"/>
        <S.WrapperNameAndProblem>
          <S.NameUser>João Miranda</S.NameUser>
          <S.Problem>Encanamento</S.Problem>
        </S.WrapperNameAndProblem>
        <S.Arrow active={active} onClick={() => setActive(old => !old)}/>
      </S.Wrapper>
      <S.ButtonAccept>
        Confirmar
      </S.ButtonAccept>
    </S.Container>
  );
}