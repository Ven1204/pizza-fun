import React from 'react';
import './navbar.scss';

function Navbar() {
  return (
    <>
      <div className='nav-bar'>
        {/* logo */}
        <div className='logo-container'>
          <img className='logo' src="https://www.creativefabrica.com/wp-content/uploads/2021/01/09/Pizza-logo-design-Graphics-7663620-1-1-580x386.jpg" alt="" />
        </div>

        {/* cart section */}
        <div className='cart-link'>
          <h2>My Orders</h2>
        </div>
      </div>


      {/* list */}
      <div className='product-list-container'>
        <a className="list" href="#">All</a>
        <a className="list" href="#">Classic</a>
        <a className="list" href="#">Deluxe</a>
        <a className="list" href="#">Supreme</a>
      </div>
    </>
  );
}

export default Navbar;
