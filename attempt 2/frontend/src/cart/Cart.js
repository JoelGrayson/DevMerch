import React from 'react'
import CartItem from './component/CartItem';

import { readCart} from '../addToCart/functions';

function Cart() {
    let cartItems=readCart();

    return (
        <div className="max-w-[1500px] mx-auto my-6">
            <h1 className='text-center'>Shopping Cart</h1>
            <main className='flex max-w-[1500px] mx-auto justify-around'>
                <div id='cart-left'>
                    {console.log(readCart()) /*log cartItems*/}
                    {
                        cartItems.length>0 //Item
                        ?
                        cartItems.map(cartItem=>{
                            return <CartItem itemDetails={cartItem} key={cartItem.id} />;
                        })
                        : //If no items, show message below
                        <p>No items in cart. <a href='/' className='underline text-blue-700'>Add one from the shopping page</a>.</p>
                    }
                </div>
                <div id='cart-right' className='border-solid border-2 border-gray-300 p-5 rounded-xl shadow-xl h-fit'>
                    <p>Subtotal of 2 items</p>
                    <p className='border-b-2 border-b-solid border-b-gray-300 pb-2 mb-4'>$4.99</p>
                    <button>Proceed to checkout</button>
                </div>
            </main>
        </div>
    )
}

export default Cart
