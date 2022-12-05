
import { TextoBold } from "../../client-home/Body/styles";
import CardFreela from "../CardFreela/CardFreela";
import { useNavigate } from "react-router-dom";
import * as S from '../styles';

export default function CardFirst(){
    return(
    <>
    <S.Card >
        <TextoBold >Pedido aceito!</TextoBold>
        <CardFreela imgURL="../src/assets/img/AlceuDispor.svg" name="Alceu Dispor" price="50R$ por hora"/>
        <TextoBold >Está a caminho</TextoBold>
    </S.Card>
    <S.ButtonConfirmService onClick={()=>{}}> Confirmar conclusão do serviço</S.ButtonConfirmService>
    </>
    )
}