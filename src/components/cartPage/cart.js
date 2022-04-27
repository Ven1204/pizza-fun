import React, { useEffect } from 'react';
import { useState } from 'react';
// import './cart.scss';

function Cart(cartList, onAdd, onRemove) {


  return (
    <div className='cart-container'>
      <h1>cart Items</h1>
      {cartList.length === 0 && <div>Cart is Empty</div> }
      {cartList.map((item) =>{
        <div key={item.id}  className="row">
          <div className='col-2'>{item.name}</div>
          <div className='col-2'>
            <button onClick={() => onAdd(item)} className="add" > + </button>
            <button onClick={() => onRemove(item)} className="remove" > - </button>
          </div>
          <div className='col-2 text-right'>
            {item.qty} * €{item.price}
          </div>
        </div>
      })}
    </div>
  );
}

export default Cart;
