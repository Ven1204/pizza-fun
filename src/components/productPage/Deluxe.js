import React, {useState, useEffect} from 'react';
import Cards from '../productCard/card';

const Deluxe = () => {
 const [pizzas, setPizzas] = useState([]);
  const url = 'http://localhost:8000/pizza';
//  fetch api which has a deluxe type
  useEffect(()=>{
    fetch(url)
      .then(res => {
        return res.json()
      })

      .then(data =>{
       const deluxe = []
       data.filter(pizza =>{
          if(pizza.type === "Deluxe"){
            deluxe.push(pizza)
          }
        })
        setPizzas(deluxe);
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
  );
};

export default Deluxe;
