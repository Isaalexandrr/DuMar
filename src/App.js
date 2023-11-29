import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import { Consumo } from "./pages/Consumo";
import Cadastro from "./pages/Cadastro";
import Carrinho from "./pages/Carrinho"
import QuemSomos from "./pages/QuemSomos";
import EsqueceuSenha from "./pages/EsqueceuSenha";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <nav></nav>

        <Routes>
          <Route path="/Cadastro" element={<Cadastro />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Consumo" element={<Consumo />} />
          <Route path="/" element={<Home />} />
          <Route path="/Carrinho" element={<Carrinho />} />

          <Route path= "/QuemSomos" element={<QuemSomos />} />
          <Route path= "/.EsqueceuSenha" element={<EsqueceuSenha />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
