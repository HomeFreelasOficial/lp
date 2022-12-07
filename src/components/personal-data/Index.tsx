import { useState, useContext, useRef } from "react";
import  Informations  from './informationCard/informationCard'
import SideBar from "../SideBar";
import ProfilePicture from "./profilePicture/profilePicture";
import Header from "../Header";
import { Footer } from "../Footer";
import { Styles as S} from './styled'
import { UserContext } from "../../context/user";

export default function PersonalData() {

    const {dataUser} = useContext(UserContext)
    const [isEditable, setIsEditable] = useState<boolean>(false)
    const [file, setFile] = useState<File | null>(null)
    const name = 'Alceu Dispor'
    
    const picture = dataUser.accounts.find(account => account.type === 'professional')?.picture!
   console.log('index ' + picture)

    return (
        <S.Wrapper>
             <Header visible={false} url="/profissional/inicio"/>
            <S.Body>
                <S.ProfileDiv>
                 <ProfilePicture thumb={dataUser.accounts.find(account => account.type === 'professional')?.picture!}/>
                 { isEditable? <S.LabelPicture>
                    <S.InputPicture 
                        placeholder="+"
                        type="file" 
                        accept="image*" 
                        onChange={({ target }) => {
                            setFile(target.files![0])
                        }} />
                 </S.LabelPicture>  : <S.EditButton onClick={() => setIsEditable(!isEditable)}/>}
                </S.ProfileDiv>
            
            <S.TextBold>{dataUser.user?.name}</S.TextBold>
                
            <Informations isEditable={isEditable} file={file!}/>
            </S.Body>
        <Footer/>
        </S.Wrapper>
    )
}