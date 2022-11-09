import { useState } from "react";
import styled from "styled-components";
import { Footer } from "../Footer";
import BodyApp from "./Body/Body";
import { HeaderApp } from "./Header/Header";
import SideBar from "./SideBar/SideBar";

export default function ClientHome(){

  const [sideBar, setSideBar] = useState(false)

  function sideOpenClose() {
    setSideBar(old => !old)
  }
  
  return(
    <>
    <HeaderApp functionSideBar={sideOpenClose}/>
    {sideBar === true ? 
    <SideBar openOrClose={sideBar}/> 
    : 
    <SideBar openOrClose={sideBar}/>
    }
    <BodyApp />
    <Footer/>
    </>
  )
}