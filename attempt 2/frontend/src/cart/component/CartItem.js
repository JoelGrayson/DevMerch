import React from 'react'
import {Link} from 'react-router-dom';
import './CartItem.css';

function CartItem() {
    return (
        <div className='cartItem flex items-center border-solid border-2 border-black rounded-lg p-3 my-5'>
            <Link to={`/product/${111}`}>
                <img className='w-20 pr-5' src="https://i.ibb.co/VT68gRW/Vector-graphic-of-no-thumbnail-symbol.jpg" alt="Product" />
            </Link>
            <Link to={`/product/${111}`}>
                <p>Product name</p>
            </Link>
            <div className='quantity'>
                <span>Quantity: </span>
                <select className='border-solid border-[1.5px] border-blue-800 rounded-md h-8'> 
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>
            <button className='delete bg-red-500'>
                <i className='fas fa-trash'></i>
            </button>
        </div>
    )
}

export default CartItem
