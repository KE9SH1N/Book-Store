
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from "./pages/Login";
import Home from "./pages/Home"
import Register from './pages/Register';
import Product from './pages/Product';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Blog from './pages/Blog';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product" element={<Product />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/blog" element={<Blog/>} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
