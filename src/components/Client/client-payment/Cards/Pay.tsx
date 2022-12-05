import { useNavigate } from "react-router-dom";
import { TextoBold } from "../../client-home/Body/styles";
import * as S from './stylesP';
import { Card } from "./stylesR";


export default function Pay(){
    const nav = useNavigate()
    return(
        <Card>
            <TextoBold>Pagamento realizado.</TextoBold>
            <TextoBold>Obrigado por utilizar HomeFreelas!</TextoBold>
            <S.BtnExit onClick={()=> nav("/")}>Voltar a tela inicial</S.BtnExit>
        </Card>
    )
} 