import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
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
import { useEffect } from "react";

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

        <section>
          <div
            className="row px-2 gap-4"
            style={{
              position: "absolute",
              top: "160%",
              transform: "translateY(-50%)",
              width: "95%",
              right: 10,
            }}
          >
            <div
              className="container-consumo"
              style={{ display: "flex", alignItems: "flex-start" }}
            >
              <h1 className={styles["consumo-c"]}>CONSUMO CONSCIENTE!</h1>
            </div>
            <div
              className="col-md-3 col-sm-12 "
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.363)",
                borderRadius: "15px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img className={styles["img-inter"]} src={icon} alt="" />
              <div className={styles["texto-sobre"]}>O que?</div>
              <p className={styles["consumo"]}>
                Consumo consciente é fazer escolhas de compra considerando o
                impacto ambiental e social dos produtos. Envolve preferir opções
                sustentáveis e éticas para promover um estilo de vida mais
                responsável.
              </p>
            </div>

            <div
              className="col-md-3 col-sm-12 "
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.363)",
                borderRadius: "15px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img className={styles["img-inter"]} src={icon} alt="" />
              <div className={styles["texto-sobre"]}>Como?</div>
              <p className={styles["consumo"]}>
                Pratique o consumo consciente ao optar por produtos duráveis e
                sustentáveis. Reduza o desperdício ao reciclar e reutilizar
                sempre que possível.
              </p>
            </div>

            <div
              className="col-md-3 col-sm-12"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.363)",
                borderRadius: "15px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
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

            <section>
              <div
                className="container-poluição"
                style={{ display: "flex", alignItems: "flex-start" }}
              >
                <h1 className={styles["poluicao"]}>POLUIÇÃO!</h1>
                <p className={styles["poluicao-texto"]}>
                  Nos mares do nosso planeta, um drama silencioso se desenrola
                  diariamente. <br />
                  Milhões de toneladas de plástico invadem nossos oceanos,
                  transformando a <br />
                  majestosa vastidão azul em um trágico cenário de poluição. A
                  vida marinha,
                  <br /> antes vibrante, agora luta pela sobrevivência em um mar
                  de detritos
                  <br /> plásticos. É hora de mudar esse enredo. Juntos, podemos
                  recusar o uso de <br />
                  plástico descartável, abraçar alternativas sustentáveis e
                  restaurar a beleza <br />
                  dos oceanos que são a essência da vida na Terra. O futuro do
                  mar está em
                  <br /> nossas mãos. #PareComOPlástico, #SalveOsOceanos.
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <img
                      className={`${styles["img-tartaruga"]} img-fluid`}
                      src={tartaruga}
                      alt=""
                      style={{ width: "280px", height: "150px" }}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <img
                      className={`${styles["img-foca"]} img-fluid`}
                      src={foca}
                      alt=""
                      style={{ width: "280px", height: "150px" }}
                    />
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div
                className="container-pesca"
                style={{ display: "flex", alignItems: "flex-start" }}
              >
                <h1
                  className={styles["pesca-texto"]}
                  style={{ whiteSpace: "nowrap" }}
                >
                  PESCA PROIBIDA!
                </h1>

                <p className={styles["pesca-textodois"]}>
                  Nos oceanos globais, várias espécies de peixes enfrentam
                  extinção devido à pesca insustentável e degradação marinha.
                  Algumas são proibidas devido à necessidade de preservação.
                  Apesar de medidas rigorosas, fiscalização inadequada e demanda
                  persistente levam à pesca ilegal. O consumo excessivo ameaça
                  não apenas essas espécies, mas também a biodiversidade,
                  desequilibrando ecossistemas marinhos.
                </p>

                <div className="container mt-4">
                  <div className="row">
                    <div className="col-md-4 col-sm-12 ">
                      <div
                        className="card"
                        style={{
                          backgroundColor: "rgba(255, 255, 255, 0.363)",
                          borderRadius: "15px",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          right: 170,
                          top: "20%",
                          width: 370,
                          height: 400,
                        }}
                      >
                        <div className="card-body d-flex flex-column align-items-start">
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
                                style={{ fontSize: "16px" }}
                              >
                                !!PESCA PROIBIDA!!
                              </span>
                            </strong>
                          </h1>
                        </div>
                        <img
                          className={styles["img-peixes"]}
                          src={peixes}
                          alt=""
                        ></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div>
                <div
                  className="container-pesca"
                  style={{ display: "flex", alignItems: "flex-start" }}
                >
                  <h1
                    className={styles["preserv-texto"]}
                    style={{ whiteSpace: "nowrap" }}
                  >
                    DICAS DE PRESERVAÇÃO!
                  </h1>
                  <div className="lixo">
                    <img className={styles["img-lixo"]} src={lixo} alt=""></img>

                    <h1
                      className={styles["lixo-texto"]}
                      style={{ whiteSpace: "nowrap" }}
                    >
                      {" "}
                      1- troque <br /> objetos <br /> descartáveis de <br />
                      plástico por <br /> objetos de <br />
                      papeis
                    </h1>
                  </div>
                  <div className="jogandolixo">
                    <img
                      className={styles["img-jogandolixo"]}
                      src={jogandolixo}
                      alt=""
                    ></img>
                    <h1
                      className={styles["jogandolixo-texto"]}
                      style={{ whiteSpace: "nowrap" }}
                    >
                      {" "}
                      2 - Recolha <br /> todo seu lixo, não <br /> deixe na
                      praia
                    </h1>
                  </div>

                  <div className="limpandolixo">
                    <img
                      className={styles["img-limpandolixo"]}
                      src={limpandolixo}
                      alt=""
                    ></img>
                    <h1
                      className={styles["limpandolixo-texto"]}
                      style={{ whiteSpace: "nowrap" }}
                    >
                      {" "}
                      3 - Participe de <br />
                      movimentos de <br /> limpezas <br /> costeiras{" "}
                    </h1>
                  </div>

                  <div className="reciclavel">
                    <img
                      className={styles["img-reciclavel"]}
                      src={reciclavel}
                      alt=""
                    ></img>
                    <h1
                      className={styles["reciclavel-texto"]}
                      style={{ whiteSpace: "nowrap" }}
                    >
                      4 - Recicle seu lixo, <br />
                      separe seu lixo por <br />
                      categoria, isso facilita <br /> na hora da reciclagem
                    </h1>
                  </div>

                  <div className="proibidonadar">
                    <img
                      className={styles["img-proibidonadar"]}
                      src={proibidonadar}
                      alt=""
                    ></img>
                    <h1
                      className={styles["proibidonadar-texto"]}
                      style={{ whiteSpace: "nowrap" }}
                    >
                      5 - Respeite as <br />
                      sinalizações de <br />
                      praia, preserve sua <br /> vida e a vida dos <br />{" "}
                      oceanos, <br /> respeitando as <br /> instruções
                    </h1>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </section>
    </div>
  );
};
export { Consumo };
