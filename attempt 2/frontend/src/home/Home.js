import React from 'react';
import Product from './component/Product';

function Home() {
    return (<>
        <div className="my-4 mx-auto max-w-[1300px]">
            <h1 className='text-center p-10'>Latest Products</h1>
            <div className='flex justify-around'> {/* product-container */}
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>
        </div>
    </>)
}

export default Home;