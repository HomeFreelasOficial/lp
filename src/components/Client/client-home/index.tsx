import { useState } from "react";
import { Footer } from "../../Footer";
import Header from "../../Header";
import SideBar from "../../SideBar";
import BodyApp from "./Body/Body";


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