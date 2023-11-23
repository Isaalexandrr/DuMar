import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Cadastro() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 align-self-end">oi</div>
        <div className="col-8 align-self-center">
          <form>
            <div class="mb-3">
              <div class="form-check form-check-inline">
                <input class="form-check-input"  name="tipoUsuario" id="consumidor" type="radio" value="consumidor"/>
                <label class="form-check-label" for="consumidor">Consumidor</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" name="tipoUsuario" id="vendedor" type="radio" value="vendedor"/>
                <label class="form-check-label" for="vendedor">Vendedor</label>
              </div>
            </div>

            <div class="mb-3">
              <div class="form-check form-check-inline">
                <input class="form-check-input" name="tipoPessoa" id="fisica" type="radio" value="pessoaFisica"/>
                <label class="form-check-label" for="pessoaFisica">Pessoa Física</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" name="tipoPessoa" id="juridica" type="radio" value="pessoaJuridica"/>
                <label class="form-check-label" for="pessoaJuridica">Pessoa Jurídica</label>
              </div>
            </div>
            <div id="pessoaFisicaFields">
      
      <div class="mb-3">
        <label for="emailPF" class="form-label">Email:</label>
        <input type="email" class="form-control" id="emailPF" name="emailPF" required/>
      </div>
      <div class="mb-3">
        <label for="senhaPF" class="form-label">Senha:</label>
        <input type="password" class="form-control" id="senhaPF" name="senhaPF" required/>
      </div>
      <div class="mb-3">
        <label for="nomeCompleto" class="form-label">Nome Completo:</label>
        <input type="text" class="form-control" id="nomeCompleto" name="nomeCompleto" required/>
      </div>
      <div class="mb-3">
        <label for="sexo" class="form-label">Sexo:</label>
        <select class="form-select" id="sexo" name="sexo" required>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
          <option value="outro">Outro</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="cpf" class="form-label">CPF:</label>
        <input type="text" class="form-control" id="cpf" name="cpf" required/>
      </div>
      <div class="mb-3">
        <label for="dataNascimento" class="form-label">Data de Nascimento:</label>
        <input type="date" class="form-control" id="dataNascimento" name="dataNascimento" required/>
      </div>
      <div class="mb-3">
        <label for="celular" class="form-label">Celular:</label>
        <input type="tel" class="form-control" id="celular" name="celular" required/>
      </div>
      <div class="mb-3">
        <label for="whatsapp" class="form-label">WhatsApp:</label>
        <input type="tel" class="form-control" id="whatsapp" name="whatsapp" required/>
      </div>
      <div class="mb-3">
        <label for="endereco" class="form-label">Endereço:</label>
        <input type="text" class="form-control" id="endereco" name="endereco" required/>
      </div>
    </div>

    <div id="pessoaJuridicaFields">
      <div class="mb-3">
        <label for="emailPJ" class="form-label">Email:</label>
        <input type="email" class="form-control" id="emailPJ" name="emailPJ" required/>
      </div>
    </div>

    <button type="submit" class="btn btn-primary">Enviar</button>
          </form>
        </div>
        <div className="col-2">oi</div>
      </div>
    </div>
  );
}

export default Cadastro;
