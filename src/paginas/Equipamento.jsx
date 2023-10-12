import { Link } from "react-router-dom"

import styles from "./css/Equipamento.module.css"

import Logo from "./imagens/Logo.png"
import login from "./imagens/login.png"
import Imagecomponentes from "./imagens/componentes.png"
import Brincando from "./imagens/brincando-com-ideias.jpg"

function Equipamento() {

    return (
      <>
        <header className={styles.header}>
          <div className={styles.buttonLogo}>
          <button>
            <img className={styles.Logo} src={Logo} alt="logo azul" />
            <Link className={styles.home} to={"/"} >B.D.L. systems</Link>
          </button>
          </div>
          <div className={styles.todomenu}>
            <Link className={styles.menu} to={"/objetivo"}>Objetivo</Link>
            <Link className={styles.menu} to={"/ideia"}>Nossa ideia</Link>
            <Link className={styles.menu} to={"/equipamento"}>Equipamento</Link>
            <Link className={styles.menu} to={"/bibliografia"}>Bibliografia</Link>
          </div>
          <div className={styles.buttonLogin}>
            <button>
              <img className={styles.login} src={login} alt="login" />
              <Link className={styles.loginUsuario} to={"/login"}>Login</Link>
            </button>
          </div>
        </header>

        <main>

          <div className="imgcomponentes">
            <img class="Componentes" src={Imagecomponentes} alt="imagem dos componentes" />
          </div>

          <div className="lista">
            <ul>
              <li>Leitor biométrico: R$ 100-200</li>
              <li>Arduino: R$ 70-150</li>
              <li>LCD: R$ 30-50</li>
              <li>Cabos: R$ 20-30</li>
              <li>Protoboard: R$ 20</li>
            </ul>
          </div>

          <div className="grupo5">
              <img class="canais" src={Brincando} alt="um circulo verde com a borda branca, com um desenho, em branco, de um led ligado no seu interior" />
              <a class="links" href="https://www.youtube.com/@BrincandocomIdeias/videos">Canal Brincando com Ideias</a>
          </div>

        </main>
      </>
    )
  }
  
  export default Equipamento