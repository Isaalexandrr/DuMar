import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

import styles from "./Cart.module.css";
import BotaoAdicionar from "../components/Botao/BotaoAdicionar";
import BotaoApagarItem from "../components/Botao/BotaoApagarItem";

import salmao from "../imagens/salmao.jpg";

import { IoCartSharp } from "react-icons/io5";

function Cart() {
  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="action"
        id="dropdown-basic"
        className={styles["car"]}
      >
        <IoCartSharp />
        <span className={styles["cart-status"]}>1</span>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <div className={styles["carrinho"]}>
          <h4>Meu carrinho</h4>
        </div>
        <div className={styles["box"]}>
          <div className={styles["produto"]}>
            <div className={styles["produto-info"]}>
              <img src={salmao} alt="" width="80" height="80" />
              <div className={styles["info"]}>
                <p>Salmão</p>
                <p>R$79,90</p>
              </div>

              <div className={styles["botao"]}>
                <BotaoAdicionar />
              </div>
              <div className={styles["apagar"]}>
                <BotaoApagarItem />
              </div>
            </div>
          </div>

          <div className={styles["cupom"]}>
            <input type="Search" placeholder="Cupom:" aria-label="Search" />
          </div>
          <div className={styles["valor"]}>
            <div className={styles["sub-valor"]}>
              <p>Subtotal:</p>
              <p>R$ 79,90</p>
            </div>
            <div className={styles["entrega-valor"]}>
              <p>Entrega:</p>
              <p>R$ 9,99</p>
            </div>
            <div className={styles["desconto-valor"]}>
              <p>Desconto:</p>
              <p>-R$ 7,99</p>
            </div>
            <div className={styles["total-valor"]}>
              <p>Total:</p>
              <p className={styles["total"]}>R$ 81,90</p>
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
  );
}
export default Cart;
