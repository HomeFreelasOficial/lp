import { useState, useContext } from "react";
import  Informations  from './informationCard/informationCard'
import SideBar from "../SideBar";
import ProfilePicture from "./profilePicture/profilePicture";
import Header from "../Header";
import { Footer } from "../Footer";
import { Styles as S} from './styled'
import { UserContext } from "../../context/user";

export default function PersonalData() {

    const {dataUser} = useContext(UserContext)
    const [sideBar, setSideBar] = useState(false)
    const [isEditable, setIsEditable] = useState<boolean>(false)
    const name = 'Alceu Dispor'

    function sideOpenClose() {
    setSideBar(old => !old)
    }

    return (
        <S.Wrapper>
             <Header visible={true} isOpened={sideBar} url="/cliente/inicio" functionSideBar={sideOpenClose}/>
            {sideBar === true ? 
            <SideBar openOrClose={sideBar}/> 
            : 
            <SideBar openOrClose={sideBar}/>
            }
            <S.Body>
                <S.ProfileDiv>
                 <ProfilePicture thumb="./src/assets/img/AlceuDispor.svg"/>
                 <S.EditButton isClicked={isEditable} onClick={() => setIsEditable(!isEditable)}/>
                </S.ProfileDiv>
            
            <S.TextBold>{dataUser.user?.name}</S.TextBold>
                
            <Informations isEditable={isEditable}/>
            </S.Body>
        <Footer/>
        </S.Wrapper>
    )
}