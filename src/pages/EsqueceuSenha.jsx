import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./EsqueceuSenha.module.css";


function EsqueceuSenha() {
    return (

        <div>
            <form>
                <div class="form-group">
                    <label for="formGroupExampleInput">Digite seu E-mail</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Input exemplo" />
                </div>
                <div class="form-group">
                    <label for="formGroupExampleInput2">Nova Senha</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Outro input" />
                </div>
                
              
            </form>

        </div>


    )
}
export default EsqueceuSenha;