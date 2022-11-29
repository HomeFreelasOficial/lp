import { TextoBold } from '../client-home/Body/styles'
import { HeaderCadastro } from '../../signin/Header/Header'
import { Footer } from '../../Footer'
import { ButtonCancel } from './Botao/ButtonCancel'
import {
  BodyOrganizer,
  Wrapper,
  CardBotao,
} from './styles'
import axios from 'axios'
import { useState, useEffect, useRef } from 'react'
import { v4 as uuidv4} from 'uuid'
import { redirect, useNavigate } from 'react-router-dom'

export default function ClientWaitingForFreela() {

  const [jobId, setJobId] = useState("")
  const [time, setTime] = useState<number>(5);
  const timeout = useRef(0);
  const navigate = useNavigate();

  const someId = uuidv4()

  useEffect(() => {
    setJobId(someId)

    clearTimeout(timeout.current);

    timeout.current = setTimeout(() => {
      setTime(t => t - 1);
    }, 1000)

    if(time < 0) navigate('/cliente/servico-aceito', {
      replace: true,
    });

    return () => clearTimeout(timeout.current);
  },[time])

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
