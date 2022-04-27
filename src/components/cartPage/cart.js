import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Cart(props) {
  const {cartItems, onAdd, onRemove} = props;
  console.log(cartItems)

  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  const handleCheckout = () =>{
    alert('Implement Checkout!');
  }


  return (
    <div className='cart-container'>
      <h1>cart Items</h1>
      {cartItems.length === 0 && <div>Cart is Empty</div> }
      {cartItems.map((item) =>{
        <div key={item.id}  className="row">
          <div className='col-2'>{item.name}</div>
          <div className='col-2'>
            <button onClick={() => onAdd(item)} className="add" > + </button>
            <button onClick={() => onRemove(item)} className="remove" > - </button>
          </div>
          <div className='col-2 text-right'>
            {item.qty} x €{item.price}
          </div>
        </div>
      })}


    {/* //////// */}
           {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">€{taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">
                €{shippingPrice.toFixed(2)}
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <Link to="/">
                <button onClick={handleCheckout}>
                  Checkout
                </button>
              </Link>
            </div>
          </>
        )}
    </div>
  );
}

export default Cart;
