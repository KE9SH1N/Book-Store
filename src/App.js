
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from "./pages/Login";
import Home from "./pages/Home"
import Register from './pages/Register';
import Product from './pages/Product';
import Products from './pages/Products';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product" element={<Product />} />
        <Route path="/products" element={<Products />} />

      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
