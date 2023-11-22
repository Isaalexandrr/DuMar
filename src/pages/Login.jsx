import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import styles from './login.module.css';

import ondaestrela from "../imagens/onda-estrela.png";
import ondaalga2 from "../imagens/onda-alga-2.png";
import peixebolha from "../imagens/cardume-bolha-pequeno.png";
import ondaalga3 from "../imagens/onda-alga-3.png";

function Login() {
  return (
    <div className={styles.container} class="container-fluid">
      <div class="row">
        <div class="col w-xs-100 w-sm-100 w-md-100 col-lg-5 col-xl-5 col-xxl-5 m-0 p-0">
          <img src={ondaestrela} className={styles.ondastar} alt="" />
          <div class="text-center">
            <h1 className={styles.welcome}>
              Bem-vindo(a).
              <br /> Acesse sua conta!
            </h1>
            <form action="">
              <div class="form-group m-3">
                <input className={styles.email} type="email" placeholder="digite seu email!" />
              </div>
              <div class="form-group m-3">
                <input className={styles.senha} type="passowrd" name="" id="" placeholder="digite sua senha"/> 
                <div className="text-end w-75 fs-4">  
                <small>
                  <a href="">esqueceu a senha?</a>
                </small>
                </div>
              </div>
              <input type="button" className={styles.entrar} value="Entrar"/>
              <br />
              <div className="fs-4">
              <small>
                Ainda não tem uma conta? <a href="">inscreva-se</a>
              </small>
              </div>
            </form>
          </div>
          <img className={styles.ondaalga2} src={ondaalga2} alt="" />
        </div>
        <div class="col-7 d-none d-lg-block d-xl-block d-xxl-block m-0 p-0">
          <img src={peixebolha} className={styles.peixebolha} alt="" />
          <img src={ondaalga3} className={styles.ondaalga3} alt="" />
        </div>
      </div>
    </div>
  );
}
export default Login;
