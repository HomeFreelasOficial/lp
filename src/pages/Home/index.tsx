import { Header } from "../../components/Header";
import { Footer } from '../../components/Footer';

import {
  FirstDescriptionDiv,
  TitleFirstDiv,
  TextFirstDiv,
  Button,
  ImageFirstDiv,
  SecondDescriptionDiv,
  WorkDescriptionDiv,
  ButtonsWork,
  WorkWithUs,
  RequestProfessionals,
  UnderLine,
  WorkInfo,
  UnderLineWorkInfo,
  ThridDescriptionDiv,
  TitleTextThirdDiv,
  UnderLineThirdDiv,
  ContainerThirdDiv,
  ContainerItemsThirdDiv,
  ItemsThirdDiv,
  ArrowThirdDiv,  
  HeroDescription
} from './styles';


export function Home(){
  return(
   <>
    <Header />
    <FirstDescriptionDiv>
      <HeroDescription>
      <TitleFirstDiv>Proporcionamos resolver seu problema e gerar trabalho para profissionais</TitleFirstDiv>
        <TextFirstDiv>Viabilizando a conexão entre cliente e profissional visamos solucionar sua necessidade e dar a oportunidade de trabalho para o profissional de forma prática e segura</TextFirstDiv>
        <Button white >Cadastrar</Button>
        </HeroDescription>      
              
      <ImageFirstDiv src='./src/img/FirstDescriptionDiv/image-first-div.svg' alt='Imagem da Primeira Seção' />
    </FirstDescriptionDiv>
    <SecondDescriptionDiv>
      <WorkDescriptionDiv>
        <ButtonsWork>
          <WorkWithUs>
            <img src='./src/img/SecondDescriptionDiv/support.svg' alt='Imagem do primeiro botão da Segunda Seção' />
            <small>Trabalhe conosco</small>
          </WorkWithUs>
          <RequestProfessionals>
            <img src="./src/img/SecondDescriptionDiv/zoom-in.svg" alt="Imagem do segundo botão da Segunda Seção" />
            <small>Solicite profissionais</small>
          </RequestProfessionals>
        </ButtonsWork>
        <UnderLine />
        <WorkInfo>
          <h2>Trabalhe de forma informal</h2>
          <p>Ofereça seus serviços na nossa plataforma de forma prática e viável</p>
          <Button white={false}>Cadastrar</Button>
        </WorkInfo>
        <small>Saiba mais como trabalhar informalmente conosco.</small>
        <UnderLineWorkInfo />
      </WorkDescriptionDiv>
    </SecondDescriptionDiv>
    <ThridDescriptionDiv>
      <div>
        <TitleTextThirdDiv>Serviços de qualidade, para todas as suas requisições</TitleTextThirdDiv>
        <UnderLineThirdDiv />
      </div>
    <ContainerThirdDiv>
        <ArrowThirdDiv src="./src/img/ThirdDescriptionDiv/arrow-left.svg" alt="Imagem Seta Esquerda"/>
          <ContainerItemsThirdDiv>
            <ItemsThirdDiv src="./src/img/ThirdDescriptionDiv/image-shield.svg" alt="Imagem Item Segurança"/>
            <ItemsThirdDiv src="./src/img/ThirdDescriptionDiv/image-time.svg" alt="Imagem Item Tempo"/>
            <ItemsThirdDiv src="./src/img/ThirdDescriptionDiv/image-check.svg" alt="Imagem Item Serviço"/>
          </ContainerItemsThirdDiv>
        <ArrowThirdDiv src="./src/img/ThirdDescriptionDiv/arrow-right.svg" alt="Imagem Seta Direita"/>
    </ContainerThirdDiv>
      <h2>Serviço</h2>
      <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum.</p>

      <Button white={false}>Cadastrar</Button>
    </ThridDescriptionDiv>
    <Footer />
   </>
  );
}