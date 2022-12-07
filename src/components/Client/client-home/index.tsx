import { useState } from "react";
import { Footer } from "../../Footer";
import Header from "../../Header";
import Section from "../../Section";
import SideBar from "../../SideBar";
import * as S from './styled'


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
    <Section>
    <S.Wrapper>
        <S.CardLocalization>
          <S.ContainerCardLocalization>
            <S.TextBold>
              Ative a localização
            </S.TextBold>
            <S.Text>
            Para usar o aplicativo e seus recursos é necessário ativar a localização.
            </S.Text>
          </S.ContainerCardLocalization>
          <S.IconeLocation/>
        </S.CardLocalization>
        <S.CardButton>
          <S.TextBold>
            Deu ruim? Peça um freela
          </S.TextBold>  
          <S.ButtonSearch to='/cliente/pedir-servico'>
            Procurar profissionais próximos
          </S.ButtonSearch>
        </S.CardButton>
      </S.Wrapper>
    </Section>
   
    <Footer/>
    </>
  )
}