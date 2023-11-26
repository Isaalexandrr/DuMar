import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from './Consumo.module.css';
import icon from '../imagens/icons8-ajuda-50.png';
import foca from '../imagens/Foca.jpeg';
import tartaruga from '../imagens/Tartaruga.jpeg';
import peixes from '../imagens/peixes.png';
import lixo from '../imagens/lixo.png';
import jogandolixo from '../imagens/jogandolixo.png';
import limpandolixo from '../imagens/limpandolixo.png';
import reciclavel from '../imagens/reciclavel.png';
import proibidonadar from '../imagens/proibidonadar.png';

const Consumo = () => {

return (
<div>
<section style={{ backgroundColor: 'black', color: 'white' }} className={`mx-5 ${styles['background-section']}`}>


<div className='container-fluid p-0' >
        
        <div className={styles['nav-bar']}>  

  </div>
  </div>
  
 <section className={styles.sectionBlue}>

 <div className="row px-5 gap-4" style={{ position: "absolute", top: "220%", transform: "translateY(-50%)", width: "80%"}}>
 <div className='container-consumo' style={{ display: 'flex', alignItems: 'flex-start' }}>
    <h1>CONSUMO CONSCIENTE!</h1>
  </div>  
  <div className="col-md-3 "style={{ backgroundColor: "rgba(255, 255, 255, 0.5)", borderRadius: "15px",display: "flex", flexDirection: "column", alignItems: "center" }}>
   <img className={styles['img-inter']} src={icon} alt="" />
   <div className={styles['texto-sobre']}>O que?</div>
   <p>Consumo consciente é fazer escolhas de compra considerando o impacto ambiental e social dos produtos. Envolve preferir opções sustentáveis e éticas para promover um estilo de vida mais responsável.</p>
   </div>

   <div className="col-md-3 "style={{ backgroundColor: "rgba(255, 255, 255, 0.5)", borderRadius: "15px",display: "flex", flexDirection: "column", alignItems: "center" }}>
   <img className={styles['img-inter']} src={icon} alt="" />
   <div className={styles['texto-sobre']}>Como?</div>
   <p>Pratique o consumo consciente ao optar por produtos duráveis e sustentáveis. Reduza o desperdício ao reciclar e reutilizar sempre que possível.</p>
   </div>

   <div className="col-md-3 "style={{ backgroundColor: "rgba(255, 255, 255, 0.5)", borderRadius: "15px",display: "flex", flexDirection: "column", alignItems: "center"}}>
    <img className={styles['img-inter']} src={icon} alt="" />
   <div className={styles['texto-sobre']}>Porque?</div>
   <p>Pratique o consumo consciente ao optar por produtos duráveis e sustentáveis. Reduza o desperdício ao reciclar e reutilizar sempre que possível.</p>
   

  </div>
 

  
  <section className={styles.sectionDarkBlue}>
  <div className='container-poluição'style={{ display: 'flex', alignItems: 'flex-start'}}> 
   <h1>POLUIÇÃO!</h1>
   <p>Nos mares do nosso planeta, um drama silencioso se desenrola diariamente. <br />Milhões de toneladas de plástico invadem nossos oceanos, transformando a <br />majestosa vastidão azul em um trágico cenário de poluição. A vida marinha,<br /> antes vibrante, agora luta pela sobrevivência em um mar de detritos<br /> plásticos. É hora de mudar esse enredo. Juntos, podemos recusar o uso de <br />plástico descartável, abraçar alternativas sustentáveis e restaurar a beleza <br />dos oceanos que são a essência da vida na Terra. O futuro do mar está em<br /> nossas mãos. #PareComOPlástico, #SalveOsOceanos.</p>
   <img className={styles['img-tartaruga']} src={tartaruga} alt="" style={{ width: '280px', height: '150px' }}/>
   <img className={styles['img-foca']} src={foca} alt="" style={{ width: '280px', height: '150px' }}/>

        
  </div>
  </section>

  <section className={styles.sectionLightBlue}>
  <div className='container-pesca'style={{ display: 'flex', alignItems: 'flex-start'}}> 
   <h1 style={{ whiteSpace: 'nowrap' }}>PESCA PROIBIDA!</h1>
   <p>Nos vastos oceanos do mundo, muitas espécies de peixes<br /> enfrentam a ameaça iminente da extinção devido à pesca<br /> insustentável e à degradação do ambiente marinho.Entre essas <br />espécies estão aquelas cuja pesca é proibida devido à necessidade<br /> urgente de preservação.<br />
   Medidas rigorosas de proibição da pesca são implementadas para<br /> tentar reverter o declínio dessas populações. No entanto, muitas<br /> vezes, a fiscalização inadequada e a demanda persistente por essas<br /> espécies contribuem para a pesca ilegal e o descumprimento das<br /> regulamentações.<br />
   O consumo desenfreado de peixes ameaçados de extinção <br />alimenta um ciclo perigoso. Além da redução das populações <br />dessas espécies, há impactos significativos na biodiversidade<br /> marinha, desequilibrando ecossistemas e prejudicando outras<br /> formas de vida marinha.<br />
   Além disso, a perda de peixes-chave na cadeia alimentar marinha <br />pode ter consequências graves para as comunidades humanas que <br />dependem desses recursos para alimentação e subsistência.</p>

   <div class="container mt-4">
  <div class="row">
    <div class="col-md-4 " >
      <div class="card" style={{ backgroundColor: "rgba(255, 255, 255, 0.5)", borderRadius: "15px",display: "flex", flexDirection: "column", alignItems: "center", left:200, top:'30%', width:250, height:400 }}>
      
        <div class="card-body d-flex flex-column align-items-start">
          <h1 class="card-title font-weight-bold text-dark custom-text-size text-center "  style={{
          textAlign: "center", margin:"0 auto"}}>
          ESPÉCIES SERIAMENTES AMEAÇADAS DE <br />EXTINÇÃO <br />
          <strong><span class="text-danger">!!PESCA PROIBIDA!!</span></strong>
          </h1>
        </div>
        <img className={styles['img-peixes']} src={peixes} alt="" ></img>
      </div>
    </div>

    

    
  </div>
</div>

   
  
              
  </div>
  </section>

  <section>
   <div>
   <div className='container-pesca'style={{ display: 'flex', alignItems: 'flex-start'}}> 
   <h1 style={{ whiteSpace: 'nowrap' }}>DICAS DE PRESERVAÇÃO</h1>
   <div className="lixo">
   <img className={styles['img-lixo']} src={lixo} alt="" ></img>
   <h4>1- troque <br /> objetos <br /> descartáveis de  <br />plástico por <br /> objetos de  <br />papeis</h4>
   </div>
   <div className="jogandolixo">
   <img className={styles['img-jogandolixo']} src={jogandolixo} alt="" ></img>
   <h3>2 - Recolha <br /> todo seu lixo, não <br /> deixe na praia</h3>
   </div>

   <div className="limpandolixo">
   <img className={styles['img-limpandolixo']} src={limpandolixo} alt="" ></img>
   <h5>3 - Participe de  <br />movimentos de <br /> limpezas <br /> costeiras</h5>
   </div>

   <div className="reciclavel">
   <img className={styles['img-reciclavel']} src={reciclavel} alt="" ></img>
   <h6>4 - Recicle seu  <br />lixo, separe seu  <br />lixo por categoria, <br />isso facilita na  <br />hora da reciclagem</h6>
   </div>

   <div className="proibidonadar">
   <img className={styles['img-proibidonadar']} src={proibidonadar} alt="" ></img>
   <h2>5 - Respeite as  <br />sinalizações de  <br />praia, preserve sua <br /> vida e a vida dos <br /> oceanos, <br /> respeitando as <br /> instruções</h2>
   </div>



  


   </div>
   </div>

  </section>

  
  </div>
  </section>
  

  

  
 </section>





</div>


);
}
export { Consumo };
