import React, { useState, useEffect} from 'react';
import Navbar from '../navbar/navbar';
// import './index.scss';
import Cards from '../productCard/card';
import Cart from '../cartPage/cart';

const AllProducts = (props) => {
  const {pizza, onAdd} = props

  return (
    <div>
      <div className='all-container'>
        <div className='product-container'>
          <div className='card-container'>
              {pizza.map(pizza => {
                return <Cards key={pizza.id} pizza={pizza} onAdd={onAdd}/>
              }
              )}
          </div>
        </div>
      </div>
    </div>
  )
};

export default AllProducts;
