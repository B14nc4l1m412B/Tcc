import { Link } from "react-router-dom"

import styles from "./css/Objetivo.module.css"

import Logo from "./imagens/Logo.png"
import camera1 from "./imagens/Tcc_lateral.jpg"
import camera2 from "./imagens/Tcc_fios.jpg"

function Objetivo() {

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
            <Link className={styles.menu1} to={"/objetivo"}>Objetivo</Link>
            <Link className={styles.menu2} to={"/ideia"}>Nossa ideia</Link>
            <Link className={styles.menu3} to={"/equipamento"}>Equipamento</Link>
            <Link className={styles.menu4} to={"/bibliografia"}>Bibliografia</Link>
          </div>
        </header>

        <main className={styles.main}>
          <div className={styles.conteudo}>
          <div className={styles.conteudo1}>
            <div className={styles.Objetivo}>
            <h1 className={styles.h1}>Objetivo:</h1>
            <p className={styles.p}> Nosso trabalho é fazer um sistema de segurança com alarme que só aciona se o tempo pré-definido do alarme tiver passado. Ele vai soar um alarme alto para o proprietário e pessoas ao redor serem informando que algo suspeito aconteceu perto de sua porta. Trazendo assim mais conforto e segurança para as pessoas que utilizam nossos equipamentos da forma mais rápida, fácil e prática. </p>
            </div>
            <div className={styles.divcamera}>
              <img className={styles.camera1} src={camera1} alt="camera observando" />
            </div>
            </div>

            <div className={styles.conteudo1}>
            <div className={styles.divcamera}>
              <img className={styles.camera2} src={camera2} alt="camera observando" />
            </div>
            <div className={styles.Publico}>
            <h1 className={styles.h1}>Público-alvo:</h1>
            <p className={styles.p}> Trabalhamos com familias pequenas e grandes, nossos sistemas ajudam a identificar os membros que tem a permição de entrar em sua propriedade. Para jovens ou adultos que pretendem maior segurança em suas casas.</p>
            </div>
            </div>
          </div>
        </main>
      </>
    )
  }
  
  export default Objetivo