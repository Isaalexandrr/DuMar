import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
<<<<<<< HEAD
import Home from './components/Home';
import Login from './components/Login';
import Products from './components/Products';
import Cadastro from './components/Cadastro';
=======
import Home from './pages/Home';
import Login from './pages/Login';
import Products from './pages/Products';
import Navbar from './components/Navbar';
import { Consumo } from './pages/Consumo';

>>>>>>> 9d01d7f4321732b080fbf5c126d939a0744b850e


function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <nav>
         
        </nav>

        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Products" element={<Products />} /> 
<<<<<<< HEAD
          <Route path="/Cadastro" element={<Cadastro />} />
=======
          <Route path="/Consumo" element={<Consumo/>} />
>>>>>>> 9d01d7f4321732b080fbf5c126d939a0744b850e
          <Route path="/" element={<Home />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;

