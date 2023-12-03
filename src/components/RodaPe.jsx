import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import banner from "../imagens/banner.jpg";
import { bottom } from "@popperjs/core";

const RodaPe = () => {
  return (
    <div className="Container-fluid">
      <div className="row m-0 p-0">
        <div className="col-3 d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block align-self-end m-0 p-0"></div>
        <div
          style={{
            position: "relative",
            margin: "100px 0 0 0",
          }}
          class="align-items-center mx-auto mt-5"
        >
          <img
            src={banner}
            alt="banner"
            style={{
              width: "80%",
              height: "auto",
              display: "block",
              margin: "auto",
            }}
          />
          <div className="col-12 col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 text-center">
            <button
              className="form-control mt-2"
              style={{
                position: "absolute",
                top: "60%",
                left: "34%",
                transform: "translate(-50%, -50%)",
                padding: "10px",
                backgroundColor: " #0a376e",
                color: "white",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
                width: "110px",
              }}
              onClick={() => {
                window.location.href = "/QuemSomos";
              }}
            >
              Saiba Mais
            </button>
          </div>
          <div className="direitos">
            <p
              style={{
                textAlign: "center",
                margin: "5% 0 0 0",
              }}
            >
              Copyright © 2023 Grupo Café Tech. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RodaPe;
