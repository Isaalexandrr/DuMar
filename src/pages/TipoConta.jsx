import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import styles from "./TipoConta.module.css";
import { GiLuckyFisherman } from "react-icons/gi";
import { MdFoodBank } from "react-icons/md";

function TipoConta() {
  return (
    <div className="container-fluid">
      <div className="row h-100">
        <div className="col-3"></div>
        <div className="col-6">
          <div className="row">
            <div className="col-12 text-center mt-5">
              <h1 className="text-white">Qual seu objetivo?</h1>
            </div>
            <div className="col-6 text-center mt-5">
              <Link to='/CadastroCliente'>
                <button className={styles["Button"]}>
                    <MdFoodBank className={styles["icon"]} />
                    <h3 className="text-white">Comprar</h3>
                </button>
              </Link>
            </div>
            <div className="col-6 text-center mt-5">
            <Link to='/CadastroVendedor'>
                <button className={styles["Button"]}>
                    <GiLuckyFisherman className={styles["icon"]} />
                    <h3 className="text-white">Vender</h3>
                </button>
              </Link>
            </div>
            <div className="col-12 text-center mt-5">
                <Link to='/Login'>
                    <button className={styles['voltar']}>
                        <h3>Voltar</h3>
                    </button>
                </Link>
            </div>
          </div>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
}

export default TipoConta;
