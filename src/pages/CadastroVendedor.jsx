import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Cadastro.module.css";
import ondaalga from "../imagens/onda-alga-1.png";
import ondaestrela from "../imagens/onda-estrela-3.png";
import { Link } from "react-router-dom";
import { json } from "react-router-dom";

function CadastroVendedor() {

  
 
  const [tipoUsuario, setTipoUsuario] = useState("fisico");

  const handleChangeTipoUsario = (event) => {
    setTipoUsuario(event.target.value);
  };

  const [nome, setNome] = useState()
  const [email, setEmail] = useState()
  const [celular, setCelular] = useState()
  const [endereco, setEndereco] = useState()
  const [senha, setSenha] = useState()
  const [data, setData] = useState()
  const [doc, setDoc] = useState()
  const [tipoConta, setTipoConta] = useState()
  const [sexo, setSexo] = useState()
  const [whatsapp, setWhatsapp] = useState()

  return (
    <div className="Container-fluid">
      <div className="row m-0 p-0">
        <div className="col-3 d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block align-self-end m-0 p-0">
          <img src={ondaalga} className={styles["ondaalga"]} />
        </div>
        <div className="col-12 col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 text-center">
          <h1 id={styles["tittle"]} className="fs-3 fw-bold">
            DADOS CADASTRAIS
          </h1>
          <form className="text-start mt-4" action="">
            <div class="form-check form-check-inline text-start ms-2">
              <input
                class="form-check-input"
                name="tipoUsuario"
                id="fisico"
                type="radio"
                value="fisico"
                checked={tipoUsuario === "fisico"}
                onChange={handleChangeTipoUsario}
              />
              <label class="form-check-label fw-bold" for="fisico">
                Pessoa Fisíca
              </label>
            </div>
            <div class="form-check form-check-inline text-start ms-2">
              <input
                class="form-check-input"
                name="tipoUsuario"
                id="juridico"
                type="radio"
                value="juridico"
                checked={tipoUsuario === "juridico"}
                onChange={handleChangeTipoUsario}
              />
              <label class="form-check-label fw-bold" for="juridico">
                Pessoa Jurídica
              </label>
            </div>

            <div className="text-start mt-4">
              <label className="fw-bold ms-2" htmlFor="emailFisico">
                E-mail:
              </label>
              <input
                type="email"
                id="emailFisico"
                className="form-control rounded-pill"
                placeholder="digite seu email"
                onChange={(evt) => setEmail(evt.target.value)}
              />
            </div>

            <div className="text-start mt-4">
              <label className="fw-bold ms-2" htmlFor="nomeFisico">
                {tipoUsuario === "fisico" ? "Nome Completo:" : "Nome da Empresa:"}
              </label>
              <input
                type="text"
                className="form-control rounded-pill"
                id="nomeCompleto"
                placeholder={
                  tipoUsuario === "fisico"
                    ? "Digite seu nome"
                    : "Digite o nome da empresa"
                }
                onChange={(evt) => setNome(evt.target.value)}
              />
            </div>
            <div className="text-start mt-4">
              <label className="fw-bold ms-2" htmlFor="senhaFisico">
                Senha:
              </label>
              <input
                type="passoword"
                className="form-control rounded-pill"
                id="senhaFisico"
                placeholder="Digite sua senha"
                onChange={(evt) => setSenha(evt.target.value)}
              />
            </div>
            <div className="text-start d-flex mt-4">
              {tipoUsuario === "fisico" && (
                <div className="d-block w-25">
                  <label className="fw-bold ms-2" htmlFor="sexo">
                    Sexo:
                  </label>
                  <select className="form-select rounded-pill" id="sexo" onChange={(evt) => setSexo(evt.target.value)}>
                    <option selected>Selecione...</option>
                    <option value="masculino">Masculino</option>
                    <option value="feminino">Feminino</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
              )}
              <div className="d-block w-xs-50 w-sm-50 w-md-25 w-lg-25 w-xl-25 w-xxl-25 ms-2">
                <label className="fw-bold ms-2" htmlFor="dataNasc">
                  {tipoUsuario === "fisico"
                    ? "Data de Nascimento"
                    : "Data de Abertura"}
                </label>
                <input
                  type="date"
                  className="form-control rounded-pill"
                  id="dataNasc"
                  onChange={(evt) => setData(evt.target.value)}
                />
              </div>
            </div>
            <div className="text-start mt-4">
              <label className="fw-bold ms-2" htmlFor="cpfCnpj">
                {tipoUsuario === "fisico" ? "CPF:" : "CNPJ:"}
              </label>
              <input
                type="text"
                className="form-control rounded-pill"
                name={tipoUsuario === "fisico" ? "cpf" : "cnpj"}
                id="cpfCnpj"
                pattern={
                  tipoUsuario === "fisico"
                    ? "\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}"
                    : ""
                }
                placeholder={
                  tipoUsuario === "fisico"
                    ? "123.456.789-01"
                    : "12.345.678/0001-90"
                }
                onChange={(evt) => setDoc(evt.target.value)}
                required
              />
            </div>
            <div className="text-start w-75 mt-4 d-flex">
              <div className="d-block w-50">
                <label className="fw-bold ms-2" htmlFor="numeroFisico">
                  Celular:
                </label>
                <input
                  type="text"
                  className="form-control rounded-pill"
                  id="numeroFisico"
                  placeholder="(81) 9 9999-9999"
                  onChange={(evt) => setCelular(evt.target.value)}
                />
              </div>
              <div className="text-start w-50 ms-2 d-block">
                <label className="fw-bold ms-2" htmlFor="zapFisico">
                  Este número é Whatsapp?
                </label>
                <select
                  className="form-select rounded-pill w-50"
                  id="zapFisico"
                  onChange={(evt) => setWhatsapp(evt.target.value)}
                >
                  <option value="sim">Sim</option>
                  <option value="nao">Não</option>
                </select>
              </div>
            </div>
            <div className="text-start mt-4">
              <label className="fw-bold ms-2" htmlFor="enderecoFisico">
                Endereço:
              </label>
              <input
                type="text"
                className="form-control rounded-pill"
                id="enderecoFisico"
                placeholder="Rua, Número, bairro, cidade"
                onChange={(evt) => setEndereco(evt.target.value)}
              />
            </div>
            <div className="w-50 mx-auto mt-4 mb-4">
              <input
                type="submit"
                id={styles["button-submit"]}
                className="form-control rounded-pill fw-bold"
                value="Cadastrar"
              />
            </div>
            <div className="w-50 mx-auto mt-4 mb-4">
            <Link className="text-decoration-none" to='/TipoConta'>
                <button className="form-control rounded-pill bg-Secondary  mt-2">
                  Cancelar
                </button>
              </Link>
            </div>
          </form>
        </div>
        <div className="col-3 d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block text-end m-0 p-0">
          <img src={ondaestrela} className={styles["ondaestrela"]} />
        </div>
      </div>
    </div>
  );
}

export default CadastroVendedor;