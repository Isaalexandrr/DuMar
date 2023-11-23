import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./login.module.css";
import ondaestrela3 from "../imagens/onda-estrela-3.png";
import ondacoral from "../imagens/onda-coral.png";

function Login() {
  return (
   <div className={styles.container} class="container-fluid">
    <div className="row justify-content-center">
    <div class="col w-xs-100 w-sm-100 w-md-100 col-lg-5 col-xl-5 col-xxl-5 m-0 p-0 ">
          <div class="text-center justify-content-center">
          <h1 className={styles.welcome}> Bem vindo(a).
                <br />
                 Acesse sua conta!
            </h1>
        <form action="">
        
            <div className="form-group m-3 justify-content-center">
                <input className={styles.email} type="Email" placeholder=" E-Mail "/>
            </div>
            <div className="form-group m-3 justify-content-center">
                <input className={styles.senha} type="passoword" name="" id="" placeholder=" Senha "/>
                <div className="text-end-center w-80 fs-4">
                    <br />
                <small>
                    <a href=""> Esqueceu sua Senha? </a>
                </small>
                </div>
            </div>
            <input className={styles.button} type="submit" value="Entrar" a href="Entrar" />
            
            <div className="text-end-center w-80 fs-4"></div>
            <br />
            <div className="fs-4">
                <small>
                       Ainda não tem uma conta? <br />
                </small>
                <small>
                <a href="">   Inscreva-se!  </a>
                </small>
                
            </div>
        </form>
    </div>
    </div>
    </div>
   </div>

  );
}
export default Login;