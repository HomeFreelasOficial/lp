import Section from '../../../Section';

import * as S from './styled';

export default function Main() {

  return(
    <Section>
      <S.Wrapper>
        <S.CardLocalization>
          <S.ContainerCardLocalization>
            <S.TextBold>
              Ative a localização
            </S.TextBold>
            <S.Text>
            Para usar o aplicativo e seus recursos é necessário ativar a localização.
            </S.Text>
          </S.ContainerCardLocalization>
          <S.IconeLocation/>
        </S.CardLocalization>
        <S.CardButton>
          <S.TextBold>
            Faça Freelas para clientes da sua região!
          </S.TextBold>  
          <S.ButtonSearch to='/profissional/clientes-encontrados'>
            Procurar clientes próximos
          </S.ButtonSearch>
        </S.CardButton>
      </S.Wrapper>
    </Section>
  );
}