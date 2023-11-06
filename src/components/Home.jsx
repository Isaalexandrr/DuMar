import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './home.module.css';
import logo2 from './imagens/logo2.png';
import menu from './imagens/menu.png';
import lado_direito from './imagens/lado_direito.png';
import lado_esquedo from './imagens/lado_esquerdo.png';

function Home() {
  return (
    <>
      <div className="serch-btn">
        <input type="text" className="serch-txt" placeholder="Pesquisar" />
      </div>
      <div className={styles['img-menu']}>
       <img src={menu} className={styles['menu']} alt="icones" />
      </div>
      <div className={styles['img-logo2']}>
      <img src={logo2} className={styles['img-logo2']} alt="DUMAR" />
      </div>
      <div className={styles['titulo']}>
        <p>Consumo Consciente</p>
      </div>
      <div className={styles['subtitulo']}>
        <p> Você sabia que 70% dos resíduos do mar brasileiro são plástico?</p>
      </div>
      <div className={styles['img-esquerdo']}>
       <img src={lado_esquedo} className={styles['lado_esquerdo']} alt="icones" />
      </div>
      <div className={styles['img-direito']}>
       <img src={lado_direito} className={styles['lado_direito']} alt="icones" />
      </div>
      </>
  );
}

export default Home;