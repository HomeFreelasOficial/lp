import { useRef } from "react"
import * as S from "./styles"

interface Information {
    email: string,
    cpf: string
}

export default function Informations(props: Information) {

    return (
        <>
            <S.Card>
                <S.Label>E-mail: {props.email} </S.Label>
                <S.Label>CPF: {props.cpf}</S.Label>
            </S.Card>
        </>


    );
}
