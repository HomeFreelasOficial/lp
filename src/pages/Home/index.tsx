import { Header } from '../../components/Header';
import './styles.css'

export function Home(){
  return(
    <>
    <Header />

    <div className="container-first-description">
      <h2>Proporcionamos resolver seu problema e gerar trabalho para profissionais</h2>
      <p>Viabilizando a conexão entre cliente e profissional visamos solucionar sua necessidade e dar a oportunidade de trabalho para o profissional de forma prática e segura</p>

      <img src="./src/img/FirstDescriptionDiv/image-first-div.png" alt="Imagem Primeira Seção" className='image-first-div' />

      <button className='btn-signUp'>Quero me Cadastrar</button>
    </div>

    <div className="container-second-description">
      <div className="container-work-description">
        <div className="buttons-work">
          <div className="work-with-us">
            <img src="./src/img/SecondDescriptionDiv/support-pink.png" alt="Imagem Trabalhe conosco" />
            <small>Trabalhe conosco</small>
          </div>

          <div className="request-professionals">
            <img src="./src/img/SecondDescriptionDiv/zoom-in-black.png" alt="Imagem Solicite Profissional" />
            <small>Solicite profissionais</small>
          </div>
        </div>
        <div className="work-infos">
          <h2 id='changeTitle'>Trabalhe de forma informal</h2>
          <p id='changeTextP'>Ofereça seus serviços na nossa plataforma de forma prática e viável.</p>
        </div>
        <small className='work-informally-with-us'>Saiba como trabalhar informalmente conosco</small>
      </div>
    </div>

    <footer>

    </footer>
    </>
  );
}