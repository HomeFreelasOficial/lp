import { useContext, useState } from "react";
import Informations from "./informationCard/informationCard";
import SideBar from "../../SideBar";
import ProfilePicture from "./profilePicture/profilePicture";
import Header from "../../Header";
import { Footer } from "../../Footer";
import { Styles as S} from './styled'
import { UserContext } from "../../../context/user";
import axios from "axios";
import convert from '../../../gateways/convertFile'

export default function ClientData() {

    const { dataUser } = useContext(UserContext)
    const picture = dataUser.accounts.find(account => account.type === 'client')?.picture!
    const [file, setFile] = useState<File | null>(null)   
    
    const send = async () => {

        const clientAccount = dataUser.accounts?.find(account => account.type === 'client')
        const Picture = new Blob([file!])
        const pictureBase64 = await convert(Picture)
        await axios.patch(`https://api.homefreelas.com.br/accounts/${clientAccount?.id}`, {
          pictureBase64
        },
        {
          headers: {
            Authorization: dataUser.token
          }
        })
  
    }
    
    
    return (
        <S.Wrapper>
             <Header visible={false} url="/cliente/inicio"/>
            <S.Body>
                <S.ProfileDiv>
                 <ProfilePicture thumb={picture}/>
                  <S.LabelPicture>
                    <S.InputPicture 
                    placeholder="+"
                    type="file" 
                    accept="image*" 
                    onChange={({ target }) => {
                        setFile(target.files![0])
                        send()
                    }}
                    />
                  </S.LabelPicture>
                </S.ProfileDiv>           
            <S.TextBold>{dataUser.user?.name}</S.TextBold>               
            <Informations email={dataUser.user?.email!} cpf={dataUser.user?.cpf!}/>
            </S.Body>
        <Footer/>
        </S.Wrapper>
    )
}