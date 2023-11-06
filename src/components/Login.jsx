import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ClassNames } from '@emotion/react';


function Login() {
    
    return (
      
        <div className="container mt-10">
            <img src="onda5.png" class="w-15"></img>
        <div className="row justify-content-left">
            <div className="col-md-10 mx-auto col-lg-5">
                <h1 className="text align:center mb-5 justify-content-left"></h1>
                <h1 style={{color:'#a8f2fe'}}> Bem-Vindo(a). Acesse  sua conta! </h1>
                <form className="p-4 p-md-5  rounded-4 bg-#538AAD">

                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="inputEmail" placeholder="E-mail"/>
                        <label for="inputEmail">E-mail</label>
                    </div>
                    <div className="form-floating mb-4">
                        <input type="password" className="form-control" id="inputPassword" placeholder="Senha"/>
                        <label for="inputPassword">Senha</label>
                    </div>
                    <div className="checkbox mb-4">
                        <input class="form-check-input" type="checkbox" value="Lembrar-me" id="rememberMe"/>
                        <label class="form-check-label" for="rememberMe">Lembrar-me</label>
                    </div>
                    <button type="Submit" className="w-100 btn btn-lg btn-info">Entrar</button>
                    <p style={{color:'#a8f2fe'}}>Ainda não tem uma conta? Inscreva-se</p>
                </form>
            </div>
        </div>
    </div>

 )} 
 export default Login