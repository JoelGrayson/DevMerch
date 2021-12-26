import React, {useEffect, useState} from 'react'
import CartItem from './component/CartItem';
import {CircularProgress} from '@mui/material';

import { readCart} from '../addToCart/functions';

function Cart() {
    let cartItems=readCart();

    let [totalPrice, setTotalPrice]=useState('calculating');

    useEffect(_=>{
        (async ()=>{
            console.log(cartItems);
            let total=0;
            for (let i=0; i<cartItems.length; i++) {
                //Get price of item
                let productUrl=`http://localhost:1028/api/products/${cartItems[i].id}`
                let temp=await fetch(productUrl);
                let json=await temp.json();
                let price=json.price;

                //Add item quantity times item price
                total+=parseInt(cartItems[i].quantity)*price;
            }
            setTotalPrice(total);
        })();
    }, [cartItems]);

    return (
        <div className="max-w-[1500px] mx-auto my-6">
            <h1 className='text-center'>Shopping Cart</h1>
            <main className='flex max-w-[1500px] mx-auto justify-around'>
                <div id='cart-left'>
                    {
                        cartItems.length>0 //Item
                        ?
                        //If items, display items and message to continue shopping
                        (<>
                            {cartItems.map(cartItem=>{
                                return <CartItem itemDetails={cartItem} key={cartItem.id} />;
                            })}
                            <a href='/' className='underline text-blue-700'>Continue shopping</a>
                        </>)
                        : //If no items, show message below
                        <p>No items in cart. <a href='/' className='underline text-blue-700'>Add one from the shopping page</a>.</p>
                    }
                </div>
                <div id='cart-right' className='border-solid border-2 border-gray-300 p-5 rounded-xl shadow-xl h-fit'>
                    <p>Subtotal of {cartItems.length} items</p>
                    <p className='border-b-2 border-b-solid border-b-gray-300 pb-2 mb-4'>{totalPrice==='calculating'?<CircularProgress style={{zoom: 0.6}} />:`$${totalPrice}`}</p>
                    <button>Proceed to checkout</button>
                </div>
            </main>
        </div>
    )
}

export default Cart
