import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Publicar.module.css";
import ondaalga from '../imagens/onda-alga-1.png';
import ondaestrela from '../imagens/onda-estrela-3.png'

function Publicar() {
    return(
        <div className="Container-fluid">
        <div className="row m-0 p-0">
          <div className="col-3 d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block align-self-end m-0 p-0">
            <img src={ondaalga} className={styles["ondaalga"]}/>
          </div>
          <div className="col-12 col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 text-center">
              <h1 id={styles["tittle"]} className="fs-3 fw-bold">DADOS DO PRODUTO</h1>
              <form className="text-start mt-4">
                <div className="text-start mt-4">
                    <label htmlFor="nome" className="fw-bold ms-2">Nome do Produto:</label>
                    <input type="text" id="nome" className="form-control rounded-pill" placeholder="Digite o nome do produto"/>
                </div>
                <div className="text-start mt-4 w-50">
                    <label className="fw-bold ms-2" htmlFor="tipoProduto">Tipo do produto</label>
                    <select className="form-select rounded-pill w-50" id="tipoProduto">
                        <option selected>Selecione...</option>
                        <option value="tipo1">Tipo 1</option>
                        <option value="tipo2">Tipo 2</option>
                        <option value="tipo3">Tipo 3</option>
                    </select>
                </div>
                <div className="text-start w-75 mt-4 d-flex">
                    <div className="d-block w-50">
                        <label className="fw-bold ms-2" htmlFor="quantidade">Quantidade:</label>
                        <input type="text" className="form-control rounded-pill" id="quantidade" placeholder="00.00" />
                    </div>
                    <div className="text-start w-50 ms-2 d-block">
                        <label className="fw-bold ms-2" htmlFor="Medida">Medida</label>
                        <select className="form-select rounded-pill w-50" id="medida">
                            <option value="sim">Kg</option>
                            <option value="nao">Un</option>
                        </select>
                    </div>
                </div>
                <div className="d-block w-25 w-xs-50 w-sm-50 w-md-25 w-lg-25 w-xl-25 w-xxl-25 mt-4">
                        <label className="fw-bold ms-2" htmlFor="dataPesc">Data de Pesca</label>
                        <input type="date" className="form-control rounded-pill" id="dataPesc" />
                    </div>
                    <div className="text-start w-50 mt-4">
                        <label htmlFor="valorDiv" className="fw-bold ms-2">Valor:</label>
                        <div id="valorDiv" className="input-group w-50">
                        <span class="input-group-text rounded-start-5">R$</span>
                        <input type="text" className="form-control rounded-end-5" placeholder="00.00"/>
                        </div>
                    </div>
                    <div className="text-start mt-4 w-50">
                        <label className="fw-bold ms-2" htmlFor="foto">Foto do Produto:</label>
                        <input type="file" className="form-control rounded-pill" id="foto" />
                    </div>
                    <div className="w-50 mx-auto mt-4 mb-4">
                        <input id={styles["button-submit"]} className="form-control rounded-pill fw-bold" type="submit" value="Publicar"/>
                    </div>
              </form>
              
          </div>
          <div className="col-3 d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block text-end m-0 p-0">
              <img src={ondaestrela} className={styles["ondaestrela"]} />
          </div>
        </div>
      </div>
    )
}

export default Publicar;