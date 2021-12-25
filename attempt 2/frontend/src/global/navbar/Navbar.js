import React from 'react';
import logo from '../logo.png';
import {Link} from 'react-router-dom';
import CartIcon from './CartIcon.svg';

function Navbar(props) {
    return (
        <nav className='navbar'>
            <Link to='/'>
                <img src={logo} alt="logo" />
            </Link>
            <Link to='/cart'>
                <img src={CartIcon} alt="Cart icon" />
            </Link>
            <h2>Dev Merch</h2>
        </nav>
    );
}

export default Navbar;