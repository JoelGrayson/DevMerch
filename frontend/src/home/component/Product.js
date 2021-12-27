import React from 'react'
import {Link} from 'react-router-dom';

function product(props) {
    let product=props.product;
    let placeholderImage='https://i.ibb.co/VT68gRW/Vector-graphic-of-no-thumbnail-symbol.jpg';
    return (<>
        <Link to={`/product/${product._id}`}>
            <div className="bg-white shadow-lg border-2 border-solid border-black w-fit rounded-xl p-4"> {/* Product */}
                <h2 className='product-name text-center'>{product.name}</h2> {/* default values below */}
                <img className='product-image w-40 mx-auto' src={product.imageUrl||placeholderImage} alt='' />
                <p className='product-description'>{product.description}</p>
                <p className='price'>${product.price}</p>
                <p className='product-button underline font-bold text-blue-800'>View</p>
            </div>
        </Link>
    </>);
}

export default product;