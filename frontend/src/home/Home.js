import apiUrlPrefix from '../apiUrlPrefix';
import Product from './component/Product'; //component
import {CircularProgress} from '@mui/material';
import joelWithSticker from './joel with sticker.jpg';

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
            const data=await fetch(`${apiUrlPrefix}api/products`)
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
            <h2 className='w-full flex justify-center my-10'><CircularProgress size={70} /></h2>
            :
            <div className="my-4 mx-auto max-w-[1300px]">
                <h1 className='text-center p-10'>Stickers</h1>
                <div className='grid mx-3 justify-items-center items-center' style={{gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem'}}> {/* product-container */}
                    {
                        products.map(product=>{ //show products
                            return <Product product={product} key={product._id} />
                        })
                    }
                </div>
                <hr className='my-16 border-t-2 border-solid border-gray-200'/>
                <figure className='w-[300px] mx-auto'>
                    <img src={joelWithSticker} alt="Joel with Sticker" />
                    <figcaption className='text-center'>Joel coding this store with a nuclear energy sticker</figcaption>
                </figure>
            </div>
        }
    </>)
}

export default Home;