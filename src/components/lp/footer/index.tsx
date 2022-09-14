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
                        
                    </S.ItemsFooterDiv>

                    <S.ItemsFooterDiv>
                        <S.TitleColumns>
                            Empresa
                        </S.TitleColumns>
                    </S.ItemsFooterDiv>

                    <S.ItemsFooterDiv>
                        <S.TitleColumns>
                            Download
                        </S.TitleColumns>
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