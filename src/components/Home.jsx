import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './home.module.css';
import logo2 from './imagens/logo2.png';
import userIcon from './imagens/login.png'; 
import cartIcon from './imagens/carrinho.png'
import peixe from './imagens/peixe.png';
import onda1 from './imagens/onda1.png';
import aguaviva from './imagens/aguaviva.png';
import onda2 from './imagens/onda2.png';
import alga from './imagens/alga.png';
import peixe2 from './imagens/peixe2.png';

function Home() {
  function Home() {
    return (
      <div className={styles.container}>
        <div className={styles.searchContainer}>
          <div className={styles.searchBox}></div>
        </div>
  
        <button className={styles.userButton}>
          <img src={userIcon} className={styles.userIcon} alt="Ícone de Usuário" />
          Entrar
        </button>
  
        <button className={styles.cartButton}>
          <img src={cartIcon} className={styles.cartIcon} alt="Ícone de Carrinho de Compra" />
        </button>
  
        <div className={`${styles['img-logo2']} ${styles['margin-top']}`}>
          <img src={logo2} className={styles['img-logo2']} alt="DUMAR" />
        </div>
  
        <div className="titulo">
          <h1 className="text-primary">Consumo Consciente</h1>
        </div>
  
        <div className="subtitulo">
          <h2>
            Você sabia que 70% dos <br /> resíduos do mar brasileiro <br /> são plástico?
          </h2>
        </div>
  
        <div className={styles['img-peixe']}>
          <img src={peixe} className={styles['img-peixe']} alt="Peixinhos" />
        </div>
  
        <div className={styles['img-alga']}>
          <img src={alga} className={styles['img-alga']} alt="Alga" />
        </div>
  
        <div>
          <img src={peixe2} className="peixe2" alt="icone" />
        </div>
  
        <div>
          <img src={onda2} className="onda2" alt="icone" />
        </div>
  
        <div className={styles['img-onda1']}>
          <img src={onda1} className={styles['img-onda1']} alt="Onda" />
        </div>
  
        <div className={styles['img-aguaviva']}>
          <img src={aguaviva} className={styles['img-aguaviva']} alt="Agua viva" />
        </div>
      </div>
    );
  }
  
} 
export default Home;
  