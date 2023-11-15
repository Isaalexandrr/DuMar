import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import styles from './home.module.css';
import logo1 from './imagens/logo1.png';
import logo2 from './imagens/logo2.png';
import cardumepequeno from './imagens/cardume-peixe-pequeno.png';
import ondaaguaviva from './imagens/onda-agua-viva.png';
import cardumegrande from './imagens/cardume-peixe-grande.png';
import ondacoral from './imagens/onda-coral.png';



<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet"/>

function Home() {
  
  
    return (
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

          <button type="button" class="btn btn-secondary btn-sm" className={styles['entrar']}> 
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16" color='white'> 
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/></svg>
            <p>Entrar</p>
          </button>
  
          <button type="button" class="btn btn-secondary btn-sm"  className={styles['carrinho']} >
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
         <ul class="navbar-nav ms-3 gap-3">
            <li class="nav-item active ">
                <a class="nav-link" href="#">Quem somos <span class="sr-only"></span></a>
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





        <header>
        <div className='row m-0 p-0'>
                <div className="col w-xs-100 w-sm-100 m-0 p-0">

                    <h1 className={styles['texto-h1']}>DuMar para <br /> a sua mesa!</h1>
                    <h3 className={styles['texto-h3']}>Produtos fresquinhos <br />diariamente!</h3>
                    <img src={ondacoral} className={styles['onda-coral']} alt="Onda.coral" />
                    <img src={cardumegrande} className={styles['cardume-g']} alt="Cardume.grande" />
                </div>
            

                <div className="col d-none d-lg-block  m-0 p-0">
                     <img src={cardumepequeno} className={styles['cardume-p']} alt="Cardume.pequeno" />
                     <img src={ondaaguaviva} className={styles['onda-agua']} alt="Onda.aguaviva" />
                </div>

            </div>
        
        </header>
        

        <main>
            <section>

            </section>

            <section>

            </section>

            <section>

            </section>
        </main>

        <footer>

        </footer>


     </div>

  
   
    

    );

} 
export default Home;