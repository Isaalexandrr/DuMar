import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./QuemSomos.module.css";
import Alanes from "../imagens/Alanes.jpg";
import Gabii from "../imagens/Gabii.jpeg";
import ISABELA from "../imagens/ISABELA (1).png";
import Andrezaa from "../imagens/Andrezaa.jpg";
import Gerson from "../imagens/Gerson.jpeg";

function QuemSomos() {
  return (
    <main className={`${styles["container"]} container`}>
      <article className={`row ${styles["primeiraparte"]}`}>
        <section className={`col-md-6 ${styles["sobre"]}`}>
          <h2 className={styles["h2"]}>Sobre Nós:</h2>
          <p className={styles["p"]}>
            <strong>“DuMar”</strong> é um E-commerce (comércio eletrônico) que
            oferece serviços de compra e venda de peixes e frutos do mar.
          </p>
        </section>

        <section className="col-md-6 text-start">
          <h2 className={styles["h2"]}>Propósito e missão:</h2>
          <p className={styles["p"]}>
            No DuMar, nossa missão é oferecer peixes frescos diretamente de
            pescadores locais, contribuindo para a saúde dos consumidores e
            preservando os oceanos. Ao escolher o DuMar, você apoia práticas
            pesqueiras sustentáveis, ajuda na renda dos pescadores e faz parte
            de uma comunidade comprometida com um futuro mais saudável e
            consciente. Junte-se a nós no DuMar - onde cada compra conta para
            uma vida melhor e um planeta mais preservado.
          </p>
        </section>
      </article>

      <section className={`row ${styles["equipe"]}`}>
        <h2 className={styles["h2"]}>Nossa Equipe: </h2>
        <div className={`row ${styles["eqp"]}`}>
          <div className="col-md-4" id={styles["imgs"]}>
            <a
              href="https://www.linkedin.com/in/alanesgomes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Alanes} className="img-fluid" alt="Alanes" />
            </a>
            <p>Alanes</p>
            <a href="mailto:alanesGsilva@gmail.com">alanesGsilva@gmail.com</a>
          </div>

          <div className="col-md-4" id={styles["imgs"]}>
            <a
              href="https://www.linkedin.com/in/andreza-caldeira-8236841b6/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Andrezaa} className="img-fluid" alt="Andrezaa" />
            </a>
            <p>Andreza</p>
            <a href="mailto:Andrezacalderamorais@hotmail.com">
              Andrezacalderamorais@hotmail.com
            </a>
          </div>

          <div className="col-md-4" id={styles["imgs"]}>
            <a
              href="https://www.linkedin.com/in/gabriela-gouveia-mota/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Gabii} className="img-fluid" alt="Gabii" />
            </a>
            <p>Gabriela</p>
            <a href="mailto:gabii77leone@gmail.com">gabii77leone@gmail.com</a>
          </div>

          <div className="col-md-4" id={styles["imgs"]}>
            <a
              href="https://www.linkedin.com/in/gersonbarbosajunior/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Gerson} className="img-fluid" alt="Gerson" />
            </a>
            <p>Gerson</p>
            <a href="mailto:gersononline42@gmail.com">
              gersononline42@gmail.com
            </a>
          </div>

          <div className="col-md-4" id={styles["imgs"]}>
            <a
              href="https://www.linkedin.com/in/isabela-alexandre-4069a1272/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={ISABELA} className="img-fluid" alt="ISABELA" />
            </a>
            <p>Isabela</p>
            <a href="mailto:isabelaalexandre8@gmail.com">
              isabelaalexandre8@gmail.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default QuemSomos;
