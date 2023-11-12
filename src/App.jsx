import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import ProductDetail from './Components/ProductDetail';
import CategoryDetail from './Pages/CategoryDetail';
import CartProvider from './context/CartContext';

import './App.css';

const App = () => (
  <CartProvider>
    <Navbar />
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/detail/:id" element={<ProductDetail />} />
      <Route path="/category/:id" element={<CategoryDetail />} />
    </Routes>
  </CartProvider>
);

export default App;
