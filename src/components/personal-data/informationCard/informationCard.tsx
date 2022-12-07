import { useState, useContext, useRef } from "react"
import  * as S from "./styles"
import { UserContext } from "../../../context/user";
import axios from 'axios'

interface IInformationCard {
    isEditable: boolean
}

export default function Informations(props: IInformationCard) {
    
    const inputRef = useRef<HTMLInputElement>(null)
    const {dataUser} = useContext(UserContext)
    const [plumbing, setPlumbing] = useState<boolean>(false)
    const [electric, setElectric] = useState<boolean>(false)
    const [technicalRepairs, setTechnicalRepairs] = useState<boolean>(false)

    function changeJobSettings (old: boolean, setJob: React.Dispatch<React.SetStateAction<boolean>>){
        setJob(!old)
    }

    const send = async () => {
      const paymentPerHours = inputRef.current?.value

      await axios.patch(`http://localhost1234/accounts/${dataUser.user?.id}`, {
        paymentPerHours,
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
          isClicked={plumbing} 
          color='#116AD2'
          onClick={() => changeJobSettings(plumbing, setPlumbing)}
          >{plumbing ? 'Ativo' : 'Ativar'}</S.JobButton>
          <S.Text>Elétrica</S.Text>
          <S.JobButton 
          isClicked={electric} 
          color='#F8B137'
          onClick={() => changeJobSettings(electric, setElectric)}
          >{electric ? 'Ativo' : 'Ativar'}</S.JobButton>
          <S.Text>Reparos Técnicos</S.Text>
          <S.JobButton 
          isClicked={technicalRepairs} 
          color='#FF3A5E'
          onClick={() => changeJobSettings(technicalRepairs, setTechnicalRepairs)}
          >{technicalRepairs ? 'Ativo' : 'Ativar'}</S.JobButton>
          </>  :  <>

          <S.Text>Encanamento</S.Text>
          <S.JobButton 
          isClicked={plumbing} 
          color='#116AD2'
          >{plumbing ? 'Ativo' : 'Ativar'}
          </S.JobButton>

          <S.Text>Elétrica</S.Text>
          <S.JobButton 
          isClicked={electric} 
          color='#F8B137'
          >{electric ? 'Ativo' : 'Ativar'}
          </S.JobButton>
          
          <S.Text>Reparos Técnicos</S.Text>
          <S.JobButton 
          isClicked={technicalRepairs} 
          color='#FF3A5E'
          >{technicalRepairs ? 'Ativo' : 'Ativar'}</S.JobButton>
          </>}
         <S.Label>Preço cobrado por hora trabalhada</S.Label>
         <S.Input placeholder="Ex: R$:50,00" ref={inputRef} />
       </S.Card>
       <S.SaveButton onClick={send}>Salvar</S.SaveButton>
    </>
    )
}