import React, { useState, useEffect } from "react";
import { ProductService } from "./service/ProdutoHome";
import Dropdown from "react-bootstrap/Dropdown";
import Menu from "./Menu";
import { IoStar } from "react-icons/io5";

import styles from "./ProdutosHome.module.css";
import AdicionarCarrinho  from "./Botao/AdicionarCarrinho";
export default function ProdutoHome() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ProductService.getProductsSmall().then((data) => {
      setProducts(data);
    });
  }, []);

  const renderProduct = (product) => (
    <div key={product.id} id={styles["box"]} className="m-0 p-0">
      <div id={styles["grid-caixa"]} className="m-0 p-0">
        <img src={product.image} alt={product.name} className="w-6 shadow-2" />
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
        <AdicionarCarrinho/>
        <div id={styles["detalhe"]} className="p-0 m-0">
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
  );

  return (
    <div className={styles["grid-container"]}>
      {products.map((product) => (
        <div key={product.id} className={styles["grid-item"]}>
          {renderProduct(product)}
        </div>
      ))}
    </div>
  );
}
