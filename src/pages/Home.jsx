import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import CarroselPrincipal from "../components/CarroselPrincipal";

import styles from "./home.module.css";

import ondacoral from "../imagens/onda-estrela.png";
import camarao from "../imagens/camarao.jpg";
import carrosel1 from "../imagens/carrosel1.svg";
import carrosel2 from "../imagens/carrosel2.svg";
import Alanes from "../imagens/Alanes.jpg";
import Gabii from "../imagens/Gabii.jpeg";
import ISABELA from "../imagens/ISABELA (1).png";
import Andrezaa from "../imagens/Andrezaa.jpg";
import Gerson from "../imagens/Gerson.jpeg";
import { IoStar, IoStarOutline } from "react-icons/io5";

<link
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
  rel="stylesheet"
/>;

function Home() {
  return (
    <div className="container-fluid p-0">
      <CarroselPrincipal />
      <header>
        <div className="row m-0 p-0">
          <div className="col w-xs-100 w-sm-100 m-0 p-0">
            <img
              src={ondacoral}
              className={styles["onda-estrela"]}
              width="150"
              height="200"
              alt="Onda.estrela"
            />
          </div>
        </div>
      </header>

      <main>
        <section>
          <div className={styles["ofertas"]}>
            <h3>Confira os Destaques da semana:</h3>
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
                    <img src={camarao} alt="Salmão" />
                    <div className={styles["texto"]}>
                      <h3>Salmão</h3>
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

                  <div className={styles["grid-caixa"]}>
                    <img src={camarao} alt="Camarão" />
                    <div className={styles["texto"]}>
                      <h3>Camarão</h3>
                      <h3>R$ 35,00</h3>
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
                    <img src={camarao} alt="Tilapia" />
                    <div className={styles["texto"]}>
                      <h3>Tilápia</h3>
                      <h3>R$ 20,00</h3>
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
                    <img src={camarao} alt="Lagosta" />
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

                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon me-4"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon me-2"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
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
                  <img src={camarao} alt="Atum" />
                  <div className={styles["texto"]}>
                    <h3>Atum</h3>
                    <h3>R$ 30,49</h3>
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
                  <img src={camarao} alt="Bacalhau" />
                  <div className={styles["texto"]}>
                    <h3>Bacalhau</h3>
                    <h3>R$ 79,90</h3>
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
                  <img src={camarao} alt="Corvina" />
                  <div className={styles["texto"]}>
                    <h3>Corvina</h3>
                    <h3>R$ 18,90</h3>
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
                  <img src={camarao} alt="arenque" />
                  <div className={styles["texto"]}>
                    <h3>Albacora</h3>
                    <h3>R$ 20,00</h3>
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

        <div
          id="carouselExampleInterval"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner justify-content-center">
            <div class="carousel-item active">
              <div className={styles["box"]}>
                <div className={styles["grid-caixa"]}>
                  <img src={camarao} alt="Atum" />
                  <div className={styles["texto"]}>
                    <h3>Lula</h3>
                    <h3>R$ 29,90</h3>
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
                  <img src={camarao} alt="Bacalhau" />
                  <div className={styles["texto"]}>
                    <h3>Polvo</h3>
                    <h3>R$ 65,00</h3>
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
                  <img src={camarao} alt="Corvina" />
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
                  <img src={camarao} alt="arenque" />
                  <div className={styles["texto"]}>
                    <h3>Carangueijo</h3>
                    <h3>R$ 35,00</h3>
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

        <section></section>

        <section></section>
      </main>

      <footer></footer>
    </div>
  );
}
export default Home;
