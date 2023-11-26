import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from './QuemSomos.module.css';




function Login() {
    return (
        <div class="container text-left">
          <h2>
            Sobre Nós
            <br />
          </h2>
          <p>
            <strong>“DuMar”</strong> é um E-commerce (comércio eletrônico) que
            oferece serviços de compra e venda
            <br />
            de peixes e frutos do mar.
          </p>
          <h2>
            Propósito e missão:
            <br />
          </h2>
          <p>
            No DuMar, nossa missão é oferecer peixes frescos diretamente de
            pescadores locais,
            <br />
            contribuindo para a saúde dos consumidores e preservando os oceanos.
            Ao escolher o
            <br />
            DuMar, você apoia práticas pesqueiras sustentáveis, ajuda na renda
            dos pescadores e faz
            <br />
            parte de uma comunidade comprometida com um futuro mais saudável e
            consciente.
            <br />
            Junte-se a nós no DuMar - onde cada compra conta para uma vida
            melhor e um planeta
            <br />
            mais preservado.
          </p>

          <h2>Nossa Equipe: </h2>
          <div class="row align-items-end">
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

            <div class="col">
              <img src={Gabii} class="card-img-end" alt="..." />
              <br />
              <small>Gabriela</small>
              <h3>gabii77leone@gmail.com</h3>
            </div>

            <div class="col">
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













 )
}
export default QuemSomos;