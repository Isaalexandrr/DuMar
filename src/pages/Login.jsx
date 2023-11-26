import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from './login.module.css';
import ondaestrela3 from "../imagens/onda-estrela-3.png";
import ondacoral from "../imagens/onda-coral.png";
import { Link } from "react-router-dom";


function Login() {
    return (
<<<<<<< HEAD
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
=======
        <div className="Container-fluid">
      <div className="row m-0 p-0">
        <div className="col-3 d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block align-self-end m-0 p-0">
          <img src={ondacoral} className={styles["ondacoral"]}/>
>>>>>>> 8c40d163a31c3a5ff4ff9a83bdc0480c7f150643
        </div>
        <div className="col-12 col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 text-center">
            <h1 id={styles["tittle"]} className="fs-2 fw-bold mx-auto">Bem-vindo(a). <br/> Acesse sua conta!</h1>
            <form className="text-center mt-4" action="">
                <div className=" mx-auto w-50 mt-5">
                <input type="text" className="form-control rounded-pill" placeholder="E-mail"/>
                </div>
                <div className="mx-auto text-end w-50 mt-4">
                    <input type="passowrd" id="senha" className="form-control rounded-pill" placeholder="Senha"/>
                    <label class="mt-3" htmlFor="senha"><a href="" className={styles["esqueceu"]}>Esqueceu a senha?</a></label>
                </div>
                <div className="mx-auto w-50 mt-5">
                    <input type="submit" className="form-control rounded-pill fw-bold" id={styles["Entrar"]} value="Entrar"/>
                    <label className="mt-2">Ainda não tem uma conta?</label>
                    <Link className={styles["link"]} to="/Cadastro">
                    <button className="form-control rounded-pill bg-transparent  mt-2" id={styles["cadastro"]}>Inscreva-se</button>
                    </Link>
                </div>
            </form>
        </div>
        <div className="col-3 d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block text-end m-0 p-0">
            <img src={ondaestrela3} className={styles["ondaestrela"]} />
        </div>
      </div>
    </div>
  );
}
export default Login;
