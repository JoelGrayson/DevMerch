import Product from './component/Product'; //component
//React
import React from 'react';
import {useState} from 'react';

function Home() {
    let [loading, setLoading]=useState(true);
    let [products, setProducts]=useState(null);

    fetch('http://localhost:1028/api/products')
    .then(productsQueryRes=>productsQueryRes.json())
    .then(productsQueryRes=>{
        setProducts(productsQueryRes);
        setLoading(false);
    });

    return (<>
        { loading ?
            <h2>Loading...</h2>
            :
            <div className="my-4 mx-auto max-w-[1300px]">
                <h1 className='text-center p-10'>Latest Products</h1>
                <div className='flex justify-around'> {/* product-container */}
                    {
                        products.map(product=>{
                            return <Product product={product} key={product._id} />
                        })
                    }
                </div>
            </div>
        }
    </>)
}

export default Home;