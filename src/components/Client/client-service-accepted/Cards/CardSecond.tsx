import { TextoBold } from "../../client-home/Body/styles";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import * as S from './styles';


export default function CardSecond(){
    
    const navegate = useNavigate();

    const ButtonPay = styled.button`
    color: white;
    background-color: #47EE6C;
    padding: 2rem 6rem;
    border-radius: 10px;
    font-size: 2.5rem;

    @media (min-width: 720px){
        padding: 1rem 8rem;
        border-radius: 5px;
        font-weight: 600;

        font-size: 1.5rem;

    }`

    return(
        <>
        <S.BodyOrganizer>
            <S.Card>
            <TextoBold>
            Confirme a finalização do serviço.
            </TextoBold>
            <ButtonPay onClick={()=>{ navegate('/cliente/servico-aceito/pagamento')} } >Ir para o pagamento</ButtonPay>
            </S.Card>
        </S.BodyOrganizer>
        </>
    )
}