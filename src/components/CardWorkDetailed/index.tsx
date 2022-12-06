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

export default function CardWorkDetailed(props: Job) {
  const [ active, setActive ] = useState<boolean>(true);

  return(
    <S.Container>
      <S.Wrapper>
        <S.ImageClient src={props.clientPicture} alt="imagem do cliente"/>
        <S.WrapperNameAndProblem>
          <S.NameUser>{props.clientName}</S.NameUser>
          <S.Problem>{typeName[props.type?.name]?.name}</S.Problem>
        </S.WrapperNameAndProblem>
        <S.Arrow active={active} onClick={() => setActive(old => !old)}/>
      </S.Wrapper>
        <S.WrapperDescription active={active}>
          <S.Title>{props.title}</S.Title>
          <S.Description>
            {props.description}
          </S.Description>
          <S.Address>
            {props.address}
          </S.Address>
        </S.WrapperDescription>
        <S.WrapperButton>
          <S.ButtonAccept to="/profissional/inicio">
            Estou a caminho
          </S.ButtonAccept>
          <S.ButtonCancel to="/profissional/clientes-encontrados">
            Cancelar
          </S.ButtonCancel>
        </S.WrapperButton>
    </S.Container>
  );
}