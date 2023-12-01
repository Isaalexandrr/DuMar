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
      },
      {
        id: "1001",
        code: "nvklal433",
        name: "Bacalhau",
        price: 79.9,
        category: "Peixe",
        quantity: 61,
      },
      {
        id: "1002",
        code: "zz21cz3c1",
        name: "Corvina",
        price: 18.9,
        category: "Peixe",
        quantity: 24,
      },
      {
        id: "1003",
        code: "f230fh0j1",
        name: "Camarão",
        price: 34.9,
        category: "Crustáceos",
        quantity: 39,
      },
      {
        id: "1004",
        code: "nvklal409",
        name: "Salmão",
        price: 79.9,
        category: "Peixe",
        quantity: 68,
      },
      {
        id: "1005",
        code: "zz21cz3d4",
        name: "Polvo",
        price: 65,
        category: "Moluscos",
        quantity: 8,
      },
      {
        id: "1006",
        code: "nvklal793",
        name: "Tilápia",
        price: 26.9,
        category: "Peixe",
        quantity: 56,
      },
      {
        id: "1007",
        code: "zz21cz3c1",
        name: "Lula",
        price: 29.9,
        category: "Moluscos",
        quantity: 27,
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
