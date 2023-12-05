import atum from "../../imagens/atum.jpg";
import bacalhau from "../../imagens/bacalhau.jpg";
import corvina from "../../imagens/corvina.webp";
import camarao from "../../imagens/camarao.jpg";
import salmao from "../../imagens/salmao.jpg";
import polvo from "../../imagens/polvo.webp";
import tilapia from "../../imagens/tilapia.jpg";
import lula from "../../imagens/lula.jpeg";
import sardinha from "../../imagens/sardinha.jpeg";
import ostra from "../../imagens/ostra.jpg";
import albacora from "../../imagens/albacora.jpg";
import carangueijo from "../../imagens/carangueijo.webp";
import lagosta from "../../imagens/lagosta.jpg";
import merluza from "../../imagens/merluza.jpg";
import mexilhao from "../../imagens/mexilhao.webp";
import sururu from "../../imagens/sururu.jpg";

export const ProductService = {
  getProductsData() {
    return [
      {
        id: "1000",
        code: "f230fh0g3",
        name: "Atum",
        price: 30.49,
        category: "Peixe",
        quantity: 24,
        image: atum,
        dete: "05/12/2023",
        varchar: "kg",
      },
      {
        id: "1001",
        code: "nvklal433",
        name: "Bacalhau",
        price: 79.9,
        category: "Peixe",
        quantity: 61,
        image: bacalhau,
        dete: "03/12/2023",
        varchar: "kg",
      },
      {
        id: "1002",
        code: "zz21cz3c1",
        name: "Corvina",
        price: 18.9,
        category: "Peixe",
        quantity: 24,
        image: corvina,
        dete: "04/12/2023",
        varchar: "kg",
      },
      {
        id: "1003",
        code: "f230fh0j1",
        name: "Camarão",
        price: 34.9,
        category: "Crustáceos",
        quantity: 39,
        image: camarao,
        dete: "04/12/2023",
        varchar: "kg",
      },
      {
        id: "1004",
        code: "nvklal409",
        name: "Salmão",
        price: 79.9,
        category: "Peixe",
        quantity: 68,
        image: salmao,
        dete: "05/12/2023",
        varchar: "kg",
      },
      {
        id: "1005",
        code: "zz21cz3d4",
        name: "Polvo",
        price: 65.9,
        category: "Moluscos",
        quantity: 8,
        image: polvo,
        dete: "04/12/2023",
        varchar: "kg",
      },
      {
        id: "1006",
        code: "nvklal793",
        name: "Tilápia",
        price: 26.9,
        category: "Peixe",
        quantity: 56,
        image: tilapia,
        dete: "05/12/2023",
        varchar: "kg",
      },
      {
        id: "1007",
        code: "zz21cz3c1",
        name: "Lula",
        price: 29.9,
        category: "Moluscos",
        quantity: 27,
        image: lula,
        dete: "05/12/2023",
        varchar: "kg",
      },
      {
        id: "1008",
        code: "f230fh0g3",
        name: "Sardinha",
        price: 23.9,
        category: "Peixe",
        quantity: 37,
        image: sardinha,
        dete: "03/12/2023",
        varchar: "kg",
      },
      {
        id: "1009",
        code: "nvklal433",
        name: "Lagosta",
        price: 79.9,
        category: "Crustáceos",
        quantity: 41,
        image: lagosta,
        dete: "04/12/2023",
        varchar: "kg",
      },
      {
        id: "1010",
        code: "zz21cz3c1",
        name: "Ostra",
        price: 72.8,
        category: "Molusco",
        quantity: 83,
        image: ostra,
        dete: "04/12/2023",
        varchar: "kg",
      },
      {
        id: "1011",
        code: "f230fh0j1",
        name: "Sururu",
        price: 24.9,
        category: "Molusco",
        quantity: 21,
        image: sururu,
        dete: "05/12/2023",
        varchar: "kg",
      },
      {
        id: "1012",
        code: "nvklal409",
        name: "Merluza",
        price: 14.9,
        category: "Peixe",
        quantity: 56,
        image: merluza,
        dete: "05/12/2023",
        varchar: "kg",
      },
      {
        id: "1013",
        code: "zz21cz3d4",
        name: "Carangueijo",
        price: 5.0,
        category: "Crustáceos",
        quantity: 65,
        image: carangueijo,
        dete: "04/12/2023",
        varchar: "Unidade",
      },
      {
        id: "1014",
        code: "nvklal793",
        name: "Albacora",
        price: 19.9,
        category: "Peixe",
        quantity: 21,
        image: albacora,
        dete: "05/12/2023",
        varchar: "kg",
      },
      {
        id: "1015",
        code: "zz21cz3c1",
        name: "Mexilhão",
        price: 29.9,
        category: "Crustáceos",
        quantity: 34,
        image: mexilhao,
        dete: "05/12/2023",
        varchar: "kg",
      },
    ];
  },

  getProductsMini() {
    return Promise.resolve(this.getProductsData().slice(0, 5));
  },

  getProductsSmall() {
    return Promise.resolve(this.getProductsData().slice(0, 16));
  },

  getProducts() {
    return Promise.resolve(this.getProductsData());
  },

  getProductsWithOrdersSmall() {
    return Promise.resolve(this.getProductsWithOrdersData().slice(0, 16));
  },

  getProductsWithOrders() {
    return Promise.resolve(this.getProductsWithOrdersData());
  },
};
