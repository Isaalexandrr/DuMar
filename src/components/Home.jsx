import 'bootstrap/dist/css/bootstrap.min.css';
import './home.module.css';

function Home() {
    return (
        <div>
        <div class="serch-box">
          <input type="text" class="serch-txt" placeholder="Pesquisar"/>
          <a href="#" class="serch-btn">
            <img src="loupe.png" width="20" height="18" alt="Lupa"/>
          </a>
        </div>
        <div class="img-logo2">
          <img src="./imagens/logo2.png"  height="50%" alt="DUMAR"/>
        </div>
       <div class="titulo">
        <h1  style="color: #A8F2FE;" >Consumo <br/> Consiente</h1>
       </div>
       <div class="subtitulo"> 
         <h2> Você sabia que 70% dos <br/>resíduos do mar brasileiro <br/>são plástico?</h2> 
       </div>
      <div class="img-peixe"> 
        <img src="peixe.png" alt="peixinhos"/> 
      </div> 
    
      <div class="img-menu">
        <img src="menu.png" alt="menu"/>
    
      </div>
    </div>
    );
  }

  export default Home();