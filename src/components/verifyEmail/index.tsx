import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { redirect, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { BodyOrganizer, Card, Wrapper } from "../Client/client-call-service/styles";
import { Texto, TextoBold } from "../Client/client-home/Body/styles";
import { Footer } from "../Footer";
import { HeaderCadastro } from "../signin/Header/Header";


export default function VerifyEmail(){
    const [ searchParams ] = useSearchParams()
    const hash = searchParams.get('hash')
    const [time, setTime] = useState<number>(5);
    const timeout = useRef(0);
    const navigate = useNavigate();


    useEffect(() => {
        axios.post('http://localhost:1234/auth/verificate' , {
            hash: hash
        }).then((res) => {
           console.log(res.status)
           if(res.status === 200){ 

            return setTimeout(() => navigate('/signin'), 1000*5)}
        }).catch((error) => {
            console.log(error)
        })
    },[])
    
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