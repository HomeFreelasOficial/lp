import { useState, useContext, useRef } from "react"
import  * as S from "./styles"
import { UserContext } from "../../../context/user";
import axios from 'axios'
import { MutableRefObject } from 'react'
import convert from "../../../gateways/convertFile";

interface IInformationCard {
    isEditable: boolean,
    file: File
}

export default function Informations(props: IInformationCard) {
    const inputRef = useRef<HTMLInputElement>(null)
    const {dataUser} = useContext(UserContext)
    const professionalAccount = dataUser.accounts?.find(account => account.type === 'professional')
    const [types, setTypes] = useState({
      'electric': !!professionalAccount?.jobTypes.find(jobType => jobType.name === 'electric'),
      'plumbing': !!professionalAccount?.jobTypes.find(jobType => jobType.name === 'plumbing'),
      'technical_repairs': !!professionalAccount?.jobTypes.find(jobType => jobType.name === 'technical_repairs')
    })

    const send = async () => {
      const paymentPerHours = inputRef.current?.value
      const Picture = new Blob([props.file])
      const pictureBase64 = await convert(Picture)
      await axios.patch(`http://localhost:1234/accounts/${professionalAccount?.id}`, {
        perHours: +paymentPerHours!,
        jobTypes: Object.keys(types),
        pictureBase64
      },
      {
        headers: {
          Authorization: dataUser.token
        }
      })


    }

    return (
    <>
        <S.Card>
          <S.TextBold>Áreas de atuação</S.TextBold>
          {props.isEditable ? <>
            <S.Text>Encanamento</S.Text>
          <S.JobButton 
          isClicked={types['plumbing']} 
          color='#116AD2'
          onClick={() => setTypes(old => ({ ...old, plumbing: !old.plumbing }))}
          >{types['plumbing'] ? 'Ativo' : 'Ativar'}</S.JobButton>
          <S.Text>Elétrica</S.Text>
          <S.JobButton 
          isClicked={types['electric']} 
          color='#F8B137'
          onClick={() => setTypes(old => ({ ...old, electric: !old.electric }))}
          >{types['electric'] ? 'Ativo' : 'Ativar'}</S.JobButton>
          <S.Text>Reparos Técnicos</S.Text>
          <S.JobButton 
          isClicked={types['technical_repairs']} 
          color='#FF3A5E'
          onClick={() => setTypes(old => ({ ...old, technical_repairs: !old.technical_repairs }))}
          >{types['technical_repairs'] ? 'Ativo' : 'Ativar'}</S.JobButton>
          </>  :  <>

          <S.Text>Encanamento</S.Text>
          <S.JobButton 
          isClicked={types['plumbing']} 
          color='#116AD2'
          >{types['plumbing'] ? 'Ativo' : 'Ativar'}
          </S.JobButton>

          <S.Text>Elétrica</S.Text>
          <S.JobButton 
          isClicked={types['electric']} 
          color='#F8B137'
          >{types['electric'] ? 'Ativo' : 'Ativar'}
          </S.JobButton>
          
          <S.Text>Reparos Técnicos</S.Text>
          <S.JobButton 
          isClicked={types['technical_repairs']} 
          color='#FF3A5E'
          >{types['technical_repairs'] ? 'Ativo' : 'Ativar'}</S.JobButton>
          </>}
         <S.Label>Preço cobrado por hora trabalhada</S.Label>
         <S.Input placeholder="Ex: R$:50,00" ref={inputRef} />
       </S.Card>
       <S.SaveButton onClick={send}>Salvar</S.SaveButton>
    </>
    )
}