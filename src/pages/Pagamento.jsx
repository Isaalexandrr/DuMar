import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { alertClasses } from "@mui/material";
import { Link, Route } from "react-router-dom";

import styles from "./Pagamento.module.css";

import card from "../imagens/card_img.png";

function Pagamento() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [cep, setCep] = useState("");
  const [pix, setPix] = useState("");
  const [nomecartao, setNomeCartao] = useState("");
  const [numerocartao, setNumeroCartao] = useState("");
  const [mesexpiracao, setMesExpiracao] = useState("");
  const [anoexpiracao, setAnoExpiracao] = useState("");
  const [cvv, setCvv] = useState("");
  const [msg, setMsg] = useState("");

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <form action="">
          <div className={styles.row}>
            <div className={styles.col}>
              <h3 className={styles.title}>Endereço de Cobrança</h3>
              <div className={styles.inputBox}>
                <span>Nome Completo:</span>
                <input
                  type="text"
                  placeholder="Seu Nome Completo"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </div>
              <div className={styles.inputBox}>
                <span>Email:</span>
                <input
                  type="email"
                  placeholder="Example@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className={styles.inputBox}>
                <span>Endereço:</span>
                <input
                  type="text"
                  placeholder="Digite seu endereço completo"
                  value={endereco}
                  onChange={(e) => setEndereco(e.target.value)}
                />
              </div>
              <div className={styles.inputBox}>
                <span>Cidade:</span>
                <input
                  type="text"
                  placeholder="Recife"
                  value={cidade}
                  onChange={(e) => setCidade(e.target.value)}
                />
              </div>
              <div className={`${styles.flex} ${styles.addressFlex}`}>
                <div className={styles.inputBox}>
                  <span>Estado:</span>
                  <input
                    type="text"
                    placeholder="Pernambuco"
                    value={estado}
                    onChange={(e) => setEstado(e.target.value)}
                  />
                </div>
                <div className={styles.inputBox}>
                  <span>CEP:</span>
                  <input
                    type="text"
                    placeholder="123 456 123 -88"
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className={styles.col}>
              <h3 className={styles.title}>Pagamento</h3>
              <div className={styles.inputBox}>
                <img className={styles["img-card"]} src={card} alt="" />
                <span>Método de Pagamento:</span>
                <select id="metodoPagamento" name="metodoPagamento">
                  <optgroup label="Cartão de Crédito">
                    <option value="visa">Visa</option>
                    <option value="mastercard">MasterCard</option>
                    <option value="mastercard">PayPal</option>
                    <option value="mastercard">American Express</option>
                  </optgroup>
                  <optgroup label="PIX">
                    <option value="pix">PIX</option>
                  </optgroup>
                </select>
              </div>
              <div className={styles.inputBox}>
                <span>Chave PIX:</span>
                <input
                  type="text"
                  placeholder="Exemplo: seuemail@provedor.com.br"
                  value={pix}
                  onChange={(e) => setPix(e.target.value)}
                />
              </div>

              <div className={styles.inputBox}>
                <span>Nome do cartão:</span>
                <input
                  type="text"
                  placeholder="Nome impresso no cartão"
                  value={nomecartao}
                  onChange={(e) => setNomeCartao(e.target.value)}
                />
              </div>
              <div className={styles.inputBox}>
                <span>Número do cartão de crédito :</span>
                <input
                  type="number"
                  placeholder="1111-2222-3333-4444"
                  value={numerocartao}
                  onChange={(e) => setNumeroCartao(e.target.value)}
                />
              </div>
              <div className={styles.inputBox}>
                <span>Mês de expiração:</span>
                <input
                  type="text"
                  placeholder="Janeiro"
                  value={mesexpiracao}
                  onChange={(e) => setMesExpiracao(e.target.value)}
                />
              </div>
              <div className={`${styles.flex} ${styles.paymentFlex}`}>
                <div className={styles.inputBox}>
                  <span>Ano de expiração:</span>
                  <input
                    type="number"
                    placeholder={2022}
                    value={anoexpiracao}
                    onChange={(e) => setAnoExpiracao(e.target.value)}
                  />
                </div>
                <div className={styles.inputBox}>
                  <span>CVV :</span>
                  <input
                    type="text"
                    placeholder={1234}
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto w-50 mt-5">
            <input
              type="submit"
              className="form-control rounded-pill fw-bold"
              id={styles["Entrar"]}
              value="Confirmar"
              onClick={() => {
                if (nome == "") {
                  setMsg("Preencha seu Nome Completo");
                  return false;
                }

                if (email == "") {
                  setMsg("Preencha o email");
                  return false;
                }

                if (endereco == "") {
                  setMsg("Preencha o endereço");
                  return false;
                }

                if (cidade == "") {
                  setMsg("Preencha sua cidade");
                  return false;
                }

                if (estado == "") {
                  setMsg("Preencha seu estado");
                  return false;
                }

                if (cep == "") {
                  setMsg("Preencha o CEP ");
                  return false;
                }

                if (pix == "") {
                  setMsg("Preencha sua chave PIX");
                  return false;
                }

                if (nomecartao == "") {
                  setMsg("Preencha o nome do seu cartaõ");
                  return false;
                }

                if (numerocartao == "") {
                  setMsg("Preencha o número do seu cartão");
                  return false;
                }

                if (mesexpiracao == "") {
                  setMsg("Preencha o mês da expedição do seu cartão");
                  return false;
                }

                if (anoexpiracao == "") {
                  setMsg("Preencha o ano da expedição do seu cartão");
                  return false;
                }

                if (cvv == "") {
                  setMsg("Preencha o CVV do cartão");
                  return false;
                }

                setMsg("");
              }}
            />
            <Link className={styles["link"]} to="/">
              <button
                className="form-control rounded-pill bg-transparent  mt-2"
                id={styles["voltar"]}
              >
                Voltar
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Pagamento;
