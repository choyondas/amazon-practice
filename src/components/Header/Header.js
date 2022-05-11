


import React from 'react';
import logo from '../../images/ema-logo.png'
import './Header.css'


const Header = () => {
    return (
        <div className='header-logo'>
           
        <img src={logo} alt="" />




<nav className='nav-bar'>
    <a href="/shop">Shop</a><a href="/order">Order Review</a><a href="/invertory">Manage Inventory</a>
</nav>
<div className='nav-bottom'>
    <input className='input-box' type="text" />
   <span><i className="fa-solid fa-cart-shopping icon">  0</i></span>

</div>


        </div>
    );
};

export default Header;