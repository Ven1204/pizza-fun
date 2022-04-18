import React, { useState, useEffect} from 'react';
import Navbar from '../navbar/navbar';
import './index.scss';
import Cards from '../productCard/card';

const AllProducts = () => {
  const [pizzas, setPizzas] = useState([]);

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
      <div className='all-container'>
        <div className='product-container'>
          <div className='card-container'>
              {pizzas && pizzas.map(pizza => {
                  return <Cards  pizza={pizza}/>}
              )}
          </div>
        </div>
      </div>
    </div>
  )
};

export default AllProducts;
