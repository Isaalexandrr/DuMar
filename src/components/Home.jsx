import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './home.module.css';
import logo2 from './imagens/logo2.png';
import userIcon from './imagens/login.png'; 
import cartIcon from './imagens/carrinho.png'
import loupeIcon from './imagens/loupe.png';
import menu from './imagens/menu.png';
import lado_direito from './imagens/lado_direito.png';
import lado_esquedo from './imagens/lado_esquerdo.png';


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
  
        <div className={styles['titulo']}>
        <p>DuMar para sua mesa!</p>
      </div>
      <div className={styles['subtitulo']}>
        <p> Produtos fresquinho diariamente!</p>
      </div>
      <div className={styles['img-esquerdo']}>
       <img src={lado_esquedo} className={styles['lado_esquerdo']} alt="icones" />
      </div>
      <div className={styles['img-direito']}>
       <img src={lado_direito} className={styles['lado_direito']} alt="icones" />
      </div>
      </div>
    );
} 
export default Home;
  
