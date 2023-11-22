import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from './Consumo.module.css';
import icon from './imagens/icons8-ajuda-50.png';
import logo1 from './imagens/logo1.png';
import logo2 from './imagens/logo2.png';





const Consumo = () => {

return (
<div>
<section style={{ backgroundColor: 'black', color: 'white' }} className={styles['background-section']}>

<div className='container-fluid p-0' >
        
        <div className={styles['nav-bar']}>  
       
       <nav class="navbar navbar-light bg-light"> 
          
        <a class="navbar-brand" href="#">
            <div className='logos'>
                    <img src={logo1} className={styles['img-logo1']} alt="DUMAR" />
                    <img src={logo2} className={styles['img-logo2']} alt="DUMAR" />
            </div>
        </a>

        <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
            <form class="d-flex" role="search">
            <input className={styles['barra']} class="form-control" type="search" placeholder="Pesquisar" aria-label="Search"/>
            <button className={styles['lupa']} class="btn p-0" type="submit">
            <i class="bi bi-search">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
            </i>
        </button>
        </form>
             </div>
        </nav>
  
          <div className={styles['pessoa-carro']}>

          <button type="button" class=" btn-secondary btn-sm" className={styles['entrar']}> 
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16" color='white'> 
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/></svg>
            <p>Entrar</p>
          </button>
  
          <button type="button" class="btn-secondary btn-sm"  className={styles['carrinho']} >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16" color='white'>
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/></svg>
          </button>
          </div>
          
       </nav>


     <nav class="navbar-expand-lg navbar-light m-0 p-0 ">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Alterna navegação">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div id="navbarNavDropdown" className={styles['personalize-bg']}>
         <ul class="navbar-nav ms-5 gap-4 ">
            <li class="nav-item active ">
                <a  class="nav-link" href="#">Quem somos <span class="sr-only"></span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Contato</a>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="#">Consumo consciente</a>
            </li>

            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" 
                href="#" id="navbarDropdownMenuLink" 
                role="button" 
                data-toggle="dropdown" 
                aria-haspopup="true" 
                aria-expanded="false">Categorias</a>
        <div class="dropdown-menu" >
          <a class="dropdown-item" href="#">Peixes</a>
          <a class="dropdown-item" href="#">Moluscos</a>
          <a class="dropdown-item" href="#">Crustáceos</a>
        </div>
            </li>

        </ul>
      </div>
    </nav>

  </div>
  </div>
  
 <section>
  <div className='container-consumo'style={{ display: 'flex', alignItems: 'flex-start' }}> 
    <h1>Consumo Consciente</h1>
  </div>   

    
 <div className="row px-5 gap-5 " style={{ position: "absolute", top: "65%", left:150, transform: "translateY(-50%)"}}>
   <div className="col-md-3"style={{ backgroundColor: "rgba(255, 255, 255, 0.5)", borderRadius: "15px",display: "flex", flexDirection: "column", alignItems: "center"}}>
    <img className={styles['img-inter']} src={icon} alt="" />
   <div className={styles['texto-sobre']}>O que é?</div>
  <p>Consumo consciente é fazer escolhas de compra considerando o impacto ambiental e social dos produtos. Envolve preferir opções sustentáveis e éticas para promover um estilo de vida mais responsável.</p>
  </div>

   <div className="col-md-3 "style={{ backgroundColor: "rgba(255, 255, 255, 0.5)", borderRadius: "15px",display: "flex", flexDirection: "column", alignItems: "center" }}>
   <img className={styles['img-inter']} src={icon} alt="" />
   <div className={styles['texto-sobre']}>Como?</div>
   <p>Pratique o consumo consciente ao optar por produtos duráveis e sustentáveis. Reduza o desperdício ao reciclar e reutilizar sempre que possível.</p>
  </div>

   <div className="col-md-3"style={{ backgroundColor: "rgba(255, 255, 255, 0.5)", borderRadius: "15px",display: "flex", flexDirection: "column", alignItems: "center"}}>
    <img className={styles['img-inter']} src={icon} alt="" />
   <div className={styles['texto-sobre']}>Porque?</div>
   <p>Pratique o consumo consciente ao optar por produtos duráveis e sustentáveis. Reduza o desperdício ao reciclar e reutilizar sempre que possível.</p>
  </div>
  </div>
  </section>
  

  
  

</section>
</div>





);
}
export { Consumo };

