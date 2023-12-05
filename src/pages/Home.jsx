import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import CarroselPrincipal from "../components/CarroselPrincipal";
import CarroselProduto from "../components/CarroselProduto";
import RodaPe from "../components/RodaPe";
import Dropdown from "react-bootstrap/Dropdown";
import ProdutoHome from "../components/ProdutosHome";

import styles from "./home.module.css";

import ondaCoral from "../imagens/onda-estrela.png";
import cardumeBolha from "../imagens/cardume-bolha-cortado.png";
import cardumeCortado from "../imagens/cardume-cortado.png";
import ondaEstrela2 from "../imagens/onda-estrela-2.png";

<link
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
  rel="stylesheet"
/>;

function Home({ filter }) {
  return (
    <div className="container-fluid p-0 ">
      <CarroselPrincipal />
      <div className="row m-0 p-0">
        <header class="m-0 p-0">
          <div id={styles["imgs"]}>
            <div className="col-3 d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block self-end m-0 p-0">
              <img src={ondaCoral} className={styles["onda-estrela"]} />
            </div>
            <div className="col-3 d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block text-xs-right text-end">
              <img src={cardumeBolha} className={styles["cardumeBolha"]} />
            </div>
          </div>
        </header>

        <main class="m-0 p-0">
          <section>
            <div id={styles["destaques"]} className="fs-3 fw-bold mt-5">
              <h1>Confira os Destaques da Semana:</h1>
            </div>
            <CarroselProduto />
          </section>

          <header class="p-0">
            <div id={styles["imgs"]}>
              <div className="col-3 d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block self-end p-0">
                <img src={cardumeCortado} className={styles["onda-estrela"]} />
              </div>
              <div className="col-3 d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block text-xs-right text-end">
                <img src={ondaEstrela2} className={styles["cardumeBolha"]} />
              </div>
            </div>
          </header>

          <div id={styles["destaques"]} className="fs-3 fw-bold mt-5">
            <h1>Veja mais produtos:</h1>
          </div>
          <div
            id="carouselExampleInterval"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <ProdutoHome filter={filter} />
          </div>
        </main>
      </div>
      <footer>
        <RodaPe />
      </footer>
    </div>
  );
}
export default Home;
