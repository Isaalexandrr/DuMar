import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import React, { useState, useEffect, useReducer } from "react";

import styles from "./Navbar.module.css";
import Entrar from "./Entrar";
import Logado from "./Logado";
import Menu from "./Menu";

import logo1 from "../imagens/logo1.png";
import logo2 from "../imagens/logo2.png";

function NavbarCustomizado({handleCategorySelect}) {

  const [logado, setLogado] = useState(false);
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setLogado(true);
    }

    console.log(logado)
  }, [forceUpdate]);

  console.log('qualquer coisa')


  return (
    <div className={styles["nav-bar grid-caixa"]}>
      <nav className="navbar navbar-light bg-light" id={styles["navLogo"]}>
        <a className="navbar-brand" href="#">
          <div className="logos grid text-center mx-4">
            <Link to="/">
              <img src={logo1} className={styles["img-logo1"]} alt="DUMAR" />
            </Link>
            <Link to="/">
              <img src={logo2} className={styles["img-logo2"]} alt="DUMAR" />
            </Link>
          </div>
        </a>

        <div className={styles["pessoa-carro"]}>
          {logado ? <Logado /> : <Entrar />}
        </div>
      </nav>

      <nav className={styles["menu"]}>
        <Menu handleCategorySelect={handleCategorySelect} />
      </nav>
    </div>
  );
}

export default NavbarCustomizado;
