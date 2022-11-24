import { useNavigate } from 'react-router-dom';
import * as S from './styled';

import Section from '../../Section';
import Loading from '../../Loading';

export default function SearchClients() {
  const navigate = useNavigate();

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