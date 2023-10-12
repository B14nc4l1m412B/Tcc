import { Link } from "react-router-dom"

import styles from "./css/Ideia.module.css"

import Logo from "./imagens/Logo.png"
import login from "./imagens/login.png"
import cameras from "./imagens/cameras.jpg"
import digital from "./imagens/digital.png"

function Ideia() {

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

        <main className={styles.main}>
        <img  className={styles.camera} src={cameras} alt="duas cameras" />
          <div className={styles.conteudo}>
            <p>A nossa ideia de TCC não é nada de novo ou diferente, já existe há algum tempo, pois podemos ver várias casas com sistemas de alarme quase idênticos aos nossos.</p>
            <img className={styles.digital} src={digital} alt="dedo com digital na frente" />
            <p>Sistemas como sensores de distância são um exemplo, então apenas nos adaptamos às nossas necessidades sem ser muito complexos ou muito inovador.</p>
          </div>
        </main>
      </>
    )
  }
  
  export default Ideia