import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from './login.module.css';
import ondaestrela3 from "../imagens/onda-estrela-3.png";
import ondacoral from "../imagens/onda-coral.png";



function Login() {
    return (
        <div className="Container-fluid">
      <div className="row m-0 p-0">
        <div className="col-3 d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block align-self-end m-0 p-0">
          <img src={ondacoral} className={styles["ondacoral"]}/>
        </div>
        <div className="col-12 col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 text-center">
            <h1 id={styles["tittle"]} className="fs-3 fw-bold">Bem-vindo(a). <br/> Acesse sua conta!</h1>
            <form className="text-center mt-4" action="">
                <div className=" mx-auto w-50 mt-5">
                <input type="text" className="form-control rounded-pill" placeholder="E-mail"/>
                </div>
                <div className="mx-auto text-end w-50 mt-4">
                    <input type="passowrd" id="senha" className="form-control rounded-pill" placeholder="Senha"/>
                    <label htmlFor="senha"><a href="" className="link-info">Esqueceu a senha?</a></label>
                </div>
                <div className="mx-auto w-50 mt-5">
                    <input type="submit" className="form-control rounded-pill" value="Entrar"/>
                    <label className="mt-2">Ainda não tem uma conta?</label>
                    <button className="form-control rounded-pill bg-transparent border border-info border-3 text-dark mt-2">Inscreva-se</button>
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