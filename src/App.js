import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Products from './components/Products';


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Login">Login</Link> 
            </li>
            <li>
              <Link to="/Products">Produtos</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Products" element={<Products />} /> 
          <Route path="/" element={<Home />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;

