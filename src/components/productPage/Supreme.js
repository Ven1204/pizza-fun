import React, {useState, useEffect} from 'react';
import Cards from '../productCard/card';

const Supreme = (pizza) => {
  const [supremePizzas, setSupremePizzas] = useState([]);

//  filter api which has a supreme type
  useEffect(()=>{
    const supreme = [];
    pizza.pizza.filter( pizza =>{
      if(pizza.type=== "Supreme")  {
        supreme.push(pizza)
      }
    })
    setSupremePizzas(supreme);
  }, [])

  return (
    <div>
      <div className='all-container'>
        <div className='product-container'>
          <div className='card-container'>
              {supremePizzas && supremePizzas.map(pizza => {
                  return <Cards  pizza={pizza}/>}
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Supreme;
