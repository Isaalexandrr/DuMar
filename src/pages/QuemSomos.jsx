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

        <div class= "container">
        <div class="row">
              <div class="col-6 text-center ">
                
                  <div className={styles["sobre"]}>
            
          <p>
          <h2>
            Sobre Nós:
            <br />
          </h2>
            <strong>“DuMar”</strong> é um E-commerce (comércio eletrônico)
            <br />
             que oferece serviços de compra e venda de peixes
            <br />
             e frutos do mar.
          </p>
              </div>

                 
              
          </div>
         
              <div class="col-6 text-start">
            <div className={styles["missão"]}>
        
          <p>
          <h2>
            Propósito e missão:
            <br />
          </h2>
            No DuMar, nossa missão é oferecer peixes frescos  <br />
            diretamente de pescadores locais, contribuindo <br />
            para a saúde dos consumidores e preservando os <br />
            oceanos. Ao escolher o  DuMar, você apoia práticas <br />
            pesqueiras sustentáveis, ajuda na renda dos <br />
             pescadores e faz parte de uma comunidade <br />
              comprometida com um futuro mais saudável e  <br />
            consciente.  Junte-se a nós no DuMar - onde cada  <br />
             compra conta para uma vida melhor e um planeta  <br />
            mais preservado.
          </p>
        </div>
        </div>

        <footer>
        <div className={styles["equipe"]} >
          
          <div class="row align-items-end">
          <h2>Nossa Equipe: </h2>
            <div class="col">
              <img src={Alanes} class="card-img-end" alt="..." />
              <br />
              <small>Alanes</small>
              <h3>alanesGsilva@gmail.com</h3>
            </div>

            <div class="col">
              <img src={Andrezaa} class="card-img-end" alt="..." />
              <br />
              <small>Andreza</small>
              <h3>Andrezacalderamorais@hotmail.com</h3>
            </div>

            <div class="col ">
              <img src={Gabii} class="card-img-end" alt="..." />
              <br />
              <small>Gabriela</small>
              <h3>gabii77leone@gmail.com</h3>
            </div>

            <div class="col ">
             <img src={Gerson} class="card-img-end" alt="..." />
              <br />
              <small> Gerson</small>
              <h3>gersononline42@gmail.com</h3>
            </div>

            <div class="col">
              <img src={ISABELA} class="card-img-end" alt="..." />
              <br />
              <small>Isabela</small>
              <h3>isabelaalexandre8@gmail.com</h3>
            </div>
          </div>
          </div>
       </footer>
        </div>
      </div>



    )

}
export default QuemSomos;








       