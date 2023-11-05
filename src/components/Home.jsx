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
import menu from './imagens/menu.png';
import onda2 from './imagens/onda2.png';
import peixe2 from './imagens/peixe2.png';

function Home() {
  return (
<<<<<<< HEAD
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
=======
    <>
      <div className="serch-btn">
        <input type="text" className="serch-txt" placeholder="Pesquisar" />
      </div>
      <div className={styles['img-logo2']}>
      <img src={logo2} className={styles['img-logo2']} alt="DUMAR" />
      </div>
      <div className={styles['titulo']}>
        <p>Consumo Consciente</p>
>>>>>>> b79193523d71e86d2069606152b094af5976ff19
      </div>
      <div className={styles['subtitulo']}>
        <p> Você sabia que 70% dos resíduos do mar brasileiro são plástico?</p>
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
        <img src={alga} className="alga" alt="icone" />
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
<<<<<<< HEAD
    </div>
=======
      </>
>>>>>>> b79193523d71e86d2069606152b094af5976ff19
  );
}

export default Home;
