import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

import styles from './home.module.css';

import ondacoral from '../imagens/onda-estrela.png';
import camarao from '../imagens/camarao.jpg';
import carrosel1 from '../imagens/carrosel1.svg';
import carrosel2 from '../imagens/carrosel2.svg';


<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet"/>

function Home() {
  
  
    return (
        
     <div className='container-fluid p-0' >
    <header>
    <main>
        <div id="carouselExampleCaptions" class="carousel slide mt-0" data-bs-ride="carousel">
        <div class="carousel-indicators mt-0">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
    </div>
    <div class="carousel-inner">
    <div class="carousel-item active">
    <img src={carrosel1} class="d-block w-100" alt="foto" />
      <div class="carousel-caption d-none d-md-block">
        
      </div>
    </div>
    <div class="carousel-item">
    <img src={carrosel2} class="d-block w-100" alt="foto" />
      <div class="carousel-caption d-none d-md-block">
       
      </div>
    </div>
    <div class="carousel-item">
    <img src={carrosel1} class="d-block w-100" alt="foto" />
      <div class="carousel-caption d-none d-md-block">
        
      </div>
    </div>

    <div class="carousel-item active">
    <img src={carrosel2} class="d-block w-100" alt="foto" />
      <div class="carousel-caption d-none d-md-block">
        
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</main>
            
        <div className='row m-0 p-0'>
                <div className="col w-xs-100 w-sm-100 m-0 p-0">
                    <img src={ondacoral} className={styles['onda-estrela']} width="150" height="200" alt="Onda.estrela" />   
                </div>
            </div>
        </header>
        

        <main>
            

        <section>

             <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner justify-content-center">
              <div class="carousel-item active" >
             <div className={styles['box']}>
                

                <div className={styles['grid-caixa']}>
                    <img src={camarao} alt="Salmão" />
                    <h3>Salmão</h3>
                    <p>R$ 40,00</p>
                    <input type="button" name="" id="" value="Comprar"/>
                </div>

                <div className={styles['grid-caixa']}>
                    <img src={camarao} alt="Camarão" />
                    <h3>Camarão</h3>
                    <p>R$ 25,00</p>
                    <input type="button" name="" id="" value="Comprar"/>
                </div>

                <div className={styles['grid-caixa']}>
                    <img src={camarao} alt="Tilapia" />
                    <h3>Tilapia</h3>
                    <p>R$ 45,00</p>
                    <input type="button" name="" id="" value="Comprar"/>
                </div>

                <div className={styles['grid-caixa']}>
                    <img src={camarao} alt="Lagosta" />
                    <h3>Lagosta</h3>
                    <p>R$ 70,00</p>
                    <input type="button" name="" id="" value="Comprar"/>
                </div>

                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
               <span class="carousel-control-prev-icon me-4" aria-hidden="true"></span>
               <span class="visually-hidden">Previous</span>
               </button>
               <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
              <span class="carousel-control-next-icon me-2" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
              </button>

              </div>
              </div>
              </div>
            </div>




          </section>

          
          <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
           <div class="carousel-inner justify-content-center">
           <div class="carousel-item active" >
            <div className={styles['box']}>
                <div className={styles['grid-caixa']}>
                    <img src={camarao} alt="Atum" />
                    <h3>Atum</h3>
                    <p>R$ 30,00</p>
                    <input type="button" name="" id="" value="Comprar"/>
                </div>

                <div className={styles['grid-caixa']}>
                    <img src={camarao} alt="Bacalhau" />
                    <h3>Bacalhau</h3>
                    <p>R$ 20,00</p>
                    <input type="button" name="" id="" value="Comprar"/>
                </div>

                <div className={styles['grid-caixa']}>
                    <img src={camarao} alt="Corvina" />
                    <h3>Corvina</h3>
                    <p>R$ 20,00</p>
                    <input type="button" name="" id="" value="Comprar"/>
                </div>

                <div className={styles['grid-caixa']}>
                    <img src= {camarao} alt="arenque" />
                    <h3>Arenque</h3>
                    <p>R$ 12,00</p>
                    <input type="button" name="" id="" value="Comprar"/>
                </div>

                
             </div>
             </div>
             </div>
             


            </div>

            <section>

            </section>

            <section>

            </section>
        </main>

    

        <footer>
        <h1>Contatos</h1>

      <div class="container text-center">
    <div class="row align-items-end">
    <div class="col">
    <img src="..." class="card-img-end" alt="..."/>
      <h2>Alanes</h2>
      <p>+55 81 9 8319-7918</p>
    </div>

    <div class="col">
    <img src="..." class="card-img-end" alt="..."/>
     <h2 > Andreza</h2>
     <p>+55 81 9517-1524</p>
    </div>

    <div class="col">
    <img src="..." class="card-img-end" alt="..."/>
      <h2>Gabriela </h2>
      <p>+55 81 8585-1699</p>
    </div>

    <div class="col">
    <img src="..." class="card-img-end" alt="..."/>
      <h2>Gerson </h2>
      <p>+55 81 8898-7159</p>
    </div>

    <div class="col">
    <img src="..." class="card-img-end" alt="..."/>
     <h2>Isabela</h2>
     <p>+55 81 9728-8086</p>
    </div>
  </div>
</div>
        </footer>


     </div>

  
    );

} 
export default Home;