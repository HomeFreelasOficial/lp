import { TextoBold } from "../../client-home/Body/styles";
import * as S from "./stylesR";

export default function Return(){
    return(
        <>
        <S.Card>
            <TextoBold>Selecione o método de pagamento</TextoBold>
            <S.ConfirmBtn>Confirmar</S.ConfirmBtn>
        </S.Card>
        </>
    )
} 