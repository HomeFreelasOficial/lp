import { useRef } from "react"
import * as S from "./styles"

interface informationProps {
    isEditable: boolean;
}

export default function Informations({ isEditable }: informationProps) {

    const email = useRef<HTMLInputElement>(null)
    const cpf = useRef<HTMLInputElement>(null)


    return (
        <>
            <S.Card>
                <S.Label>E-mail: {email.current?.value} </S.Label>
                <S.Label>CPF: {cpf.current?.value}</S.Label>
            </S.Card>
        </>


    );
}
