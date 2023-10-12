import { Link } from "react-router-dom"

import styles from "./css/Cadastro.module.css"

import volta from "./imagens/arrow-u-up-left.png"

function Cadastro() {

  return (
    <>
    <main>
            <form action="">
                <button class="voltar">
                    <img src={volta} alt="seta voltando" />
                    <Link to={"/login"} ></Link>
                </button>

                <div className="login">
                    <h1>Cadastro</h1>
                </div>

                <div class="cadastro">
                    <div className="user-mail">
                    <input type="text" name="user-mail" id="user-mail" placeholder="Nome do usuário/e-mail"/>
                    </div>
                    <p>Já tem conta?</p>
                    <Link to={"/login"} >Clique aqui</Link>
                </div>

                <div class="cadastro">
                    <div className="senha">
                    <input type="text" name="senha" id="senha" placeholder="Senha"/>
                    </div>
                </div>

                <div class="cetralizabotao">
                    <button class="botao">
                        <Link to={"/"} >Cadastre-se</Link>
                    </button>
                </div>
                
            </form>
    </main>
      
    </>
  )
}

export default Cadastro