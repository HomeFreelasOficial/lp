import { TextBold } from '../client-home/styled'
import { Footer } from '../../Footer'
import {
  BodyOrganizer,
  Wrapper,
  CardBotao,
} from './styles'
import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../Header'
import SideBar from '../../SideBar'
import { JobContext } from '../../../context/job'

export default function ClientWaitingForFreela() {

  const [sideBar, setSideBar] = useState(false)
  function sideOpenClose() {
    setSideBar(old => !old)
  }
 
  return (
    <Wrapper>
       <Header visible={true} url="/cliente/inicio" functionSideBar={sideOpenClose}/>
        {sideBar === true ? 
        <SideBar openOrClose={sideBar}/> 
        : 
        <SideBar openOrClose={sideBar}/>
        }
      <BodyOrganizer>
        <CardBotao>
          <TextBold>
            Esperando algum profissional atender o chamado...
          </TextBold>
        </CardBotao>
      </BodyOrganizer>
      <Footer />
    </Wrapper>
  )
}
