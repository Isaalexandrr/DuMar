import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
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
<<<<<<< HEAD

=======
import NavbarCustomizado from "./components/NavbarCustomizado";
>>>>>>> 204a64f4b6fffec421062ff4c44543589d1bd410

function App() {
  return (
    <Router>
      <div>
        <NavbarCustomizado />
        <Routes>
          <Route path="/Configuracao" element={<Configuracao /> } />
          <Route path="/Cadastro" element={<Cadastro />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Consumo" element={<Consumo />} />
          <Route path="/MeusDados" element={<MeusDados />} />
          <Route path="/Publicar" element={<Publicar />} />
          <Route path="/" element={<Home />} />
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
