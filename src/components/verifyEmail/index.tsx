import axios from "axios";
import { useEffect } from "react";
import { redirect, useParams, useSearchParams } from "react-router-dom";
import { BodyOrganizer, Card, Wrapper } from "../Client/client-call-service/styles";
import { Texto, TextoBold } from "../Client/client-home/Body/styles";
import { HeaderCadastro } from "../signin/Header/Header";
import { Footer } from "../Footer";



export default function VerifyEmail(){
    const { hash } = useParams()

    useEffect(() => {
        axios.post('localhost:3000/email-verification' , {
            hash: hash
        }).then((res) => {
            if(res.status === 200) return redirect('/signin')
        }).catch((error) => {
            console.log(error)
        })
    })
    
    return(
        <>
        <Wrapper>
            <HeaderCadastro/>
            <BodyOrganizer>
                <Card>
                    <TextoBold>Seu email foi verificado!</TextoBold>
                    <Texto>Você será direcionado para a tela de login</Texto>
                </Card>
            </BodyOrganizer>
            <Footer/>
        </Wrapper>
        </>
    )
}