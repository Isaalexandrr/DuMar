import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useFetcher,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/Products";
import { Consumo } from "./pages/Consumo";
import CadastroCliente from "./pages/CadastroCliente";
import CadastroVendedor from "./pages/CadastroVendedor";
import EsqueceuSenha from "./pages/EsqueceuSenha";
import Publicar from "./pages/Publicar";
import Pagamento from "./pages/Pagamento";
import QuemSomos from "./pages/QuemSomos";
import TipoConta from "./pages/TipoConta";
import Configuracao from "./pages/Configuracao";
import MeusDados from "./pages/MeusDados";
import NavbarCustomizado from "./components/NavbarCustomizado";

function App() {
  const [filter, setFilter] = useState("");
  function handleCategorySelect(filtro) {
    setFilter(filtro);
  }

  useEffect(() => {
    localStorage.setItem("product_filter", filter);
  }, [handleCategorySelect, localStorage, filter]);
  return (
    <Router>
      <div>
        <NavbarCustomizado handleCategorySelect={handleCategorySelect} />
        <Routes>
          <Route path="/Configuracao" element={<Configuracao />} />
          <Route path="/CadastroCliente" element={<CadastroCliente />} />
          <Route path="/CadastroVendedor" element={<CadastroVendedor />} />
          <Route path="/TipoConta" element={<TipoConta />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Consumo" element={<Consumo />} />
          <Route path="/Publicar" element={<Publicar />} />
          <Route path="/" element={<Home filter={filter} />} />
          <Route path="/QuemSomos" element={<QuemSomos />} />
          <Route path="/Pagamento" element={<Pagamento />} />
          <Route path="/EsqueceuSenha" element={<EsqueceuSenha />} />
          <Route path="/Configuracao" element={<Configuracao />} />
          <Route path="/MeusDados" element={<MeusDados />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
