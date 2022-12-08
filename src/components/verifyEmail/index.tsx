import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { redirect, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { BodyOrganizer, Card, Wrapper } from "../Client/client-call-service/styles";
import { Text, TextBold } from "../Client/client-home/styled";
import { Footer } from "../Footer";
import Header from "../Header";
import { HeaderCadastro } from "../signin/Header/Header";
import * as S from './styled'


export default function VerifyEmail(){
    const [ searchParams ] = useSearchParams()
    const hash = searchParams.get('hash')
    const timeout = useRef(0);
    const navigate = useNavigate();


    useEffect(() => {
        axios.post('https://api.homefreelas.com.br/auth/verificate' , {
            hash: hash
        }).then((res) => {
           console.log(res.status)
           if(res.status === 200){ 

            return setTimeout(() => navigate('/signin'), 1000*3)}
        }).catch((error) => {
            console.log(error)
        })
    },[])
    
    return(
        <>
        <Wrapper>
            <Header url="/" visible={false}/>
            <S.BodyWrapper>
                <S.Card>
                    <TextBold>Seu email foi verificado!</TextBold>
                    <Text>Você será direcionado para a tela de login</Text>
                </S.Card>
            </S.BodyWrapper>
            <Footer/>
        </Wrapper>
        </>
    )
}