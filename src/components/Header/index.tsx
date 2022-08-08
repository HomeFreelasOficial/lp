import './styles.css'

export function Header(){  
  return (
    <>
     <header>
      <div className="image">
        <img src="./src/img/HeaderImages/letrassemfundo-2.png" alt="Logo HomeFrellas" />
      </div>

      <div className="menu">
        <nav className="nav-itens">
          <ul>
            <li>Empresa</li>
            <li>Sobre nós</li>
            <li>Suporte</li>
          </ul>
        </nav>
      </div>

      <div className="buttons">
        <img src="./src/img/HeaderImages/Person-buttons.png" alt="Ícone para Botão de Login" />
        <button className="btn-signIn">Fazer Login</button>
        <button className="btn-signUp">Cadastre-se</button>
      </div>
    </header>
    </>
  );
}