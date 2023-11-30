import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import ondaestrela3 from "../imagens/onda-estrela-3.png";
import ondacoral from "../imagens/onda-coral.png";
import styles from './Pagamento.module.css';
import card from '../imagens/card_img.png';


function Pagamento (){
    return(
    
        <div className={styles.container}>
              <div className="container">
                <form action="">
                    <div className="row">
                        <div className="col">
                            <h3 className="title">Endereço de Cobrança</h3>
                            <div className="inputBox">
                                <span>Nome Completo:</span>
                                <input type="text" />
                            </div>
                            <div className="inputBox">
                                <span>Email:</span>
                                <input type="email" placeholder="example@example.com" />
                            </div>
                            <div className="inputBox">
                                <span>Endereço:</span>
                                <input type="text" />
                            </div>
                            <div className="inputBox">
                                <span>Cidade:</span>
                                <input type="text" placeholder="Recife" />
                            </div>
                            <div className="flex">
                                <div className="inputBox">
                                    <span>Estado:</span>
                                    <input type="text" placeholder="Brasil" />
                                </div>
                                <div className="inputBox">
                                    <span>CEP:</span>
                                    <input type="text" placeholder="123 456 123 -88" />
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <h3 className="title">Pagamento</h3>
                            <div className="inputBox">
                                <span>Cartões aceitos:</span>
                                <img className={styles["img-card"]} src={card} alt=""></img>
                            </div>
                            <div className="inputBox">
                                <span>Nome no cartão:</span>
                                <input type="text" />
                            </div>
                            <div className="inputBox">
                                <span>Número do cartão de crédito :</span>
                                <input type="number" placeholder="1111-2222-3333-4444" />
                            </div>
                            <div className="inputBox">
                                <span>Mês de experiência:</span>
                                <input type="text" placeholder="Janeiro" />
                            </div>
                            <div className="flex">
                                <div className="inputBox">
                                    <span>Ano de experiência:</span>
                                    <input type="number" placeholder={2022} />
                                </div>
                                <div className="inputBox">
                                    <span>CVV :</span>
                                    <input type="text" placeholder={1234} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <input
                     type="submit"
                    defaultValue="proceed to checkout"
                    className="submit-btn" />
                </form>
                </div>
    </div> 
            

        


    );
}


export default Pagamento;