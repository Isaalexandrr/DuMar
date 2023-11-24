import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from './login.module.css';
import ondaestrela3 from "../imagens/onda-estrela-3.png";
import ondacoral from "../imagens/onda-coral.png";
import {IoPersonCircle } from "react-icons/io5";
import { IoLockClosed, IoEye, IoEyeOff  } from "react-icons/io5";


function Login() {
    return (

        <div className={styles.container} class= "container mt-4">
        <div class="row justify-content-center">
        <div class="col-md-10 mx-auto col-lg-5">
          <div class="text-center mb-4">
                    
                    <h1 className={styles.welcome}>
                                  Bem-Vindo (a).
                         <br />
                                Acesse sua conta!
                        </h1>

                        <form class="p-4 p-md-5">
                    <div class="form-floating mb-3">
                        <input className={styles.email} type="email"  placeholder="E-mail"/>

                        {/* <div className={styles["icone"]} /> */}
                        {/* <IoPersonCircle /> */}
                    </div>

                    <div class= "form-floating mb-4 justify-content-center" >
                        <input className={styles.senha} type="password" name="" id="" placeholder="Senha"/>
                        {/* <div className={styles["icones"]} /> */}
                        {/* <IoLockClosed /> */}

                        {/* <button className="eyes">
                        <IoEyeOff />
                        <IoEye />
                        </button> */}
                        <div className={styles.esqueceuSenha} type="text-end-right">
                            <small>
                                <a href="">Esqueceu sua senha?</a>
                            </small>
                        </div>
                    </div>
                    <input className={styles.entrar} type="button" value="Entrar"/>
                        <br />
                        <div className={styles.conta} type="fs-4">
                            <small>
                                Ainda não tem uma conta?
                                <br />
                            </small>
                            </div>
                            <div className="form">
                           
                            <input className={styles.inscreva} type="button" value="Inscreva-se!"/>
                            
                            </div>
                              
                            </form>
                            </div>
                            <div class="col-2 d-none d-lg-block d-xl-block d-xxl-block m-0 p-0">
                        <img
                            src={ondacoral}
                            className={styles.ondacoral}
                            style= {{ width: "100%", height: "auto" }}
                            alt="ondacoral" >
                              </img>
                              </div>
                            </div>
                            
                        </div>
                    </div>
                    
            
             
                 
            
  );
}
export default Login;