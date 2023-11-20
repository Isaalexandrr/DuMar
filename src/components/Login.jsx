import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from './login.module.css';
import ondacoral from "./imagens/onda-coral.png"
import ondaestrela3 from "./imagens/onda-estrela-3.png";



function Login() {
  return (
    <div className={styles.container} class="container-fluid">
       <img src={ondaestrela3} className= {styles.ondaestrela3} alt="" />       
      <div class="row justify-content-center">
        <div class="col w-xs-100 w-sm-100 w-md-100 col-lg-5 col-xl-5 col-xxl-5 m-0 p-0 ">
          <div class="text-center justify-content-center">
            <h1 className={styles.welcome}>
              Bem-vindo(a).
              <br /> Acesse sua conta!
            </h1>
            <form action="">
              <div class="form-group m-3 justify-content-center">
                <input className={styles.email} type="email" placeholder=  "   E-mail " />
              </div>
              <div class="form-group m-3 justify-content-center">
                <input className={styles.senha} type="passowrd" name="" id="" placeholder=  "  Senha "/> 
                <div className="text-end-center w-80 fs-4">  
                <small>
                  <a href="">   esqueceu a senha?  </a>
                </small>
                </div>
              </div>
              <input type="button" className={styles.entrar} value="Entrar"/>
              <br />
              <div class="fs-4">
              <small>
                Ainda não tem uma conta?
                <br />
                < a href=""> inscreva-se! </a>
              </small>
              </div>
            </form>
            </div>
            <div class="col-1">
              <img src={ondacoral} className= {styles.ondacoral} alt="" />             

             
            </div>
            </div>
      </div>
    </div>
  );
}
export default Login;
