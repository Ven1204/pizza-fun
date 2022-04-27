import React, {useState, useEffect} from 'react';
import Cards from '../productCard/card';


const Classic = (pizza) => {
  const [classicPizzas, setClassicPizzas] = useState([]);

//  filter api which has a classic type
  useEffect(()=>{
    const classic = [];
    pizza.pizza.filter( pizza =>{
      if(pizza.type=== "classic")  {
        classic.push(pizza)
      }
    })
    setClassicPizzas(classic);
  }, [])

  return (
    <div>
      <div className='all-container'>
        <div className='product-container'>
          <div className='card-container'>
              {classicPizzas && classicPizzas.map(pizza => {
                  return <Cards key={pizza.id} pizza={pizza}/>}
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classic;
