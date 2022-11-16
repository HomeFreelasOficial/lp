import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styled';

import Section from '../../../Section';
import Loading from '../../../Loading';

export default function Main() {
  const [time, setTime] = useState<number>(5);
  const timeout = useRef(0);
  const navigate = useNavigate();

  useEffect(() =>  {
    clearTimeout(timeout.current);

    timeout.current = setTimeout(() => {
      setTime(t => t - 1);
    }, 1000)

    if(time < 0) navigate('/profissional/clientes-encontrados', {
      replace: true,
    });

    return () => clearTimeout(timeout.current);
  }, [time])

  return(
    <Section>
      <S.Wrapper>
        <S.CardSearchingClients>
          <S.TextBold>
            Procurando clientes por perto...
          </S.TextBold>
          <S.ButtonCancelSearching onClick={() => navigate('/profissional/inicio')}>
            Cancelar
          </S.ButtonCancelSearching>
        </S.CardSearchingClients>
        <Loading />
      </S.Wrapper>
    </Section>
  );
}