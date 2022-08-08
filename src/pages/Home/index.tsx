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

    </div>

    <footer>

    </footer>
    </>
  );
}