import { useRef } from "react"
import  * as S from "./styles"

interface informationProps{
    isEditable: boolean;
}

export default function Informations({isEditable} : informationProps) {

    const address = useRef<HTMLInputElement>(null);
    const email = useRef<HTMLInputElement>(null)
    const phone = useRef<HTMLInputElement>(null)
    const cpf = useRef<HTMLInputElement>(null)
    const gender = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)

    const hashPassword = password.current?.value.replace(password.current?.value, '*****')

    return(
        <>
            {isEditable ? 
            <>
                <S.Card>
                    <S.Input placeholder="Endereço" ref={address}/>
                    <S.Input placeholder="E-mail" ref={email}/>
                    <S.Input placeholder="Telefone" ref={phone}/>
                    <S.Input placeholder="CPF" ref={cpf}/>
                    <S.Input placeholder="Gênero" ref={gender}/>
                    <S.Input placeholder="Senha" ref={password}/>
                </S.Card>
            </>
            :
            <>
                <S.Card>
                    <S.Label>Endereço: {address.current?.value} </S.Label>
                    <S.Label>E-mail: {email.current?.value} </S.Label>
                    <S.Label>Telefone: {phone.current?.value} </S.Label>
                    <S.Label>CPF: {cpf.current?.value}</S.Label>
                    <S.Label>Gênero: {gender.current?.value} </S.Label>
                    <S.Label>Senha: {hashPassword}</S.Label>
                </S.Card>
            </> 
            }
        </>
    );
}
