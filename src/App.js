import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import { Consumo } from "./pages/Consumo";
import Cadastro from "./pages/Cadastro";
import Publicar from "./pages/Publicar";

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <nav></nav>

        <Routes>
          <Route path="/Publicar" element={<Publicar />} />
          <Route path="/Cadastro" element={<Cadastro />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/MeusPedidos" element={<Products />} />
          <Route path="/Consumo" element={<Consumo />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
