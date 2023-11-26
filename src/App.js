import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import { Consumo } from "./pages/Consumo";
import Cadastro from "./pages/Cadastro";
import Perfil from "./components/Perfil";
import NavPerfil from "./components/NavPerfil"

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        {/* <NavPerfil /> */}
       
        <nav></nav>

        <Routes>
          <Route path="/Cadastro" element={<Cadastro />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Consumo" element={<Consumo />} />
          <Route path="/" element={<Home />} />
          <Route path="/Perfil" element={<Perfil />} />
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
