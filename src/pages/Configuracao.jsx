import REACT from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Configuracao.module.css";
import TubarãoChorão from "../imagens/TubarãoChorão.svg";


function configuracao() {
    return (


        <div className="container">
            <div className="row ">
                <div className="col-12 d-flex align-items-center justify-content-center">
                    <img src={TubarãoChorão} className={styles["tubarao"]} alt="Tubarão Chorão"></img>
                </div>
            </div>
        </div>

    )
}
export default configuracao;