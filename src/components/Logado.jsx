import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

import styles from "./Logado.module.css";

import salmao from "../imagens/download.jpeg"
import BotaoAdicionar from "../components/Botao/BotaoAdicionar";
import BotaoApagarItem from "../components/Botao/BotaoApagarItem";
import { IoPersonSharp, IoCartSharp } from "react-icons/io5";
import { DropdownItem } from "react-bootstrap";

function Logado() {
  return (
    <div class="row">
      <div className={styles["pessoa-carro-nome"]}>
        <Dropdown>
          <Dropdown.Toggle
            variant="action"
            id="dropdown-basic"
            className={styles["seu-nome"]}
          >
            Seu nome
          </Dropdown.Toggle>

          <Dropdown.Menu className={styles["edit"]}>
            <div className={styles["usuario"]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-person-circle"
                viewBox="0 0 16 16"
                color="#B0C5D1"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path
                  fill-rule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                />
              </svg>
              <div className={styles["usuario-nome"]}>
                <a href="#">Seu nome</a>
                <p className={styles["usuario-email"]}>
                  emailusuário@gmail.com
                </p>
              </div>
            </div>

            <DropdownItem href="/Products">
              <div className={styles["compras"]}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-cart"
                  viewBox="0 0 16 16"
                  color="#0A376E"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                </svg>
                <p>Minhas compras</p>
              </div>
            </DropdownItem>

            <DropdownItem to="#/action-3">
              <div className={styles["dados"]}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-person"
                  viewBox="0 0 16 16"
                  color="#0A376E"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z" />
                </svg>
                <p>Meus dados</p>
              </div>
            </DropdownItem>

            <DropdownItem to="#/action-3">
              <div className={styles["conf"]}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-lock"
                  viewBox="0 0 16 16"
                  color="#0A376E"
                >
                  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1" />
                </svg>
                <p>Configuração</p>
              </div>
            </DropdownItem>

            <DropdownItem to="#/action-3">
              <div className={styles["sair"]}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-box-arrow-right"
                  viewBox="0 0 16 16"
                  color="#DC0032"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                  />
                </svg>
                <p>Sair</p>
              </div>
            </DropdownItem>
          </Dropdown.Menu>
        </Dropdown>

        <button type="button" className={styles["entrar"]}>
          <IoPersonSharp />
        </button>
        <Dropdown>
          <Dropdown.Toggle
            variant="action"
            id="dropdown-basic"
            className={styles["car"]}
          >
            <IoCartSharp />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <div className={styles["carrinho"]}>
              <h4>Meu carrinho</h4>
            </div>
            <div className={styles["box"]}>
              <form className={styles["produto"]}>
                <input type="checkbox" className={styles["produto-input"]} />
                <div className={styles["produto-info"]}>
                <img src={salmao} alt=""  width="70" height="70"/>
                  <div className={styles['info']}>
                    <p>Salmão</p>
                    <p>R$59,90</p>
                  </div>

                  <div className={styles["botao"]}>
                    <BotaoAdicionar />
                  </div>
                  <div className={styles["apagar"]}>
                    <BotaoApagarItem />
                  </div>
                </div>
              </form>

              <div className={styles["cupom"]}>
                <input type="Search" placeholder="Cupom:" aria-label="Search" />
              </div>
              <div className={styles["valor"]}>
                <div className={styles["sub-valor"]}>
                  <p>Subtotal:</p>
                  <p>R$ 59,90</p>
                </div>
                <div className={styles["entrega-valor"]}>
                  <p>Entrega:</p>
                  <p>R$ 9,99</p>
                </div>
                <div className={styles["desconto-valor"]}>
                  <p>Desconto:</p>
                  <p>-R$ 5,99</p>
                </div>
                <div className={styles["total-valor"]}>
                  <p>Total:</p>
                  <p className={styles["total"]}>R$ 63,90</p>
                </div>
              </div>
              <div className={styles["finalizar"]}>
                <Link to="/Pagamento">
                  <button type="submit">Finalizar compra</button>
                </Link>
                <div className={styles["continuar"]}>
                  <a href="/">Continuar comprando</a>
                </div>
              </div>
            </div>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}
export default Logado;
