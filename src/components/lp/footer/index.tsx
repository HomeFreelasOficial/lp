import * as S from './styled';

export default function Footer() {
    return(
        <>
            <S.Container>
                <S.ColumnsDiv>
                    <S.ItemsFooterDiv>
                        <S.TitleColumns>
                            HomeFreelas
                        </S.TitleColumns>
                        <S.ItemsColumns>
                            Diferencias
                        </S.ItemsColumns>
                        <S.ItemsColumns>
                            Segurança
                        </S.ItemsColumns>
                        <S.ItemsColumns>
                            Privacidade e termos
                        </S.ItemsColumns>
                    </S.ItemsFooterDiv>

                    <S.ItemsFooterDiv>
                        <S.TitleColumns>
                            Empresa
                        </S.TitleColumns>
                        <S.ItemsColumns>
                            Sobre nós
                        </S.ItemsColumns>
                        <S.ItemsColumns>
                            Fale conosco
                        </S.ItemsColumns>
                        <S.ItemsColumns>
                            Acesse o suporte
                        </S.ItemsColumns>
                    </S.ItemsFooterDiv>

                    <S.ItemsFooterDiv>
                        <S.TitleColumns>
                            Download
                        </S.TitleColumns>
                        <S.ItemsColumns>
                            Desktop                               
                        </S.ItemsColumns>
                        <S.ItemsColumns>
                            Android              
                        </S.ItemsColumns>
                    </S.ItemsFooterDiv>
                </S.ColumnsDiv>

                <S.SpanCopyright>
                    <S.SpanItem>
                        2022 © HomeFreelas
                    </S.SpanItem>

                    <S.SpanItem>
                        Privacidade e termos
                    </S.SpanItem>
                </S.SpanCopyright>
            </S.Container>
        </>
    );
}