//Global components
import Navbar from './navbar/Navbar';
import Page from './page/Page';
import Footer from './footer/Footer';
import './import tailwind.css';

//Router
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//Pages
import Home from '../home/Home';
import Product from '../product/Product';
import Cart from '../cart/Cart';
import About from '../about/About';

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Page>
            <Routes>
                {/* Shop */}
                <Route path='/' element={<Home/>}></Route>
                <Route path='/product/:id' element={<Product/>}></Route>
                {/* Delete for production. only for testing */} <Route path='/product/' element={<Product/>}></Route>
                <Route path='/cart' element={<Cart/>}></Route>
                
                {/* Other */}
                <Route path='/about' element={<About/>}></Route>
            </Routes>
        </Page>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
