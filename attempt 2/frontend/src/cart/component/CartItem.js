import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import './CartItem.css';

import {removeFromCart, changeQuantity} from '../../addToCart/functions';

function CartItem(props) {
    let {id, ogQuantity}=props.itemDetails; //only includes id & quantity
    let [quantity, setQuantity]=useState(ogQuantity);
    //fetch product details
    
    let [productDetails, setProductDetails]=useState({});

    useEffect(_=>{
        fetch(`http://localhost:1028/api/products/${id}`)
        .then(res=>res.json())
        .then(json=>{
            setProductDetails(json);
        })
    }, [id]); //no dependencies


    
    let defaultProductImageUrl=`https://i.ibb.co/VT68gRW/Vector-graphic-of-no-thumbnail-symbol.jpg`;

    function setNewValue(newQuantity) {
        changeQuantity(newQuantity); //change actual value
        setQuantity(newQuantity); //updates virtual dom
    }

    let productLink=`/product/${productDetails._id}`;
    
    return (
        <div className='cartItem flex items-center border-solid border-2 border-black rounded-lg p-3 my-5'>
            <Link to={productLink}>
                <img className='w-20 pr-5' src={productDetails.imageUrl || defaultProductImageUrl} alt="Product" />
            </Link>
            <Link to={productLink}>
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
            <button className='delete bg-red-500 hover:bg-red-600' onClick={_=>removeFromCart(id)}>
                <i className='fas fa-trash'></i>
            </button>
        </div>
    )
}

export default CartItem
