import React, { useState, useEffect } from "react";
import { Carousel } from "primereact/carousel";
import { ProductService } from "./service/ProductService";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

import styles from "./CarroselProduto.module.css";
import AdicionarCarrinho from "./Botao/AdicionarCarrinho";

import { IoStar } from "react-icons/io5";

export default function CarroselProduto() {
  const importImages = [];
  const [products, setProducts] = useState([]);
  const responsiveOptions = [
    {
      breakpoint: "1199px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "991px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  useEffect(() => {
    ProductService.getProductsSmall().then((data) => {
      setProducts(data.slice(0, 9));
    });
  }, []);

  const productTemplate = (product) => {
    return (
      <>
        <div class="carousel-inner justify-content-center">
          <div class="carousel-item active ">
            <div className={styles["box"]}>
              <div className={styles["grid-caixa"]}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-6 shadow-2"
                />
                <div className={styles["texto"]}>
                  <h3>{product.name}</h3>
                  <h4>R${product.price.toFixed(2)}</h4>
                </div>
                <div className={styles["estrela"]}>
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                </div>
                <AdicionarCarrinho />
                <div id={styles["detalhe"]} class="p-0 m-0">
                  <ul>
                    <li>
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="action"
                          id="dropdown-basic"
                          className={styles["detalhes"]}
                        >
                          Ver Mais Detalhes
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">
                            Data da Pesca: {product.dete}
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-2">
                            Quantidade em estoque: {product.quantity}
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            Medida: {product.varchar}
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <Carousel
        value={products}
        numVisible={4}
        numScroll={4}
        responsiveOptions={responsiveOptions}
        itemTemplate={productTemplate}
      />
    </div>
  );
}
