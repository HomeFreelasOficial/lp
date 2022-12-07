import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { redirect, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { BodyOrganizer, Card, Wrapper } from "../Client/client-call-service/styles";
import { Text, TextBold } from "../Client/client-home/styled";
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
                    <TextBold>Seu email foi verificado!</TextBold>
                    <Text>Você será direcionado para a tela de login</Text>
                </Card>
            </BodyOrganizer>
            <Footer/>
        </Wrapper>
        </>
    )
}