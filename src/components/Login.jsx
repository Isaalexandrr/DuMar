import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
    return (
        <div className="container mt-4">
            <div className="row justify-content-left">
                <div className="col-md-10 mx-auto col-lg-5">
                    <h1 className="text-center mb-4">Bem-Vindo(a). Acesse sua conta!</h1>
                    <form className="p-4 p-md-5 border rounded-4 bg-#538AAD">
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="inputEmail" placeholder="E-mail" />
                            <label htmlFor="inputEmail">E-mail</label>
                        </div>
                        <div className="form-floating mb-4">
                            <input type="password" className="form-control" id="inputPassword" placeholder="Senha" />
                            <label htmlFor="inputPassword">Senha</label>
                        </div>
                        <div className="checkbox mb-4">
                            <input className="form-check-input" type="checkbox" value="Lembrar-me" id="rememberMe" />
                            <label className="form-check-label" htmlFor="rememberMe">Lembrar-me</label>
                        </div>
                        <button className="w-100 btn btn-lg btn-success" type="submit">Entrar</button>
                        <p style={{ color: 'blue' }}>Ainda não tem uma conta? Inscreva-se</p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;