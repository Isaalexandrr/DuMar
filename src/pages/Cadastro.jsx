import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Cadastro.module.css";
import ondaalga from '../imagens/onda-alga-1.png';
import ondaestrela from '../imagens/onda-estrela-3.png'

function Cadastro() {

    const [tipoConta, setTipoConta] = useState("fisico");

    const handleChangeTipoConta = (event) => {
    setTipoConta(event.target.value);
};

  return (
    <div className="Container-fluid">
      <div className="row m-0 p-0">
        <div className="col-3 d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block align-self-end m-0 p-0">
          <img src={ondaalga} className={styles["ondaalga"]}/>
        </div>
        <div className="col-12 col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 text-center">
            <h1 id={styles["tittle"]} className="fs-3 fw-bold">DADOS CADASTRAIS</h1>
            <form className="text-start mt-4" action="">
                <div class="form-check form-check-inline text-start ms-2">
                    <input class="form-check-input"  name="tipoConta" id="fisico" type="radio" value="fisico" checked={tipoConta === "fisico"} onChange={handleChangeTipoConta}/>
                    <label class="form-check-label fw-bold" for="fisico">Pessoa Fisíca</label>
                </div>
                <div class="form-check form-check-inline text-start ms-2">
                    <input class="form-check-input" name="tipoConta" id="juridico" type="radio" value="juridico" checked={tipoConta === "juridico"} onChange={handleChangeTipoConta}/>
                    <label class="form-check-label fw-bold" for="juridico">Pessoa Jurídica</label>
                </div>
                <div className="text-start mt-4">
                    <label className="fw-bold ms-2" htmlFor="emailFisico">E-mail:</label>
                    <input type="email" id="emailFisico" className="form-control rounded-pill" placeholder="digite seu email"/>
                </div>
                <div className="text-start mt-4">
                    <label className="fw-bold ms-2" htmlFor="nomeFisico">{tipoConta === "fisico" ? "Nome Completo:" : "Nome da Empresa:"}</label>
                    <input type="text" className="form-control rounded-pill" id="nomeCompleto" placeholder={tipoConta === "fisico" ? "Digite seu nome" : "Digite o nome da empresa"} />
                </div>
                <div className="text-start mt-4">
                    <label className="fw-bold ms-2" htmlFor="senhaFisico">Senha:</label>
                    <input type="passoword" className="form-control rounded-pill" id="senhaFisico" placeholder="Digite sua senha" />
                </div>
                <div className="text-start d-flex mt-4">
                {tipoConta === "fisico" && (
                    <div className="d-block w-25">
                    <label className="fw-bold ms-2" htmlFor="sexo">Sexo:</label>
                    <select className="form-select rounded-pill" id="sexo">
                        <option selected>Selecione...</option>
                        <option value="masculino">Masculino</option>
                        <option value="feminino">Feminino</option>
                        <option value="outro">Outro</option>
                    </select>
                    </div>
                )}
                    <div className="d-block w-xs-50 w-sm-50 w-md-25 w-lg-25 w-xl-25 w-xxl-25 ms-2">
                        <label className="fw-bold ms-2" htmlFor="dataNasc">{tipoConta === "fisico" ? "Data de Nascimento" : "Data de Abertura"}</label>
                        <input type="date" className="form-control rounded-pill" id="dataNasc" />
                    </div>
                </div>
                <div className="text-start mt-4">
                    <label className="fw-bold ms-2" htmlFor="cpfCnpj">{tipoConta === "fisico" ? "CPF:" : "CNPJ:"}</label>
                    <input type="text" className="form-control rounded-pill" name={tipoConta === "fisico" ? "cpf" : "cnpj"} id="cpfCnpj" pattern={tipoConta === "fisico" ? "\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}" : ""} placeholder={tipoConta === "fisico" ? "123.456.789-01" : "12.345.678/0001-90"} required />
                </div>
                <div className="text-start w-75 mt-4 d-flex">
                    <div className="d-block w-50">
                        <label className="fw-bold ms-2" htmlFor="numeroFisico">Celular:</label>
                        <input type="text" className="form-control rounded-pill" id="numeroFisico" placeholder="(81) 9 9999-9999" />
                    </div>
                    <div className="text-start w-50 ms-2 d-block">
                        <label className="fw-bold ms-2" htmlFor="zapFisico">Este número é Whatsapp?</label>
                        <select className="form-select rounded-pill w-50" id="zapFisico">
                            <option value="sim">Sim</option>
                            <option value="nao">Não</option>
                        </select>
                    </div>
                </div>
                <div className="text-start mt-4">
                    <label className="fw-bold ms-2" htmlFor="enderecoFisico">Endereço:</label>
                    <input type="text" className="form-control rounded-pill" id="enderecoFisico" placeholder="Rua, Número, bairro, cidade"/>
                </div>
                <div className="text-start w-50 mt-2">
                    <h4 className="text-start p-0 ms-2 mb-0 me-0 mt-4 fw-bold">Você é...</h4>
                <div class="form-check form-check-inline text-start mt-2 ms-2">
                    <input class="form-check-input"  name="tipoUsuario" id="consumidor" type="radio" value="consumidor"/>
                    <label class="form-check-label fw-bold" for="consumidor">Consumidor</label>
                </div>
                <div class="form-check form-check-inline text-start m-0 ms-2">
                    <input class="form-check-input" name="tipoUsuario" id="vendedor" type="radio" value="Vendedor"/>
                    <label class="form-check-label fw-bold" for="vendedor">Vendedor</label>
                </div>
                </div>
                <div className="w-50 mx-auto mt-4 mb-4">
                    <input id={styles["button-submit"]} className="form-control rounded-pill fw-bold" type="submit" value="Cadastrar"/>
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

export default Cadastro;
