import React, { useState, useEffect} from 'react';
import Navbar from '../navbar/navbar';
import './index.scss';
import Cards from '../productCard/card';
import Cart from '../cartPage/cart';

const AllProducts = (pizza, onAdd) => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(()=>{
    setPizzas(pizza.pizza)
    // console.log(pizza.pizza)
  })
  // console.log(pizzas)

  return (
    <div>
      <div className='all-container'>
        <div className='product-container'>
          <div className='card-container'>
              {pizzas && pizzas.map(pizza => {
                return<Cards  pizza={pizza} onAdd={onAdd}/>
              }
              )}
          </div>
        </div>
      </div>
    </div>
  )
};

export default AllProducts;
