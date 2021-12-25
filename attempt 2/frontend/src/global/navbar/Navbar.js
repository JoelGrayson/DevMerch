import React from 'react';
import logo from '../logo/circle.png';
import {Link} from 'react-router-dom';
import CartIcon from './CartIcon.svg';

function Navbar(props) {
    return (
        <nav className='w-full bg-gray-400 flex'>
            <Link to='/'>
                <img src={logo} alt="logo" className='h-12' />
            </Link>
            <Link to='/cart'>
                <img src={CartIcon} alt="Cart icon" className='h-12' />
            </Link>
        </nav>
    );
}

export default Navbar;