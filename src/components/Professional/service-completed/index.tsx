import * as S from './styled';

import Section from '../../Section';

export default function ServiceCompleted() {
  return(
  <Section>
    <S.Container>
        <S.Card>
          <S.TextBold>Pagamento Realizado</S.TextBold>
          <S.TextBold>Serviço completo</S.TextBold>
          <S.Description>
            Obrigado por trabalhar na HomeFreelas!
          </S.Description>
          <S.ButtonReturnHome to="/profissional/inicio">
            Voltar a tela inicial
          </S.ButtonReturnHome>
        </S.Card>
    </S.Container>
  </Section>
  );
}