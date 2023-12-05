import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Cadastro.module.css";
import ondaalga from "../imagens/onda-alga-1.png";
import ondaestrela from "../imagens/onda-estrela-3.png";
import { Link } from "react-router-dom";
import axios from "axios";

function CadastroVendedor() {
  const [tipoUsuario, setTipoUsuario] = useState("fisico");

  const handleChangeTipoUsario = (event) => {
    setTipoUsuario(event.target.value);
  };

  const [dados, setDados] = useState([])
  const [VEN_NOME, setVEN_NOME] = useState('')
  const [VEN_EMAIL, setVEN_EMAIL] = useState('')
  const [VEN_TELEFONE, setVEN_TELEFONE] = useState('')
  const [VEN_ENDERECO, setVEN_ENDERECO] = useState('')
  const [VEN_SENHA, setVEN_SENHA] = useState('')
  const [VEN_DATA, setVEN_DATA] = useState('')
  const [VEN_DOCUMENTO, setVEN_DOCUMENTO] = useState('')
  const [VEN_SEXO, setVEN_SEXO] = useState('')
  const [VEN_WHATSAPP, setVEN_WHATSAPP] = useState('')

  useEffect(() => {
    axios
      .get("http://localhost:3003/Vendedor")
      .then((response) => {
        setDados(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar os dados", error);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3003/inserirVendedor", {
        VEN_NOME,
        VEN_EMAIL,
        VEN_DATA,
        VEN_SEXO,
        VEN_DOCUMENTO,
        VEN_ENDERECO,
        VEN_TELEFONE,
        VEN_WHATSAPP,
        VEN_SENHA,
      });

      console.log(VEN_NOME)

      const response = await axios.get("http://localhost:3003/Vendedor");
      setDados(response.data);
      setVEN_NOME("");
      setVEN_EMAIL("");
      setVEN_DATA("");
      setVEN_SEXO("");
      setVEN_DOCUMENTO("");
      setVEN_ENDERECO("");
      setVEN_TELEFONE("");
      setVEN_WHATSAPP("");
      setVEN_SENHA("");
    } catch (error) {
      console.log("error");
    }
  };

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
          <form className="text-start mt-4" onSubmit={handleSubmit}>
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
                value={VEN_EMAIL}
                className="form-control rounded-pill"
                placeholder="digite seu email"
                onChange={(e) => setVEN_EMAIL(e.target.value)}
              />
            </div>

            <div className="text-start mt-4">
              <label className="fw-bold ms-2" htmlFor="nomeFisico">
                {tipoUsuario === "fisico" ? "Nome Completo:" : "Nome da Empresa:"}
              </label>
              <input
                type="text"
                value={VEN_NOME}
                className="form-control rounded-pill"
                id="nomeCompleto"
                placeholder={
                  tipoUsuario === "fisico"
                    ? "Digite seu nome"
                    : "Digite o nome da empresa"
                }
                onChange={(e) => setVEN_NOME(e.target.value)}
              />
            </div>
            <div className="text-start mt-4">
              <label className="fw-bold ms-2" htmlFor="senhaFisico">
                Senha:
              </label>
              <input
                type="password"
                className="form-control rounded-pill"
                id="senhaFisico"
                value={VEN_SENHA}
                placeholder="Digite sua senha"
                onChange={(e) => setVEN_SENHA(e.target.value)}
              />
            </div>
            <div className="text-start d-flex mt-4">
              {tipoUsuario === "fisico" && (
                <div className="d-block w-25">
                  <label className="fw-bold ms-2" htmlFor="sexo">
                    Sexo:
                  </label>
                  <select className="form-select rounded-pill" id="sexo" value={VEN_SEXO} onChange={(e) => setVEN_SEXO(e.target.value)}>
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
                  value={VEN_DATA}
                  className="form-control rounded-pill"
                  id="dataNasc"
                  onChange={(e) => setVEN_DATA(e.target.value)}
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
                value={VEN_DOCUMENTO}
                onChange={(e) => setVEN_DOCUMENTO(e.target.value)}
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
                  value={VEN_TELEFONE}
                  onChange={(e) => setVEN_TELEFONE(e.target.value)}
                />
              </div>
              <div className="text-start w-50 ms-2 d-block">
                <label className="fw-bold ms-2" htmlFor="zapFisico">
                  Este número é Whatsapp?
                </label>
                <select
                  className="form-select rounded-pill w-50"
                  id="zapFisico"
                  value={VEN_WHATSAPP}
                  onChange={(e) => setVEN_WHATSAPP(e.target.value)}
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
                value={VEN_ENDERECO}
                onChange={(e) => setVEN_ENDERECO(e.target.value)}
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
