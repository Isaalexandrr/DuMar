import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.module.css';

function Home() {
  return (
    <div className="serch-box">
          <div className="serch-btn">
            <input type="text" className="serch-txt" placeholder="Pesquisar" />
        </div>

      <div className="img-logo2">
          <img src="./imagens/logo2.png" className="img-logo2" alt="DUMAR" />
      </div>
      <div className="titulo">
       <h1 className="text-primary">Consumo Consciente</h1>
      </div>
      <div className="subtitulo">
        <h2> Você sabia que 70% dos resíduos do mar brasileiro são plástico?</h2>
      </div>
      <div className="img-peixe">
          <img src="peixe.png" className="img-peixe" alt="peixinhos" />
      </div>
      <div className="img-menu">
          <img src="menu.png" className="img-menu" alt="menu" />
      </div>
    </div>
  );
}

export default Home;
