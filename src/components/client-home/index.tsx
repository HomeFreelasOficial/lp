import { useState } from "react";
import { Footer } from "../Footer";
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