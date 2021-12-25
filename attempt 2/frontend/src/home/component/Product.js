import React from 'react'
import {Link} from 'react-router-dom';

const product = () => {
    return (<>
        <div className="border-2 border-solid border-black w-fit rounded-xl p-4"> {/* Product */}
            <h2 className='product-name text-center'>Product</h2> {/* default values below */}
            <img className='product-image w-40' src='https://i.ibb.co/VT68gRW/Vector-graphic-of-no-thumbnail-symbol.jpg' alt='' />
            <p className='product-description'>A nice sticker</p>
            <p className='price'>$2</p>
            <Link to={`/product/${111}`} className='product-button underline font-bold text-blue-800'>View</Link>
        </div>
    </>);
}

export default product;