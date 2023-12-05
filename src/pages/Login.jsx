import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./login.module.css";
import ondaestrela3 from "../imagens/onda-estrela-3.png";
import ondacoral from "../imagens/onda-coral.png";
import { Link, Navigate } from "react-router-dom";
import instance from "../components/TokenConfig";

function Login() {
  const [CLI_EMAIL, setCLI_EMAIL] = useState("");
  const [CLI_SENHA, setCLI_SENHA] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);

  function handleLogin(e) {
    e.preventDefault();

    instance
      .post("http://localhost:3003/Login", { CLI_EMAIL, CLI_SENHA })
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem("token", token);
        alert("Logado com sucesso!");
        setLoggedIn(true);
      })
      .catch((error) => {
        console.error(error);
        alert("Email ou senha incorretos!");
      });
  }

  if (isLoggedIn) {
    return <Navigate to="/" />; // Alteração aqui para Redirect
  }

  return (
    <div className="Container-fluid">
      <div className="row m-0 p-0">
        <div className="col-3 d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block align-self-end m-0 p-0">
          <img src={ondacoral} className={styles["ondacoral"]} />
        </div>
        <div className="col-12 col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 text-center">
          <h1 id={styles["tittle"]} className="fs-2 fw-bold mx-auto mt-5">
            Bem-vindo(a). <br /> Acesse sua conta!
          </h1>
          <form className="text-center mt-4" onSubmit={handleLogin}>
            <div className=" mx-auto w-50 mt-5">
              <input
                type="text"
                value={CLI_EMAIL}
                className="form-control rounded-pill"
                placeholder="E-mail"
                onChange={(e) => setCLI_EMAIL(e.target.value)}
              />
            </div>
            <div className="mx-auto text-end w-50 mt-4">
              <input
                type="password"
                id="senha"
                value={CLI_SENHA}
                className="form-control rounded-pill"
                placeholder="Senha"
                onChange={(e) => setCLI_SENHA(e.target.value)}
              />
              <label class="mt-3" htmlFor="senha">
                <Link to="/EsqueceuSenha" className={styles["link"]}>
                  Esqueceu a senha?
                </Link>
              </label>
            </div>
            <div className="mx-auto w-50 mt-5">
              <button
                className="form-control rounded-pill fw-bold"
                id={styles["Entrar"]}
              >
                Entrar
              </button>
              <label className="mt-2">Ainda não tem uma conta?</label>
              <Link className={styles["link"]} to="/TipoConta">
                <button
                  type="submit"
                  className="form-control rounded-pill bg-transparent  mt-2"
                  id={styles["cadastro"]}
                >
                  Inscreva-se
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
export default Login;
