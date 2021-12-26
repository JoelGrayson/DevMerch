import React from 'react';
import {useState, useEffect} from 'react';
import './style.css';

import { useParams } from 'react-router-dom';

//Manage cart
import {addToCart} from '../addToCart/functions';

function Product() {
    let params=useParams();
    let idFromParams=params.id; //id from react-router-dom
    
    let [product, setProduct]=useState(null); //product info
    let [pageStatus, setPageStatus]=useState('Loading'); //shows loading... or product not found

    let placeholderImageUrl=`https://i.ibb.co/VT68gRW/Vector-graphic-of-no-thumbnail-symbol.jpg`;

    async function getProductById(id) {
        setPageStatus('Loading');
        let result=await fetch(`http://localhost:1028/api/products/${id}`);
        if (result.status===500) { //error fetching
            setPageStatus('Page not found');
            return;
        }
        let json=await result.json();
        console.log(json);
        setProduct(json);
        setPageStatus(null); //indicates page is ready
        return json;
    }
    useEffect(() => {
        getProductById(idFromParams);
    }, []);


    return (<>
        {
            pageStatus!==null
                ?
            <div>{pageStatus}</div>
                :
            <div className="flex product max-w-[1300px] mx-auto my-10">
                <div className='product-left w-[30%]'> {/* Left (image) */}
                    <img id="product-image" src={product.imageUrl||placeholderImageUrl} alt="" />
                </div>
                <div className='product-middle w-[50%] p-6'> {/* Middle (product text description) */}
                    <h2 id="product-name">{product.name}</h2>
                    <p id="price">Price: $<span id="price-num">{product.price}</span> </p>
                    <p id="product-description">{product.description}</p>
                </div>
                <div className='product-right rounded-xl border-solid border-gray-400 border-2 shadow-lg w-[20%] p-6'> {/* Right (add to cart) */}
                    <div className="choose-size flex leading-[4] items-center">
                        <p>Quantity &emsp;</p>
                        <select className='border-solid border-2 border-blue-800 rounded-xl h-8' id='foo'>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                    <button onClick={_=>{addToCart(product._id, 1)}}>Add to cart</button>
                </div>
            </div>
        }</>);
}

function PageLoading() {
    return (<h2>Loading...</h2>);
}
function PageNotFound() {
    return (<div>
        <div>Page not found</div>
        <button>Return home</button>
    </div>);
}


export default Product;