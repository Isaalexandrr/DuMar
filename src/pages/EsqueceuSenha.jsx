import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./EsqueceuSenha.module.css";
import { Link } from "react-router-dom";

import ondaestrela3 from "../imagens/onda-estrela-3.png";
import ondacoral from "../imagens/onda-coral.png";

function EsqueceuSenha() {
  return (
    <div className="Container-fluid">
      <div className="row m-0 p-0">
        <div className="col-3 d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block align-self-end m-0 p-0">
          <img src={ondacoral} className={styles["ondacoral"]} />
        </div>
        <div className="col-12 col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 text-center">
          <h1 id={styles["tittle"]} className="fs-2 fw-bold mx-auto mt-4">
            Recupere sua conta!
          </h1>
          <form className="text-center mt-4" action="">
            <div className=" mx-auto w-50 mt-4">
              <input
                type="text"
                className="form-control rounded-pill"
                placeholder="Digite seu E-mail"
              />
            </div>

            <div className="mx-auto text-end w-50 mt-4">
              <input
                type="passowrd"
                id="senha"
                className="form-control rounded-pill"
                placeholder="Nova Senha"
              />
            </div>
            <div className="mx-auto w-50 mt-4  ">
              <input
                type="passowrd"
                id="senhaa"
                className="form-control rounded-pill"
                placeholder="Confirmar senha"
              />
            </div>
            <div className="mx-auto w-50 mt-5">
              <input
                type="submit"
                className="form-control rounded-pill fw-bold"
                id={styles["Entrar"]}
                value="Confirmar"
              />
              <Link className={styles["link"]} to="/Login">
                <button
                  className="form-control rounded-pill bg-transparent  mt-2"
                  id={styles["voltar"]}
                >
                  Voltar
                </button>
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
export default EsqueceuSenha;
