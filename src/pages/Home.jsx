import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import CarroselPrincipal from "../components/CarroselPrincipal";
import CarroselProduto from "../components/CarroselProduto";
import RodaPe from "../components/RodaPe";

import styles from "./home.module.css";

import ondaCoral from "../imagens/onda-estrela.png";
import cardumeBolha from "../imagens/cardume-bolha-cortado.png";
import camarao from "../imagens/camarao.jpg";
import { IoStar, IoStarOutline } from "react-icons/io5";

<link
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
  rel="stylesheet"
/>;

function Home() {
  return (
    <div className="container-fluid p-0 ">
      <CarroselPrincipal />
      <div className="row m-0 p-0">
        <header class="m-0 p-0">
          <div id={styles["imgs"]}>
            <div className="col-3 d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block self-end m-0 p-0">
              <img src={ondaCoral} className={styles["onda-estrela"]} />
            </div>
            <div className="col-3 d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block text-xs-right self-end">
              <img src={cardumeBolha} className={styles["cardumeBolha"]} />
            </div>
          </div>
        </header>

        <main>
          <section>
            <div className={styles["destaques"]}>
              <h3>Confira os Destaques da Semana:</h3>
            </div>
            <CarroselProduto />
          </section>

          <div
            id="carouselExampleInterval"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner justify-content-center">
              <div class="carousel-item active">
                <div className={styles["box"]}>
                  <div className={styles["grid-caixa"]}>
                    <img src={camarao} alt="atum" />
                    <div className={styles["texto"]}>
                      <h3>Atum</h3>
                      <h3>R$ 30,49</h3>
                    </div>
                    <div className={styles["estrela"]}>
                      <IoStar />
                      <IoStar />
                      <IoStar />
                      <IoStar />
                      <IoStar />
                    </div>
                    
                    <input
                      type="button"
                      name=""
                      id=""
                      value="Adicionar à sacola"
                    />
                    <div className={styles["maisDetalhes"]}>
                      <Link to="">
                        <p>Ver mais detalhes</p>
                      </Link>
                    </div>
                  </div>

                  <div className={styles["grid-caixa"]}>
                    <img src={camarao} alt="bacalhau" />
                    <div className={styles["texto"]}>
                      <h3>Bacalhau</h3>
                      <h3>R$ 79,90</h3>
                    </div>
                    <div className={styles["estrela"]}>
                      <IoStar />
                      <IoStar />
                      <IoStar />
                      <IoStar />
                      <IoStar />
                    </div>
                    <input
                      type="button"
                      name=""
                      id=""
                      value="Adicionar à sacola"
                    />
                    <div className={styles["maisDetalhes"]}>
                      <Link to="">
                        <p>Ver mais detalhes</p>
                      </Link>
                    </div>
                  </div>

                  <div className={styles["grid-caixa"]}>
                    <img src={camarao} alt="corvina" />
                    <div className={styles["texto"]}>
                      <h3>Corvina</h3>
                      <h3>R$ 18,90</h3>
                    </div>
                    <div className={styles["estrela"]}>
                      <IoStar />
                      <IoStar />
                      <IoStar />
                      <IoStar />
                      <IoStar />
                    </div>
                    <input
                      type="button"
                      name=""
                      id=""
                      value="Adicionar à sacola"
                    />
                    <div className={styles["maisDetalhes"]}>
                      <Link to="">
                        <p>Ver mais detalhes</p>
                      </Link>
                    </div>
                  </div>

                  <div className={styles["grid-caixa"]}>
                    <img src={camarao} alt="albacora" />
                    <div className={styles["texto"]}>
                      <h3>Albacora</h3>
                      <h3>R$ 20,00</h3>
                    </div>
                    <div className={styles["estrela"]}>
                      <IoStar />
                      <IoStar />
                      <IoStar />
                      <IoStarOutline />
                      <IoStarOutline />
                    </div>
                    <input
                      type="button"
                      name=""
                      id=""
                      value="Adicionar à sacola"
                    />
                    <div className={styles["maisDetalhes"]}>
                      <Link to="">
                        <p>Ver mais detalhes</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            id="carouselExampleInterval"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner justify-content-center">
              <div class="carousel-item active">
                <div className={styles["box"]}>
                  <div className={styles["grid-caixa"]}>
                    <img src={camarao} alt="tilapia" />
                    <div className={styles["texto"]}>
                      <h3>Tilápia</h3>
                      <h3>R$ 26,90</h3>
                    </div>
                    <div className={styles["estrela"]}>
                      <IoStar />
                      <IoStar />
                      <IoStar />
                      <IoStar />
                      <IoStarOutline />
                    </div>
                    <input
                      type="button"
                      name=""
                      id=""
                      value="Adicionar à sacola"
                    />
                    <div className={styles["maisDetalhes"]}>
                      <Link to="">
                        <p>Ver mais detalhes</p>
                      </Link>
                    </div>
                  </div>

                  <div className={styles["grid-caixa"]}>
                    <img src={camarao} alt="camarao" />
                    <div className={styles["texto"]}>
                      <h3>Camarão</h3>
                      <h3>R$ 34,90</h3>
                    </div>
                    <div className={styles["estrela"]}>
                      <IoStar />
                      <IoStar />
                      <IoStar />
                      <IoStar />
                      <IoStar />
                    </div>
                    <input
                      type="button"
                      name=""
                      id=""
                      value="Adicionar à sacola"
                    />
                    <div className={styles["maisDetalhes"]}>
                      <Link to="">
                        <p>Ver mais detalhes</p>
                      </Link>
                    </div>
                  </div>

                  <div className={styles["grid-caixa"]}>
                    <img src={camarao} alt="salmao" />
                    <div className={styles["texto"]}>
                      <h3>Salmão</h3>
                      <h3>R$ 79,90</h3>
                    </div>
                    <div className={styles["estrela"]}>
                      <IoStar />
                      <IoStar />
                      <IoStar />
                      <IoStar />
                      <IoStar />
                    </div>
                    <input
                      type="button"
                      name=""
                      id=""
                      value="Adicionar à sacola"
                    />
                    <div className={styles["maisDetalhes"]}>
                      <Link to="">
                        <p>Ver mais detalhes</p>
                      </Link>
                    </div>
                  </div>

                  <div className={styles["grid-caixa"]}>
                    <img src={camarao} alt="marisco" />
                    <div className={styles["texto"]}>
                      <h3>Marisco</h3>
                      <h3>R$ 45,00</h3>
                    </div>
                    <div className={styles["estrela"]}>
                      <IoStar />
                      <IoStar />
                      <IoStar />
                      <IoStarOutline />
                      <IoStarOutline />
                    </div>
                    <input
                      type="button"
                      name=""
                      id=""
                      value="Adicionar à sacola"
                    />
                    <div className={styles["maisDetalhes"]}>
                      <Link to="">
                        <p>Ver mais detalhes</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            id="carouselExampleInterval"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner justify-content-center">
              <div class="carousel-item active">
                <div className={styles["box"]}>
                  <div className={styles["grid-caixa"]}>
                    <img src={camarao} alt="lula" />
                    <div className={styles["texto"]}>
                      <h3>Lula</h3>
                      <h3>R$ 29,90</h3>
                    </div>
                    <div className={styles["estrela"]}>
                      <IoStar />
                      <IoStar />
                      <IoStar />
                      <IoStar />
                      <IoStar />
                    </div>
                    <input
                      type="button"
                      name=""
                      id=""
                      value="Adicionar à sacola"
                    />
                    <div className={styles["maisDetalhes"]}>
                      <Link to="">
                        <p>Ver mais detalhes</p>
                      </Link>
                    </div>
                  </div>

                  <div className={styles["grid-caixa"]}>
                    <img src={camarao} alt="polvo" />
                    <div className={styles["texto"]}>
                      <h3>Polvo</h3>
                      <h3>R$ 65,00</h3>
                    </div>
                    <div className={styles["estrela"]}>
                      <IoStar />
                      <IoStar />
                      <IoStar />
                      <IoStar />
                      <IoStar />
                    </div>
                    <input
                      type="button"
                      name=""
                      id=""
                      value="Adicionar à sacola"
                    />
                    <div className={styles["maisDetalhes"]}>
                      <Link to="">
                        <p>Ver mais detalhes</p>
                      </Link>
                    </div>
                  </div>

                  <div className={styles["grid-caixa"]}>
                    <img src={camarao} alt="merluza" />
                    <div className={styles["texto"]}>
                      <h3>Merluza</h3>
                      <h3>R$ 14,90</h3>
                    </div>
                    <div className={styles["estrela"]}>
                      <IoStar />
                      <IoStar />
                      <IoStar />
                      <IoStar />
                      <IoStarOutline />
                    </div>
                    <input
                      type="button"
                      name=""
                      id=""
                      value="Adicionar à sacola"
                    />
                    <div className={styles["maisDetalhes"]}>
                      <Link to="">
                        <p>Ver mais detalhes</p>
                      </Link>
                    </div>
                  </div>

                  <div className={styles["grid-caixa"]}>
                    <img src={camarao} alt="lagosta" />
                    <div className={styles["texto"]}>
                      <h3>Lagosta</h3>
                      <h3>R$ 69,90</h3>
                    </div>
                    <div className={styles["estrela"]}>
                      <IoStar />
                      <IoStar />
                      <IoStar />
                      <IoStar />
                      <IoStarOutline />
                    </div>
                    <input
                      type="button"
                      name=""
                      id=""
                      value="Adicionar à sacola"
                    />
                    <div className={styles["maisDetalhes"]}>
                      <Link to="">
                        <p>Ver mais detalhes</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
