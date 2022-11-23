import { useState } from "react";
import { Footer } from "../../Footer";
import BodyApp from "./Body/Body";
import Header from "../../Header";
import SideBar from "../../SideBar";

export default function ClientHome(){

  const [sideBar, setSideBar] = useState(false)

  function sideOpenClose() {
    setSideBar(old => !old)
  }
  
  return(
    <>
    <Header visible={true} url="/cliente/inicio" functionSideBar={sideOpenClose}/>
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