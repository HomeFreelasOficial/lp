import { useState } from 'react';

import Header from '../../components/Header';
import SideBar from '../../components/Client/client-home/SideBar';
import Main from '../../components/search-clients/main';
import { Footer } from '../../components/Footer';

export default function SearchClients() {
  const [sideBar, setSideBar] = useState(false)

  function sideOpenClose() {
    setSideBar(old => !old)
  }

  return(
    <>
      <Header url="/profissional/inicio" functionSideBar={sideOpenClose}/>
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