import React from 'react';
import logo3 from '../../images/logo3.png'
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo3} alt="" />
            <div>
                <a href="/home">Home</a>
                <a href="/food items">Food Items</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </div>

            
        </nav>
    );
};

export default Header;