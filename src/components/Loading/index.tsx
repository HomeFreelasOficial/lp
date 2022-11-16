import * as S from './styled';

import loading from '../../assets/img/loading.svg';

export default function Loading() {
  return(
    <S.Container>
      <S.Loader src={loading} alt="carregando"/>
    </S.Container>
  );
}