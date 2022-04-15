import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Landing from './components/landingPage/landing';
import ProductDetails from './components/productDetailPage/productDetails';
import ProductPage from './components/productPage/productPage';
import Cart from './components/cartPage/cart';
import PageNotFound from './components/404/404';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/all-products" element={<ProductPage/>}/>
        {/* <Route path={`/${}`} element={<ProductDetails/>}/> */}
        <Route path="/my-cart" element={<Cart/>}/>
        <Route path="*"element={<PageNotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
