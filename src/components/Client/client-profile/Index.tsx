import { useState } from "react";
import Informations from "./informationCard/informationCard";
import SideBar from "../../SideBar";
import ProfilePicture from "./profilePicture/profilePicture";
import Header from "../../Header";
import { Footer } from "../../Footer";
import { Styles as S} from './styled'

export default function ClientData() {

    const [isEditable, setIsEditable] = useState<boolean>(false)
    const name = 'Alceu Dispor'
    
    return (
        <S.Wrapper>
             <Header visible={false} url="/cliente/inicio"/>
            <S.Body>
                <S.ProfileDiv>
                 <ProfilePicture thumb="../../../src/assets/img/AlceuDispor.svg"/>
                 <S.EditButton isClicked={isEditable} onClick={() => setIsEditable(!isEditable)}/>
                </S.ProfileDiv>
            
            <S.TextBold>{name}</S.TextBold>
                
            <Informations isEditable={isEditable}/>
            </S.Body>
        <Footer/>
        </S.Wrapper>
    )
}