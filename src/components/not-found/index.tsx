import { useNavigate } from 'react-router-dom';
import * as S from './styled'

export default function Main() {
  const navigate = useNavigate();

  return(
    <S.Container>
      <S.Wrapper>
        <S.Title>404</S.Title>
        <S.Description>Não foi possível chegar a rota que você está procurando.</S.Description>
        <S.ButtonHome onClick={() => navigate('/')}>Voltar para o início</S.ButtonHome>
      </S.Wrapper>
    </S.Container>
  );
}