import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Products from './components/Products';
import { Consumo } from './components/Consumo';



function App() {
  return (
    <Router>
      <div>
        <nav>
         
        </nav>

        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Products" element={<Products />} /> 
          <Route path="/Consumo" element={<Consumo/>} />
          <Route path="/" element={<Home />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;

