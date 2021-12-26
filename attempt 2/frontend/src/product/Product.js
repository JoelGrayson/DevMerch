import React from 'react';
import './style.css';

function Product() {
    return (
        <div className="flex product max-w-[1300px] mx-auto my-10">
            <div className='product-left w-[30%]'> {/* Left (image) */}
                <img id="product-image" src="https://i.ibb.co/VT68gRW/Vector-graphic-of-no-thumbnail-symbol.jpg" alt="" />
            </div>
            <div className='product-middle w-[50%] p-6'> {/* Middle (product text description) */}
                <h2 id="product-name">Product</h2>
                <p id="price">Price: $<span id="price-num">2</span> </p>
                <p id="product-description">Product description. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa praesentium voluptate doloribus vel eaque a amet veniam repudiandae at facilis eum aliquid doloremque quo voluptatem, iste molestiae asperiores quisquam, aspernatur officiis voluptatibus porro minus nobis. Numquam saepe magnam exercitationem iste. Obcaecati aspernatur minima saepe incidunt est, sapiente illum voluptas corporis?</p>
            </div>
            <div className='product-right rounded-xl border-solid border-gray-400 border-2 shadow-lg w-[20%] p-6'> {/* Right (add to cart) */}
                <div className="choose-size flex leading-[4] items-center">
                    <p>Quantity &emsp;</p>
                    <select className='border-solid border-2 border-blue-800 rounded-xl h-8'>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>
                <button>Add to cart</button>
            </div>
        </div>
    );
}

export default Product;