import { useState, useContext } from "react";
import { Text, TextBold } from "../client-home/styled";
import Header from "../../Header";
import { Footer } from "../../Footer";
import BotaoServicos from "./Botao";
import { ButtonConfirm } from "./Botao/BotaoConfirma";
import { BodyOrganizer, Wrapper, CardBotao, Card, DescriptionForm, InputTitle, Description } from "./styles";
import axios from "axios";
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../../context/user";
import { JobContext, JobContextWrapper } from "../../../context/job";
import SideBar from "../../SideBar";

export default function ClientCallService() {

  const [sideBar, setSideBar] = useState(false)

  function sideOpenClose() {
    setSideBar(old => !old)
  } 

   const [isActiveEncanamento, setIsActiveEncanamento] = useState(false)
   const [isActiveEletrica, setIsActiveEletrica] = useState(false)
   const [isActiveReparos, setIsActiveReparos] = useState(false)
   const [typeOfService, setTypeOfService] = useState("")
   const [info, setInfo] = useState({
    title: "",
    description: "",
    address: "",
    number: ""
   })
   const apiPath = 'https://api.homefreelas.com.br/jobs'
   const { dataUser } = useContext(UserContext)
   const { job, setNewJob } = useContext(JobContext)
   const navigate = useNavigate()

   const sendData = async (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    console.log(dataUser);
    const clientId = dataUser.accounts.find(account => account.type === 'client')?.id
    await axios.post(apiPath, {
      description: info.description,
      clientId,
      type: typeOfService,
      title: info.title,
      address: `${info.address}, ${info.number}`
    }, {
      headers: { 
        Authorization: dataUser.token
      }
    })
    .then((response) => {
      console.log(response)
      if (response.status == 201) {
        const refJob = {...response.data.body}
        console.log(refJob)
        setNewJob(refJob!)
        console.log(job)
        return navigate("/cliente/aguardando-freelancer")
      }
    })
    .catch(function (error) {
      console.error(error);
    });
  }

  return (
    <Wrapper>
    <Header visible={true} url="/cliente/inicio" functionSideBar={sideOpenClose}/>
    {sideBar === true ? 
    <SideBar type="client" openOrClose={sideBar}/> 
    : 
    <SideBar type="client" openOrClose={sideBar}/>
    }
    <BodyOrganizer>
    <CardBotao>
    <TextBold>Qual ?? o problema?</TextBold>
    <BotaoServicos ativo={isActiveEncanamento} funcao={() => {
      setIsActiveEncanamento(!isActiveEncanamento)
      setIsActiveReparos(false)
      setIsActiveEletrica(false)
      setTypeOfService("plumbing")
    }} cor="#116AD2" texto="Encanamento" />
    <BotaoServicos ativo={isActiveEletrica} funcao={() => {
      setIsActiveEletrica(!isActiveEletrica)
      setIsActiveEncanamento(false)
      setIsActiveReparos(false)
      setTypeOfService("electric")
    }}
     cor="#F8B137" texto="El??trica" />
    <BotaoServicos ativo={isActiveReparos} cor="#FF3A5E" funcao={() => {
      setIsActiveReparos(!isActiveReparos)
      setIsActiveEletrica(false)
      setIsActiveEncanamento(false)
      setTypeOfService("technical_repairs")
    }} texto="Reparos t??cnicos" />
    </CardBotao>
    <Card>
      <DescriptionForm>
        <TextBold>Informa????es adicionais:</TextBold>
        <Text>T??tulo do trabalho</Text>
        <InputTitle placeholder="Ex. Minha torneira quebrou!" value={info.title} onChange={(e) => { setInfo({...info, title: e.target.value})}}/>
        <Text>D?? uma descri????o mais detalhada do problema</Text>
        <Description placeholder="Ex. Estava lavando a lou??a quando a torneira parou de funcionar..." value={info.description} onChange={(e) => { setInfo({...info, description: e.target.value})}}>
        </Description>
        <TextBold>Endere??o:</TextBold>
        <Text>Nome da rua</Text>
        <InputTitle placeholder="Ex. Rua Virg??nia Ferni" value={info.address} onChange={(e) => {setInfo({...info, address: e.target.value})}}/>
        <Text>N??mero</Text>
        <InputTitle placeholder="Ex. 256" value={info.number} onChange={(e) => {setInfo({...info, number: e.target.value})}}/>
        <ButtonConfirm type='submit' text="Chamar Freela" clicado={false} componentColor="black" componentWidth="20em" onClick={(e) => sendData(e)}/>
      </DescriptionForm>
    </Card>
    </BodyOrganizer>
    <Footer/>
    </Wrapper>
  )
}