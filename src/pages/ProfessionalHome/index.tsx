import { useState } from 'react';

import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import Main from '../../components/Professional/professional-home/main';
import { Footer } from '../../components/Footer';

export default function ProfessionalHome() {
  const [sideBar, setSideBar] = useState(false)

  return( 
    <>
      <Header visible={true} url="/profissional/inicio" functionSideBar={() => setSideBar(old => !old)} isOpened={sideBar}/>
      {sideBar === true ? 
      <SideBar type='professional' openOrClose={sideBar}/> 
      : 
      <SideBar type='professional' openOrClose={sideBar}/>
      }
      <Main />
      <Footer/>
    </>
  );
}