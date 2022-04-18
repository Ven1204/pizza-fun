import React from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom';

function Navbar() {


  return (
    <div className="container-navbar">
      <div className='navbar-cont'>
        <div className='nav-bar'>
          {/* logo */}
          <div className='logo-container'>
            <Link to="/">
              <img className='logo' src="https://www.creativefabrica.com/wp-content/uploads/2021/01/09/Pizza-logo-design-Graphics-7663620-1-1-580x386.jpg" alt="" />
            </Link>
          </div>
          {/* cart section */}
          <div className='cart-link'>
            <h2>My Orders</h2>
          </div>
        </div>

        {/* list */}
        <div className='product-list-container'>
          <Link to="/Classic-Pizzas" className='list'>Classic</Link>
          <Link to="/Deluxe-Pizzas" className='list'>Deluxe</Link>
          <Link to="/Supreme-Pizzas" className='list'>Supreme</Link>
          <Link to="/All-Products" className='list'>All Products</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
