import React from 'react'
import { Link } from 'react-router-dom'

export default function NavbarList() {
  return (
    // list
    <div className='product-list-container'>
      <Link to="/Classic-Pizzas" className='list'>Classic</Link>
      <Link to="/Deluxe-Pizzas" className='list'>Deluxe</Link>
      <Link to="/Supreme-Pizzas" className='list' >Supreme</Link>
      <Link to="/All-Products" className='list' >All Products</Link>
    </div>
  )
}
