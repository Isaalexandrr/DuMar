import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './home.module.css';
import logo2 from './imagens/logo2.png';
import peixe from './imagens/peixe.png';
import menu from './imagens/menu.png';
import onda2 from './imagens/onda2.png';
import alga from './imagens/alga.png';
import peixe2 from './imagens/peixe2.png';

function Home() {
  return (
    <>
      <div className="serch-btn">
        <input type="text" className="serch-txt" placeholder="Pesquisar" />
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
      <div className={styles['img-peixe']}>
       <img src={peixe} className={styles['img-peixe']} alt="peixinhos" />
      </div>
      <div className="img-menu">
        <img src={menu} className="img-menu" alt="menu" />
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
      </>
  );
}

export default Home;
