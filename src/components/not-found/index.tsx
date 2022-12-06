import * as S from './styled'

export default function Main() {
  return(
    <S.Container>
      <S.Wrapper>
        <S.Title>404</S.Title>
        <S.Description>Não foi possível chegar a rota que você está procurando.</S.Description>
        <S.ButtonHome>Voltar para o início</S.ButtonHome>
      </S.Wrapper>
    </S.Container>
  );
}