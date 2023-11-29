import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

import styles from "./Carrinho.module.css";
import salmao from "../imagens/download.jpeg";
import camarao from "../imagens/camarao.jpg";

<link rel="stylesheet" type="text/css" media="screen" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />

function Carrinho() {
  return (  
 
    <div id={styles["caixa"]} class="row ">
      <div id={styles["grid-caixa"]} class="col-6 m-0 p-0 mt-4">
        <div className={styles["grid-item"]}>

          <div className={styles["carrinho"]}>
            <h4>Meu carrinho</h4>
          </div>

          <form className={styles['produto']}>
            <input type="checkbox" className={styles['produto-input']} />
            <div className={styles["produto-info"]}>
              <div>
                <img src={salmao} alt="" width="70" height="70" />
              </div>  
                
              <div className={styles['info']}>
                <p>Salmão</p>
                <p>R$00,00</p>
              </div>

              <div className={styles['botao']}>
                <input type="button" class="btn btn-default border" value="-" />
                <input styles="width: 4ch" class="form-control rounded-0"  name="quantidade" onchange="preencheTotalProduto()" min="0" max="<?= $tamanho['estoque'];?>" value="0"/>
                <input type="button" class="btn btn-default border" value="+" />
              </div>

              <button type="reset">
                <svg xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    fill="currentColor" 
                    class="bi bi-trash3" 
                    viewBox="0 0 16 16"
                    color="#0A376E">
                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                    </svg>
              </button>
            </div> 
          </form>

          <div className={styles['cupom']}>
            <input type="Search" placeholder="Cupom:" aria-label="Search" />
          </div>
          <div className={styles['valor']}>
            <div className={styles['sub-valor']}>
              <p>Subtotal:</p>
              <p className={styles['sub']}>R$ 00,00</p>
            </div>
            <div className={styles['entrega-valor']}>
              <p>Entrega:</p>
              <p className={styles['ent']}>R$ 00,00</p>
            </div>
            <div className={styles['desconto-valor']}>
              <p>Desconto:</p>
              <p className={styles['desc']}>-R$ 00,00</p>
            </div>
            <div className={styles['total-valor']}>
              <p>Total:</p>
              <p className={styles['total']}>R$ 00,00</p>
            </div>
          </div>
          <div className={styles["finalizar"]}>
            <Link to="/Carrinho">
            <button type="submit">Finalizar compra</button>
            </Link> 
          <div className={styles['continuar']}>
            <a href="/">Continuar comprando</a>
          </div>
          </div>
          

        </div>
         
            

       

          

      </div>
    </div>
    

    
   
  );
}

export default Carrinho;