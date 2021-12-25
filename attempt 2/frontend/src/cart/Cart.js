import React from 'react'
import CartItem from './component/CartItem';

function Cart() {
    return (
        <div className="max-w-[1500px] mx-auto my-6">
            <h1 className='text-center'>Shopping Cart</h1>
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
        </div>
    )
}

export default Cart
