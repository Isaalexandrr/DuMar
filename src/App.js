import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import { Consumo } from "./pages/Consumo";
import CadastroCliente from "./pages/CadastroCliente";
import CadastroVendedor from "./pages/CadastroVendedor";
import EsqueceuSenha from "./pages/EsqueceuSenha";
import Publicar from "./pages/Publicar";
import Pagamento from "./pages/Pagamento";
import QuemSomos from "./pages/QuemSomos";
import TipoConta from "./pages/TipoConta";

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/TipoConta" element={<TipoConta />} />
          <Route path="/CadastroCliente" element={<CadastroCliente />} />
          <Route path="/CadastroVendedor" element={<CadastroVendedor />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Consumo" element={<Consumo />} />
          <Route path="/Publicar" element={<Publicar />} />
          <Route path="/" element={<Home />} />
          <Route path= "/QuemSomos" element={<QuemSomos />} />
          <Route path= "/EsqueceuSenha" element={<EsqueceuSenha />} />
          <Route path="/Pagamento" element={<Pagamento/>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
