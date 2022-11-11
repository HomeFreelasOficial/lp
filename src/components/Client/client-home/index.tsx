import { useState } from "react";
<<<<<<< HEAD:src/components/client-home/index.tsx
import { Footer } from "../Footer";
=======
import styled from "styled-components";
import { Footer } from "../../signin/Footer/Footer";
>>>>>>> main:src/components/Client/client-home/index.tsx
import BodyApp from "./Body/Body";
import { HeaderApp } from "../Header";
import SideBar from "./SideBar";

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