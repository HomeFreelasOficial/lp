import { TextoBold } from '../client-home/Body/styles'
import { Footer } from '../../Footer'
import {
  BodyOrganizer,
  Wrapper,
  CardBotao,
} from './styles'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../Header'
import SideBar from '../../SideBar'

export default function ClientWaitingForFreela() {

  const navigate = useNavigate();

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
          <TextoBold>
            Esperando algum profissional atender o chamado...
          </TextoBold>
        </CardBotao>
      </BodyOrganizer>
      <Footer />
    </Wrapper>
  )
}
