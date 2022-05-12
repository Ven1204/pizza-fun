import React from 'react';
// import './navbar.scss';
import { Link } from 'react-router-dom';

function Navbar() {

  return (
    <div className="container-navbar">
        <div className='nav-bar'>
          {/* logo */}
          <div className='logo-container'>
            <Link to="/">
              <img className='logo' src="https://www.creativefabrica.com/wp-content/uploads/2021/01/09/Pizza-logo-design-Graphics-7663620-1-1-580x386.jpg" alt="" />
            </Link>

          </div>
          {/* cart section */}
          <div className='cart-link-cont'>
          <Link to="/my-cart" className='cart-link'><h2>My Orders</h2></Link>
          </div>
        </div>
    </div>
  );
}

export default Navbar;
