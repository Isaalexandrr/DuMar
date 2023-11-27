import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import styles from './login.module.css';

import ondaestrela from "../imagens/onda-estrela.png";
import ondaalga2 from "../imagens/onda-alga-2.png";
import peixebolha from "../imagens/cardume-bolha-pequeno.png";
import ondaalga3 from "../imagens/onda-alga-3.png";

function Login() {
    return (
        <div class="container mt-4">
        <div class="row justify-content-left">
            <div class="col-md-10 mx-auto col-lg-5">
                <h1 class="text-center mb-4">Bem-Vindo(a).Acesse sua conta!</h1>
                <form class="p-4 p-md-5 border rounded-4 bg-#538AAD">
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="inputEmail" placeholder="E-mail"/>
                        <label for="inputEmail">E-mail</label>
                    </div>
                    <div class="form-floating mb-4">
                        <input type="password" class="form-control" id="inputPassword" placeholder="Senha"/>
                        <label for="inputPassword">Senha</label>
                    </div>
                    <div class="checkbox mb-4">
                        <input class="form-check-input" type="checkbox" value="Lembrar-me" id="rememberMe"/>
                        <label class="form-check-label" for="rememberMe">Lembrar-me</label>
                    </div>
                    <button class="w-100 btn btn-lg btn-success" type="submit">Entrar</button>
                    <p styles="color:blue">Ainda não tem uma conta? Inscreva-se</p>
                </form>
            </div>
        </div>
        <div class="col-7 d-none d-lg-block d-xl-block d-xxl-block m-0 p-0">
          <img src={peixebolha} className={styles.peixebolha} alt="" />
          <img src={ondaalga3} className={styles.ondaalga3} alt="" />
        </div>
      </div>

  );
}
export default Login;