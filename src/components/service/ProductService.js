import atum from "../../imagens/atum.jpeg";
import bacalhau from "../../imagens/bacalhau.jpg";
import corvina from "../../imagens/corvina.webp";
import camarao from "../../imagens/camarao.jpg";
import salmao from "../../imagens/salmao.jpg";
import polvo from "../../imagens/polvo.webp";
import tilapia from "../../imagens/tilapia.jpg";
import lula from "../../imagens/lula.png";

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
      },
      {
        id: "1001",
        code: "nvklal433",
        name: "Bacalhau",
        price: 79.9,
        category: "Peixe",
        quantity: 61,
        image: bacalhau,
      },
      {
        id: "1002",
        code: "zz21cz3c1",
        name: "Corvina",
        price: 18.9,
        category: "Peixe",
        quantity: 24,
        image: corvina,
      },
      {
        id: "1003",
        code: "f230fh0j1",
        name: "Camarão",
        price: 34.9,
        category: "Crustáceos",
        quantity: 39,
        image: camarao,
      },
      {
        id: "1004",
        code: "nvklal409",
        name: "Salmão",
        price: 79.9,
        category: "Peixe",
        quantity: 68,
        image: salmao,
      },
      {
        id: "1005",
        code: "zz21cz3d4",
        name: "Polvo",
        price: 65,
        category: "Moluscos",
        quantity: 8,
        image: polvo,
      },
      {
        id: "1006",
        code: "nvklal793",
        name: "Tilápia",
        price: 26.9,
        category: "Peixe",
        quantity: 56,
        image: tilapia,
      },
      {
        id: "1007",
        code: "zz21cz3c1",
        name: "Lula",
        price: 29.9,
        category: "Moluscos",
        quantity: 27,
        image: lula,
      },
    ];
  },

  getProductsMini() {
    return Promise.resolve(this.getProductsData().slice(0, 5));
  },

  getProductsSmall() {
    return Promise.resolve(this.getProductsData().slice(0, 10));
  },

  getProducts() {
    return Promise.resolve(this.getProductsData());
  },

  getProductsWithOrdersSmall() {
    return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
  },

  getProductsWithOrders() {
    return Promise.resolve(this.getProductsWithOrdersData());
  },
};
