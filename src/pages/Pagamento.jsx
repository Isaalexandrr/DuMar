import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from './Pagamento.module.css';
import card from '../imagens/card_img.png';



function Pagamento() {


  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <form action="">
          <div className={styles.row}>
            <div className={styles.col}>
              <h3 className={styles.title}>Endereço de Cobrança</h3>
              <div className={styles.inputBox}>
                <span>Nome Completo:</span>
                <input type="text"  placeholder="Seu Nome Completo"/>
              </div>
              <div className={styles.inputBox}>
                <span>Email:</span>
                <input type="email" placeholder="Example@example.com" />
              </div>
              <div className={styles.inputBox}>
                <span>Endereço:</span>
                <input type="text" placeholder="Digite seu endereço completo" />
              </div>
              <div className={styles.inputBox}>
                <span>Cidade:</span>
                <input type="text" placeholder="Recife" />
              </div>
              <div className={`${styles.flex} ${styles.addressFlex}`}>
                <div className={styles.inputBox}>
                  <span>Estado:</span>
                  <input type="text" placeholder="Pernambuco" />
                </div>
                <div className={styles.inputBox}>
                  <span>CEP:</span>
                  <input type="text" placeholder="123 456 123 -88" />
                </div>
              </div>
            </div>
            <div className={styles.col}>
              <h3 className={styles.title}>Pagamento</h3>
              <div className={styles.inputBox}>
                <img className={styles["img-card"]} src={card} alt="" />
                <span>Método de Pagamento:</span>
                <select id="metodoPagamento" name="metodoPagamento">
                   <optgroup label="Cartão de Crédito">
                    <option value="visa">Visa</option>
                    <option value="mastercard">MasterCard</option>
                    <option value="mastercard">PayPal</option>
                    <option value="mastercard">American Express</option>
                    
                     </optgroup>
                     <optgroup label="PIX">
                    <option value="pix">PIX</option>
                    </optgroup>
                </select>
                
              </div>
              <div className={styles.inputBox}>
                <span>Chave PIX:</span>
                <input type="text" placeholder="Exemplo: seuemail@provedor.com.br"/>
              </div>

              <div className={styles.inputBox}>
                <span>Nome do cartão:</span>
                <input type="text"  placeholder="Nome impresso no cartão"/>
              </div>
              <div className={styles.inputBox}>
                <span>Número do cartão de crédito :</span>
                <input type="number" placeholder="1111-2222-3333-4444" />
              </div>
              <div className={styles.inputBox}>
                <span>Mês de expiração:</span>
                <input type="text" placeholder="Janeiro" />
              </div>
              <div className={`${styles.flex} ${styles.paymentFlex}`}>
                <div className={styles.inputBox}>
                  <span>Ano de expiração:</span>
                  <input type="number" placeholder={2022} />
                </div>
                <div className={styles.inputBox}>
                  <span>CVV :</span>
                  <input type="text" placeholder={1234} />
                </div>
              </div>
            </div>
          </div>
          <input
            className={styles.submitBtn}
            type="submit"
            value="Finalizar pedido"
          />
        </form>
      </div>
    </div>
  );
}

export default Pagamento;
