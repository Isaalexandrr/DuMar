import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import styles from './home.module.css';
import logo1 from './imagens/logo1.png';
import logo2 from './imagens/logo2.png';
import pessoa from './imagens/person-fill.svg';
import carrinho from './imagens/cart2.svg';
import lupa from './imagens/search.svg';


<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet"/>

function Home() {
  
  
    return (
     <div className='container-fluid'>
        
       
       
     <nav class="navbar navbar-light bg-light"> 
        
        <a class="navbar-brand" href="#">
          <div className='logos'>
                  <img src={logo1} className={styles['img-logo1']} alt="DUMAR" />
                  <img src={logo2} className={styles['img-logo2']} alt="DUMAR" />
         </div>
        </a>

        <form class="form-inline">
            <input class="form-control mr-sm-2" type="search" placeholder="Pesquisar" aria-label="Pesquisar"/>
            <button class="btn btn-secondary btn-sm" type="submit">
             <img src={lupa} className={styles['icone-lupa']} alt="" />
            </button>
        </form>

        <div className='botao'> 

        <button type="button" class="btn btn-secondary btn-sm"> 
        <img src={pessoa} className={styles['icone-pessoa']} alt="" />
          Entrar
        </button>

        <button type="button" class="btn btn-secondary btn-sm">
        <img src={carrinho} className={styles['icone-carrinho']} alt="" />
        </button>
        </div>
        
     </nav>


    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Alterna navegação">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNavDropdown">
         <ul class="navbar-nav">
            <li class="nav-item active">
                <a class="nav-link" href="#">Quem somos <span class="sr-only"></span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Contato</a>
            </li>

            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Categorias</a>

        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Peixes</a>
          <a class="dropdown-item" href="#">Moluscos</a>
          <a class="dropdown-item" href="#">Crustáceos</a>
        </div>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="#">Consumo consciente</a>
            </li>
        </ul>
      </div>
    </nav>







        <header>

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