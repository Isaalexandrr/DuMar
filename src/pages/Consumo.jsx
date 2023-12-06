import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

import styles from "./Consumo.module.css";

import icon from "../imagens/icons8-ajuda-50.png";
import foca from "../imagens/Foca.jpeg";
import tartaruga from "../imagens/Tartaruga.jpeg";
import peixes from "../imagens/peixes.png";
import lixo from "../imagens/lixo.png";
import jogandolixo from "../imagens/jogandolixo.png";
import limpandolixo from "../imagens/limpandolixo.png";
import reciclavel from "../imagens/reciclavel.png";
import proibidonadar from "../imagens/proibidonadar.png";

const Consumo = () => {
  useEffect(() => {
    document.body.classList.add(styles.consumoBody);
    return () => {
      document.body.classList.remove(styles.consumoBody);
    };
  }, []);

  return (
    <div>
      <section
        style={{ color: "white" }}
        className={`mx-5 ${styles["background-section"]}`}
      >
        <div className="container-fluid p-0 m-0">
          <div className={styles["nav-bar"]}></div>
        </div>

        <section className="container mt-5">
          <div className="row">
            <div className="col-12">
              <h1 className={styles["consumo-c"]}>CONSUMO CONSCIENTE!</h1>
            </div>
            <div className="col-sm-12 col-md-4 mb-4">
              <div
                className={` ${styles["caixa-sobre"]} ${styles["consumo-box"]}`}
              >
                <img className={styles["img-inter"]} src={icon} alt="" />
                <div className={styles["texto-sobre"]}>O que?</div>
                <p className={styles["consumo"]}>
                  Consumo consciente é fazer escolhas de compra considerando o
                  impacto ambiental e social dos produtos. Envolve preferir
                  opções sustentáveis e éticas para promover um estilo de vida
                  mais responsável.
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 mb-4">
              <div
                className={` ${styles["caixa-sobre"]} ${styles["consumo-box"]} `}
              >
                <img className={styles["img-inter"]} src={icon} alt="" />
                <div className={styles["texto-sobre"]}>Como?</div>
                <p className={styles["consumo"]}>
                  Pratique o consumo consciente ao optar por produtos duráveis e
                  sustentáveis. Reduza o desperdício ao reciclar e reutilizar
                  sempre que possível.
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 mb-4">
              <div
                className={` ${styles["caixa-sobre"]} ${styles["consumo-box"]}`}
              >
                <img className={styles["img-inter"]} src={icon} alt="" />
                <div className={styles["texto-sobre"]}>Porque?</div>
                <p className={styles["consumo"]}>
                  Adotar o consumo consciente preserva recursos naturais e
                  contribui para um meio ambiente mais saudável. Além disso,
                  promove uma sociedade mais equitativa, apoiando práticas
                  comerciais éticas e sustentáveis.
                </p>
              </div>
            </div>
          </div>

          <div className="container-poluição mt-5">
            <h1 className={styles["poluicao"]}>POLUIÇÃO!</h1>
            <p className={styles["poluicao-texto"]}>
              Nos mares do nosso planeta, um drama silencioso se desenrola
              diariamente. <br />
              Milhões de toneladas de plástico invadem nossos oceanos,
              transformando a <br />
              majestosa vastidão azul em um trágico cenário de poluição. A vida
              marinha,
              <br /> antes vibrante, agora luta pela sobrevivência em um mar de
              detritos
              <br /> plásticos. É hora de mudar esse enredo. Juntos, podemos
              recusar o uso de <br />
              plástico descartável, abraçar alternativas sustentáveis e
              restaurar a beleza <br />
              dos oceanos que são a essência da vida na Terra. O futuro do mar
              está em
              <br /> nossas mãos. #PareComOPlástico, #SalveOsOceanos.
            </p>
          </div>

          <div className="row mt-5">
            <div className="col-sm-12 col-md-6 col-lg-4 mb-4 offset-md-1">
              <img
                className={`${styles["img-tartaruga"]} img-fluid`}
                src={tartaruga}
                alt=""
                style={{
                  width: "92%",
                  height: "auto",
                  borderRadius: "15px",
                  marginLeft: 130,
                }}
              />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
              <img
                className={`${styles["img-foca"]} img-fluid`}
                src={foca}
                alt=""
                style={{
                  width: "89%",
                  height: "auto",
                  borderRadius: "15px",
                  marginLeft: 150,
                }}
              />
            </div>
          </div>
        </section>
      </section>

      <section class="container-pesca mt-5">
        <div class="container">
          <div class="row">
          <h1 className='fs-5'>PESCA PROIBIDA!</h1>
            <div class="col-6">

              <p className={styles["pesca-textodois"]}>
                Nos oceanos globais, várias espécies de peixes enfrentam <br />
                extinção devido à pesca insustentável e degradação marinha.{" "}
                <br /> Algumas são proibidas devido à necessidade de
                preservação. <br />
                Apesar de medidas rigorosas, fiscalização inadequada e demanda{" "}
                <br /> persistente levam à pesca ilegal. <br /> O consumo
                excessivo ameaça não apenas essas espécies, mas também a
                biodiversidade, <br /> desequilibrando ecossistemas marinhos.
              </p>
            </div>
            <div className="col-6">
              <div
                className="card"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.363)",
                  borderRadius: "15px",
                  flexDirection: "column",
                  alignItems: "center",
                  width: 370,
                  height: 400,
                }}
              >
                <div className="card-body d-flex flex-column align-items-start pb-0">
                  <h1
                    className="card-title font-weight-bold text-dark custom-text-size text-center "
                    style={{
                      textAlign: "center",
                      margin: "0 auto",
                    }}
                  >
                    <div className={styles["texto-especie"]}>
                      ESPÉCIES SERIAMENTES AMEAÇADAS DE EXTINÇÃO{" "}
                    </div>
                    <strong>
                      <span
                        className="text-danger"
                        style={{ fontSize: "18px" }}
                      >
                        !!PESCA PROIBIDA!!
                      </span>
                    </strong>
                  </h1>
                </div>
                <img className={styles["img-peixes"]} src={peixes} alt=""></img>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-100">
        <div className="row w-100 gap-1 ms-5 mt-5">
          <h1 className="fs-5 mt-5">
            DICAS DE PRESERVAÇÃO!
          </h1>
          <div className="col-2 d-block text-center">
            <img className={styles["img-lixo"]} src={lixo} alt=""></img>

            <p>
              1- troque <br /> objetos <br /> descartáveis de <br />
              plástico por <br /> objetos de <br />
              papeis
            </p>
          </div>
          <div className="col-2 d-block text-center">
            <p>
              2 - Recolha <br /> todo seu lixo, não <br /> deixe na praia
            </p>
            <img
              className={styles["img-jogandolixo"]}
              src={jogandolixo}
              alt=""
            ></img>
          </div>

          <div className="col-2 d-block text-center">
            <img
              className={styles["img-limpandolixo"]}
              src={limpandolixo}
              alt=""
            ></img>
            <p>
              3 - Participe de <br />
              movimentos de <br /> limpezas <br /> costeiras{" "}
            </p>
          </div>

          <div className="col-2 d-block text-center">
            <p>
              4 - Recicle seu lixo, <br />
              separe seu lixo por <br />
              categoria, isso facilita <br /> na hora da reciclagem
            </p>
            <img
              className={styles["img-reciclavel"]}
              src={reciclavel}
              alt=""
            ></img>
          </div>

          <div className="col-2 d-block text-center">
            <img
              className={styles["img-proibidonadar"]}
              src={proibidonadar}
              alt=""
            ></img>
            <p>
              5 - Respeite as <br />
              sinalizações de <br />
              praia, preserve sua <br /> vida e a vida dos <br /> oceanos,{" "}
              <br /> respeitando as <br /> instruções
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
export { Consumo };
