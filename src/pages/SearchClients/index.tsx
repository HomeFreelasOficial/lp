import { useState } from 'react';

import { HeaderApp } from '../../components/Header';
import SideBar from '../../components/client-home/SideBar';
import Main from '../../components/search-clients/main';
import { Footer } from '../../components/Footer';

export default function SearchClients() {
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
    <Main />
    <Footer/>
    </>
  );
}