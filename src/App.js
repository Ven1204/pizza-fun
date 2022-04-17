import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Landing from './components/landingPage/landing';
import Cart from './components/cartPage/cart';
import PageNotFound from './components/404/404';
import AllProducts from './components/productPage/AllProducts';
import Classic from './components/productPage/Classic';
import Deluxe from './components/productPage/Deluxe';
import Supreme from './components/productPage/Supreme';
import Navbar  from './components/navbar/navbar';
import Home from './components/productPage/Home';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Landing/>}/> */}
        <Route path="/" element={<Home/>}/>
        <Route path="All-Products" element={<AllProducts/>}/>
        <Route path="Classic-Pizzas" element={<Classic/>}/>
        <Route path="Deluxe-Pizzas" element={<Deluxe/>}/>
        <Route path="Supreme-Pizzas" element={<Supreme/>}/>
        <Route path="/my-cart" element={<Cart/>}/>
        <Route path="*"element={<PageNotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
