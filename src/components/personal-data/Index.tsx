import { useState } from "react";
import { Footer } from "./Footer/Footer"; 
import { HeaderCadastro } from "./Header/Header";
import  Informations  from './informationCard/informationCard'
import SideBar from "./SideBar/SideBar";
import ProfilePicture from "./profilePicture/profilePicture";

export default function PersonalData() {

    const [sideBar, setSideBar] = useState(false)

    return (
        <>
        <HeaderCadastro />
        <SideBar/> 
        <ProfilePicture/>
        <Informations/>
        <Footer/>
        </>
    )
}