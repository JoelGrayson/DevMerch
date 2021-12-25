import React from 'react';
import logo from '../logo/circle.png';
import {Link} from 'react-router-dom';
import CartIcon from './CartIcon.svg';

function Navbar(props) {
    return (
        <nav className='w-full bg-gradient-to-br from-[#9663c9] to-[#476dc1] flex justify-between items-center p-3 text-[#9CE2F9]'>
            <div> {/* Left side */}
                <Link to='/'> {/* Logo */}
                    <p className='text-2xl px-5 py-2 border-solid border-2 border-[#641260] bg-[#8128C2] rounded-lg'><b>Dev</b> Merch</p>
                </Link>
            </div>
            <div className='flex p-3 space-x-4'> {/* Right side */}
                <Link to='/' className='j_header-btn'>
                    <p>Shop</p>
                </Link>
                <Link to='/cart' className='j_header-btn'>
                    <img src={CartIcon} alt="Cart icon" className='h-12' />
                    <p>Cart <span id='cartCount' className='rounded-full px-2 py-1 border-solid border-black border-2'>0</span></p>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;