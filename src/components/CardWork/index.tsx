import { useState } from 'react';
import { Job } from '../../entities/job';

import * as S from './styled';

interface Itypes {
  name: string;
}

const typeName: { [key: string]: Itypes } = {
  plumbing: {
    name: 'Encanamento'
  },
  electric: {
    name: 'Elétrica'
  },
  technical_repairs: {
    name: 'Reparos técnicos'
  },
}

export default function CardWork(props: Job) {
  const [active, setActive] = useState<boolean>(false);


  return(
    <S.Container>
      <S.Wrapper>
        <S.ImageClient src={props.clientPicture} alt="imagem do cliente"/>
        <S.WrapperNameAndProblem>
          <S.NameUser>{props.clientName}</S.NameUser>
          <S.Problem>{typeName[props.type?.name].name}</S.Problem>
        </S.WrapperNameAndProblem>
        <S.Arrow active={active} onClick={() => setActive(old => !old)}/>
      </S.Wrapper>
        <S.WrapperDescription active={active}>
          <S.ShortDescription>
            {props.description}
          </S.ShortDescription>
        </S.WrapperDescription>
      <S.ButtonAccept to={`/profissional/clientes-encontrados/${props.id}`} >
        Confirmar
      </S.ButtonAccept>
    </S.Container>
  );
}