import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Home from '../landingPage/Home';
import Modal from '../modal/Modal';

function Cart(props) {
  const {cartItems, onAdd, onRemove} = props;
  // console.log(cartItems)
  const [openModal, setOpenModal] = useState(false);


  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  const handleCheckout = () =>{
    // window.location.reload();
    // alert('Implement Checkout!');
    setOpenModal(!openModal);
  }


  return (
    <div className='cart-container'>
      <h1>cart Items</h1>
      {cartItems.length === 0 && <div>Cart is Empty</div> }
      {cartItems.map((item) =>{
        return(
          <div key={item.id}  className="pizza-name-cont">
            <div className='cart-item-name'>Pizza {item.name} </div>
            <div className='add-remove'>
              <button onClick={() => onRemove(item)} className="remove" > <i className="fa-solid fa-minus"></i> </button>
              <button onClick={() => onAdd(item)} className="add" > <i className="fa-solid fa-plus"></i> </button>
            </div>
            <div className='price-per-item'>
              {item.qty} x €{item.price}
            </div>
          </div>
        )
      })}


    {/* //////// */}
           {cartItems.length !== 0 && (
          <>
            <hr/>
            <div className='cart-inner-container'>
              <div className="item-price-container">
                <div className="price">Items Price</div>
                <div className=" price-qty">${itemsPrice.toFixed(2)}</div>
              </div>
              <div className="tax-price-container">
                <div className="tax">Tax Price:</div>
                <div className="tax-qty">€{taxPrice.toFixed(2)}</div>
              </div>
              <div className="delivery-price-container">
                <div className="delivery">Delivery Price</div>
                <div className="delivery-qty">
                  €{shippingPrice.toFixed(2)}
                </div>
              </div>
              <div className="total-price-container">
                <div className="total">
                  <strong>Total Price: </strong>
                </div>
                <div className="total-qty">
                  <strong>€{totalPrice.toFixed(2)}</strong>
                </div>
              </div>
            </div>



            <hr />
            <div className="checkout-cont">
              {/* <Link to="/"> */}
                <button className='checkout-btn' onClick={handleCheckout}>
                  Checkout
                </button>
              {/* </Link> */}
            </div>
          </>
        )}

        {openModal && <Modal toCloseModal={setOpenModal}/>}
    </div>

  );
}

export default Cart;
