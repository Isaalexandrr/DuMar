
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

import styles from "./produtos.module.css";
import ondacoral from "../imagens/onda-coral.png";
import ondaestrela from "../imagens/onda-estrela-3.png";








function Products() {
    return (
    <div className="container-fluid p-0">
        <main>
           
            <section> 
                <div class="col-8">
                    <img src={ondaestrela} className={styles['onda-estrela']} alt="DUMAR" />
                    
                </div>
                <div class="col-12" className={styles['sessao']}>
                    <div className={styles['texto']}>
                        <h1>MEUS PEDIDOS</h1> 
                    </div>

                    <div className={styles['caixa']} >
                        
                        <div className={styles['grid-caixa']}>
                            <div className={styles['grid-item']} > 
                                <div className={styles['pedido']}>
                                    <div className={styles['pedido-1']}>
                                        <p>Pedido sendo preparado</p>
                                    </div>
                                    <p>0000</p>
                                </div>

                               

                                <div className={styles['vendedor']}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16" color='#0A376E'>
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/> 
                                    </svg>
                                    <p>**Nome do vendedor**</p>
                                </div>

                               

                                <div className={styles['qnt-produto']}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-1-square-fill" viewBox="0 0 16 16" color='#0A376E'>
                                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm7.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z"/>
                                    </svg>
                                    <p>**Nome do produto***</p>
                                </div>

                                <div className={styles['avaliacao']} >
                                    <p>Avaliação</p>
                                 
                                                                            
                                </div>
                                

                                <div className={styles['comprar-nov']}> 
                                  <button type="submit">Comprar novamente</button>
                                </div>
                            </div>
                        </div>

                        <div className={styles['grid-caixa']}>
                                <div className={styles['grid-item']}>
                                    
                                   <div className={styles['pedido']}>
                                    <div className={styles['pedido-2']}>
                                        <p>Pedido concluído</p>
                                    </div>
                                    <p>0000</p>
                                </div>

                               

                                <div className={styles['vendedor']}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16" color='#0A376E'>
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/> 
                                    </svg>
                                    <p>**Nome do vendedor**</p>
                                </div>

                               

                                <div className={styles['qnt-produto']}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-1-square-fill" viewBox="0 0 16 16" color='#0A376E'>
                                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm7.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z"/>
                                    </svg>
                                    <p>**Nome do produto***</p>
                                </div>

                                <div className={styles['avaliacao']} >
                                    <p>Avaliação</p>
                                 
                                                                            
                                </div>
                                

                                <div className={styles['comprar-nov']}> 
                                  <button type="submit">Comprar novamente</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles['caixa']} >

                        <div className={styles['grid-caixa']}>
                            <div className={styles['grid-item']} > 
                                <div className={styles['pedido']}>
                                    <div className={styles['pedido-3']}>
                                        <p>Pedido cancelado</p>
                                    </div>
                                    <p>0000</p>
                                </div>

                            

                                <div className={styles['vendedor']}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16" color='#0A376E'>
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/> 
                                    </svg>
                                    <p>**Nome do vendedor**</p>
                                </div>

                            

                                <div className={styles['qnt-produto']}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-1-square-fill" viewBox="0 0 16 16" color='#0A376E'>
                                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm7.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z"/>
                                    </svg>
                                    <p>**Nome do produto***</p>
                                </div>

                                <div className={styles['avaliacao']} >
                                    <p>Avaliação</p>
                                
                                                                            
                                </div>
                                

                                <div className={styles['comprar-nov']}> 
                                <button type="submit">Comprar novamente</button>
                                </div>
                            </div>
                        </div>

                        <div className={styles['grid-caixa']}>
                                <div className={styles['grid-item']}>
                                    
                                <div className={styles['pedido']}>
                                    <p>**status do pedido**</p>
                                    <p>**n° pedido**</p>
                                </div>

                            

                                <div className={styles['vendedor']}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16" color='#0A376E'>
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/> 
                                    </svg>
                                    <p>**Nome do vendedor**</p>
                                </div>

                            

                                <div className={styles['qnt-produto']}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-1-square-fill" viewBox="0 0 16 16" color='#0A376E'>
                                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm7.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z"/>
                                    </svg>
                                    <p>**Nome do produto***</p>
                                </div>

                                <div className={styles['avaliacao']} >
                                    <p>Avaliação</p>
                                
                                                                            
                                </div>
                                

                                <div className={styles['comprar-nov']}> 
                                <button type="submit">Comprar novamente</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles['imagem']}>
                            <img src={ondacoral} className={styles['onda-coral']} alt="DUMAR" /> 
                    </div>
                </div>
            </section>
        </main>
  
    </div>
    );
}

export default Products;