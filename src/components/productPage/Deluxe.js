import React, {useState, useEffect} from 'react';
import Cards from '../productCard/card';

const Deluxe = (pizza) => {
 const [deluxePizzas, setDeluxePizzas] = useState([]);

//  filter the api which has a deluxe type
  useEffect(()=>{
    const deluxe = [];
    pizza.pizza.filter( pizza =>{
      if(pizza.type=== "Deluxe")  {
        deluxe.push(pizza)
      }
    })
    setDeluxePizzas(deluxe);
  }, [])

  return (
    <div>
      <div className='all-container'>
        <div className='product-container'>
          <div className='card-container'>
              {deluxePizzas && deluxePizzas.map(pizza => {
                  return <Cards  pizza={pizza}/>}
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deluxe;
