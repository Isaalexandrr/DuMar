import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

import styles from "./CarroselPrincipal.module.css";

import { ReactComponent as ImagemA } from "../imagens/carrosel1.svg";
import { ReactComponent as ImagemB } from "../imagens/carrosel2.svg";
import { ReactComponent as ImagemC } from "../imagens/carrosel3.svg";
import { ReactComponent as ImagemD } from "../imagens/carrosel4.svg";

function CarroselPrincipal() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <ImagemA text="First slide" />
        <div className="col-3 d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block align-self-end m-0 p-0">
          <Carousel.Caption className={styles["saibaMais"]}>
            <Link className={styles["link"]} to="/consumo">
              <input type="button" name="" id="" value="Saiba Mais" />
            </Link>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <ImagemB text="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <ImagemC text="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <ImagemD text="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarroselPrincipal;
