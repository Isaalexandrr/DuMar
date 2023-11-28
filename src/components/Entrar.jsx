import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import styles from "./Entrar.module.css";

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
    </div>
  );
}
export default Entrar;
