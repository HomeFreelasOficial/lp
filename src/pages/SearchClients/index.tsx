import { useState } from 'react';

import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import Main from '../../components/Professional/professional-home/main';
import { Footer } from '../../components/Footer';

export default function SearchClients() {
  const [sideBar, setSideBar] = useState(false)

  return( 
    <>
      <Header url="/profissional/inicio" functionSideBar={() => setSideBar(old => !old)} isOpened={sideBar}/>
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