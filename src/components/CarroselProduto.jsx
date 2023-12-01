import React, { useState, useEffect } from "react";
import { Carousel } from "primereact/carousel";
import { ProductService } from "./service/ProductService";
import { Link } from "react-router-dom";

import styles from "./CarroselProduto.module.css";

import camarao from "../imagens/camarao.jpg";
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
          <div class="carousel-item active" className={styles["teste"]}>
            <div className={styles["box"]}>
              <div className={styles["grid-caixa"]}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-6 shadow-2"
                />
              </div>
              <div>
                <div className={styles["texto"]}>
                  <h3>{product.name}</h3>
                  <h3>R${product.price}</h3>
                </div>
                <div className={styles["estrela"]}>
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                </div>
                <input type="button" name="" id="" value="Adicionar à sacola" />
                <div className={styles["maisDetalhes"]}>
                  <Link to="">
                    <p>Ver mais detalhes</p>
                  </Link>
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
