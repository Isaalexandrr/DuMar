import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './home.module.css';
import logo2 from './imagens/logo2.png';
import userIcon from './imagens/login.png'; 
import cartIcon from './imagens/carrinho.png'
import loupeIcon from './imagens/loupe.png'
import peixe from './imagens/peixe.png';
import onda1 from './imagens/onda1.png';
import aguaviva from './imagens/aguaviva.png';
import alga from './imagens/alga.png';

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <div className={styles.searchBox}>
        <button className={styles.searchButton}>
          <img className={styles.searchIcon} src={loupeIcon} alt="Ícone de pesquisa" />
        </button>
          
        </div>
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
        <h2> Você sabia que 70% dos <br /> resíduos do mar brasileiro <br /> são plástico?</h2>
      </div>

      <div className={styles['img-peixe']}>
        <img src={peixe} className={styles['img-peixe']} alt="Peixinhos" />
      </div>
      <div className={styles['img-alga']}>
        <img src={alga} className={styles['img-alga']} alt="Alga" />
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

export default Home;
