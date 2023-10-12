import { Link } from "react-router-dom"

import styles from "./css/RetornaSenha.module.css"

import volta from "./imagens/arrow-u-up-left.png"

function RetornaSenha() {

  return (
    <>
      <main>
            <form action="">
                <button class="voltar">
                    <img src={volta} alt="seta voltando" />
                    <Link to={"/login"} ></Link>
                </button>

                <div className="login">
                    <h1>Redefinição de senha</h1>
                </div>

                <div className="paragrafo">
                    <h2>Por favor, digite seu email para que enviaremos um email com instruções para redifinição da sua senha.</h2>
                </div>

                <div class="cadastro">
                    <div className="user-mail">
                    <input type="text" name="user-mail" id="user-mail" placeholder="Nome do usuário/e-mail"/>
                    </div>
                </div>

                <div class="cetralizabotao">
                    <button class="botao">
                        <Link to={"/login"} >Enviar</Link>
                    </button>
                </div>
                
            </form>
    </main>
    </>
  )
}

export default RetornaSenha