import axios from "axios";
import { useEffect } from "react";
import { redirect, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { BodyOrganizer, Card, Wrapper } from "../Client/client-call-service/styles";
import { Texto, TextoBold } from "../Client/client-home/Body/styles";
import { HeaderCadastro } from "../signin/Header/Header";
import { Footer } from "../Footer";



export default function VerifyEmail(){
    const [ searchParams ] = useSearchParams()
    const hash = searchParams.get('hash')
    let navigate = useNavigate()

    useEffect(() => {
        axios.post('https://api.homefreelas.com.br/auth/verificate' , {
            hash: hash
        }).then((res) => {
           console.log(res.status)
           if(res.status === 200) return navigate('/signin')
        }).catch((error) => {
            console.log(error)
        })
    })
    
    return(
        <>
        <Wrapper>
            <HeaderCadastro path=""/>
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