import { Link } from "react-router-dom"

import styles from "./css/Objetivo.module.css"

import volta from "./imagens/arrow-u-up-left.png"

function Login() {

  return (
    <>
    <main>
            <form action="">
                <button class="voltar">
                    <img src={volta} alt="seta voltando" />
                    <Link to={"/"} > - </Link>
                </button>

                <div className="login">
                    <h1>Login</h1>
                </div>

                <div class="cadastro">
                    <div className="user-mail">
                    <input type="text" name="user-mail" id="user-mail" placeholder="Nome do usuário/e-mail"/>
                    </div>
                    <p>Não tem cadastro?</p>
                    <Link to={"/cadastro"}>Clique aqui</Link>
                </div>

                <div class="cadastro">
                    <div className="senha">
                    <input type="text" name="senha" id="senha" placeholder="Senha"/>
                    </div>
                    <p>Esqueceu sua senha?</p>
                    <Link to={"/returnasenha"} >Clique aqui</Link>
                </div>

                <div class="cetralizabotao">
                    <button class="botao">
                    <Link to={"/"} >Entrar</Link>
                    </button>
                </div>
                
            </form>
    </main>
      
    </>
  )
}

export default Login