import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import product from '../../home/component/Product';
import './CartItem.css';

import {removeFromCart} from '../../addToCart/functions';

function CartItem(props) {

    let {id, ogQuantity}=props.itemDetails; //only includes id & quantity
    let [quantity, setQuantity]=useState(ogQuantity);
    //fetch product details

    let [productDetails, setProductDetails]=useState({});
    useEffect(_=>{
        getProductDetails();
    }, []); //no dependencies

    async function getProductDetails() {
        console.log(`http://localhost:1028/api/products/${id}`);
        let response=await fetch(`http://localhost:1028/api/products/${id}`)
        let json=await response.json();
        setProductDetails(json);
    }
    
    let defaultProductImageUrl=`https://i.ibb.co/VT68gRW/Vector-graphic-of-no-thumbnail-symbol.jpg`;

    function setNewValue(newQuantity) {
        setQuantity(newQuantity);
    }
    
    return (
        <div className='cartItem flex items-center border-solid border-2 border-black rounded-lg p-3 my-5'>
            <Link to={`/product/${111}`}>
                <img className='w-20 pr-5' src={productDetails.imageUrl || defaultProductImageUrl} alt="Product" />
            </Link>
            <Link to={`/product/${111}`}>
                <p>{(productDetails.hasOwnProperty('name') ? productDetails.name : 'Loading...')}</p>
            </Link>
            <div className='quantity'>
                <span>Quantity: </span>
                <select className='border-solid border-[1.5px] border-blue-800 rounded-md h-8' value={quantity} onChange={e=>setNewValue(e.target.value)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </div>
            <button className='delete bg-red-500' onClick={_=>removeFromCart(id)}>
                <i className='fas fa-trash'></i>
            </button>
        </div>
    )
}

export default CartItem
