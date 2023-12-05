import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

import styles from "./Entrar.module.css";

import { IoCartSharp } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";

function Entrar() {
  return (
    <div className={styles["pessoa"]}>
      <Link className={styles["link"]} to="/login">
        <button type="button" className={styles["entrar"]}>
          <IoPersonSharp />
          Entrar
        </button>
      </Link>

      <Link to="/Login">
        <button
          type="button"
          class="btn-secondary btn-sm"
          className={styles["car"]}
        >
          <IoCartSharp />
        </button>
      </Link>
    </div>
  );
}
export default Entrar;
