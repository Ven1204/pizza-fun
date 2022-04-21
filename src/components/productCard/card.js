import React, {useState} from 'react';
import './card.scss';


function Cards(pizza, onAdd) {
  const [changeIcon, setChangeIcon] = useState(true);
  // console.log(pizza)

  // function that change icon from + to - when toggle
  const handleClick = () =>{
    setChangeIcon(!changeIcon);
    onAdd();
  }

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

      {/* onclick event that change icon from + to - when toggle (add to cart / remove from cart) */}
      <div onClick={handleClick} className='icon-cont'>
        <i className={changeIcon?`fa-regular ${'fa-square-plus'} fa-2x` : `fa-regular ${'fa-square-minus'} fa-2x` }></i>
      </div>

    </div>
  );
}

export default Cards;
