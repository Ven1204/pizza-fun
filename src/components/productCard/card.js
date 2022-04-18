import React from 'react';
import './card.scss';

function Cards(pizza) {
  // console.log(pizza)
  return (
    <div className='card-outside-cont'>
      <div className="pizza-img-cont">
        <img src={pizza.pizza.image} alt="" />
      </div>

      <div className="info-name-price">
        <h2 className='h2-name'>Pizza {pizza.pizza.name}</h2>
        <h4 className='h4-price'>price: {pizza.pizza.price}</h4>

      </div>

      <div className='card-info-cont'>
        <p>Toppings:</p>
        <ul className='scroll-items'>
          {pizza.pizza.Ingredients.map((item)=>
            <li>{item}</li>
          )}
        </ul>
      </div>


    </div>
  );
}

export default Cards;
