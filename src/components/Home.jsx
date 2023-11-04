import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './home.module.css';
import logo2 from './imagens/logo2.png';
import peixe from './imagens/peixe.png';


function Home() {
  return (
    <div className="serch-box">
      <div className="serch-btn">
        <input type="text" className="serch-txt" placeholder="Pesquisar" />
      </div>

      <div className={styles['img-logo2']}>
       <img src={logo2} className={styles['img-logo2']} alt="DUMAR" />
      </div>
      <div className="container mt-5">
        <button className={`btn btn-sm ${styles.botaoEscuro}`}>Entrar</button>
     </div>

      <div className="titulo">
        <h1 className="text-primary">Consumo Consciente</h1>
      </div>
      <div className="subtitulo">
        <h2> Você sabia que 70% dos resíduos do mar brasileiro são plástico?</h2>
      </div>
      <div className={styles['img-peixe']}>
       <img src={peixe} className={styles['img-peixe']} alt="peixinhos" />
      </div>
      
    </div>
    
  );
}

export default Home;
