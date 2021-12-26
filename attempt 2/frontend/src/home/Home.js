import Product from './component/Product'; //component

//React
import React from 'react';
import {useState, useEffect} from 'react';

function Home() {
    useEffect(_=>{ //when loaded or modified
        fetchFunction();
    }, []); //empty array means only runs once ∵ no dependencies

    let [loading, setLoading]=useState(true, []);
    let [products, setProducts] = useState(null, []);
    
    async function fetchFunction() {
        try {
            const data=await fetch('http://localhost:1028/api/products')
            const jsonData=await data.json();
            setProducts(jsonData);
            setLoading(false);
        } catch (err) {
            console.log(err);
        }
    }
    
    return (<>
        { 
            loading
            ?
            <h2>Loading...</h2>
            :
            <div className="my-4 mx-auto max-w-[1300px]">
                <h1 className='text-center p-10'>Latest Products</h1>
                <div className='flex justify-around'> {/* product-container */}
                    {
                        products.map(product=>{ //show products
                            return <Product product={product} key={product._id} />
                        })
                    }
                </div>
            </div>
        }
    </>)
}

export default Home;