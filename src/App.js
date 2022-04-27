import React, {useEffect, useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/index.scss';
import Cart from './components/cartPage/cart';
import PageNotFound from './components/404/404';
import AllProducts from './components/productPage/AllProducts';
import Classic from './components/productPage/Classic';
import Deluxe from './components/productPage/Deluxe';
import Supreme from './components/productPage/Supreme';
import Navbar  from './components/navbar/navbar';
import Home from './components/landingPage/Home';
import NavbarList from './components/navbar/navbarList';

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [cartList, setCartList] = useState([]);
  const onAdd = (product) =>{
    const exist = cartList.find(x => x.id === product.id);
    if(exist){
      setCartList(cartList.map(x => x.id === product.id? {...exist, qty: exist.qty + 1} : x));
    } else {
      setCartList([...cartList, {...product, qty: 1}])
    }
  }

  // fetch data from the api
  useEffect(()=>{
    fetch('http://localhost:8000/pizza')
      .then(res => {
        return res.json()
      })
      .then(data =>{
        setPizzas(data);
      })
  }, [])

  return (
    <div>
      <Navbar />
      <NavbarList />
      <Routes>
        {/* <Route path="/" element={<Landing/>}/> */}
        <Route path="/" element={<Home/>}/>
        <Route path="All-Products" element={<AllProducts pizza={pizzas} onAdd={onAdd}/>}/>
        <Route path="Classic-Pizzas" element={<Classic pizza={pizzas} onAdd={onAdd}/>}/>
        <Route path="Deluxe-Pizzas" element={<Deluxe pizza={pizzas} onAdd={onAdd}/>}/>
        <Route path="Supreme-Pizzas" element={<Supreme pizza={pizzas} onAdd={onAdd}/>}/>
        <Route path="/my-cart" element={<Cart cartList={cartList} onAdd={onAdd}/>}/>
        <Route path="*"element={<PageNotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
