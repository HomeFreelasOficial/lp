import { useState } from "react";
import styled from "styled-components";
import { Footer } from "../../signin/Footer/Footer";
import BodyApp from "./Body/Body";
import { HeaderApp } from "./Header/Header";
import SideBar from "./SideBar/SideBar";




export default function ClientHome(){

  const [sideBar, setSideBar] = useState(false)

  return(
    <>
    <HeaderApp funcao={() => {
      setSideBar(!sideBar)
    }}/>
    {sideBar === true? <SideBar funcao={() => {
      setSideBar(!sideBar)
    }}/> : <></>}
    <BodyApp />
    <Footer/>
    </>
  )
}