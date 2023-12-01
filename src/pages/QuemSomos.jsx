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

    <main className={styles["container"]}>
     
        <article className={styles["primeiraparte"]} >
        <section className={styles["sobre"]} >


          <h2>
            Sobre Nós:
            
          </h2>

          <p>
          <strong>“DuMar”</strong> é um E-commerce (comércio eletrônico)
          que oferece serviços de compra e venda de peixes
          e frutos do mar.
          </p>
        </section>


        <section class="col-6 text-start">



          <h2>
            Propósito e missão:

          </h2>
          <p>
          No DuMar, nossa missão é oferecer peixes frescos
          diretamente de pescadores locais, contribuindo
          para a saúde dos consumidores e preservando os
          oceanos. Ao escolher o  DuMar, você apoia práticas
          pesqueiras sustentáveis, ajuda na renda dos
          pescadores e faz parte de uma comunidade
          comprometida com um futuro mais saudável e
          consciente.  Junte-se a nós no DuMar - onde cada
          compra conta para uma vida melhor e um planeta
          mais preservado.
          </p>
        </section>

        </article>


        <section className={styles["equipe"]} >
        <h2>Nossa Equipe: </h2>
          <div className={styles["eqp"]} >
            
            <div class="col">
              <img src={Alanes} class="card-img-end" alt="..." />
              <p>Alanes</p>
              <a href="mailto: alanesGsilva@gmail.com">alanesGsilva@gmail.com</a>
            </div>

            <div class="col">
              <img src={Andrezaa} class="card-img-end" alt="..." />
              <p>Andreza</p>
              <a href="mailto: Andrezacalderamorais@hotmail.com"> Andrezacalderamorais@hotmail.com </a>
            </div>

            <div class="col ">
              <img src={Gabii} class="card-img-end" alt="..." />
              <p>Gabriela</p>
              <a href="mailto: gabii77leone@gmail.com"> gabii77leone@gmail.com </a>
            </div>

            <div class="col ">
              <img src={Gerson} class="card-img-end" alt="..." />
              <p> Gerson</p>
              <a href="mailto:gersononline42@gmail.com "> gersononline42@gmail.com </a>
            </div>

            <div class="col">
              <img src={ISABELA} class="card-img-end" alt="..." />
              <p>Isabela</p>
              <a href="mailto: isabelaalexandre8@gmail.com<"> isabelaalexandre8@gmail.com </a>
            </div>
          </div>
        </section>

     
    </main>


  )

}
export default QuemSomos;








