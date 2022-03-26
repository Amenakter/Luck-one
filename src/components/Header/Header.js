import React from 'react';
import logo from '../utilities/logo/bgb.jpg'
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='header'>
                <img src={logo} alt="" />
                <div>
                    <a href="/shop">Shop</a>
                    <a href="/product">Product</a>
                    <a href="/order">Order</a>
                </div>
              
            </nav>

            <div className='header-text'>
            <h1>Cosmetics Shop</h1>
            <h3>Your Choise</h3>
            </div>
        </div>
    );
};

export default Header;