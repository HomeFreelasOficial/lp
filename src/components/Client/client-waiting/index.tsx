import { TextoBold } from '../client-home/Body/styles'
import { HeaderCadastro } from '../../signin/Header/Header'
import { Footer } from '../../signup/Footer/Footer'
import { ButtonCancel } from './Botao/ButtonCancel'
import {
  BodyOrganizer,
  Wrapper,
  CardBotao,
} from './styles'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { v4 as uuidv4} from 'uuid'
import { redirect } from 'react-router-dom'

export default function ClientWaitingForFreela() {

  const [jobId, setJobId] = useState("")

  const someId = uuidv4()

  useEffect(() => {
    setJobId(someId)
  })

  function cancelRequest(){
    axios.delete('api.homefreelas.com/job/' + jobId).then((res) => {
      if(res.status == 202)
      return redirect("/cliente/inicio")
    })
  }

  return (
    <Wrapper>
      <HeaderCadastro path='/cliente/inicio'/>
      <BodyOrganizer>
        <CardBotao>
          <TextoBold>
            Esperando algum profissional atender o chamado...
          </TextoBold>
          <ButtonCancel
            text="Cancelar"
            clicado={false}
            componentColor="#FF0000"
            componentWidth="20em"
            onClick={() => cancelRequest()}
          />
        </CardBotao>
      </BodyOrganizer>
      <Footer />
    </Wrapper>
  )
}
