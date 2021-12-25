import Navbar from './navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//Pages
import Home from '../home/Home';
import Product from '../product/Product';
import Cart from '../cart/Cart';

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        Store
        <main>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/product/:id' element={<Product/>}></Route>
                <Route path='/cart' element={<Cart/>}></Route>
            </Routes>
        </main>
        {/* Navbar */}
        {/* Store */}
    </BrowserRouter>
  );
}

export default App;
