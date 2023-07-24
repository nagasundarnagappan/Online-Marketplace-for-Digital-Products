import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Products from './Components/Product/Products';
import UploadProducts from './Components/Seller/UploadProducts';
import Cart from './Components/Buyer/Cart';
import Product from './Components/Product/Product';
import Home from './Components/Home';
import BuyerProfile from './Components/Buyer/Profile';
import SellerProfile from './Components/Seller/Profile';
import Feedback from './MicroServices/Feedback';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/products' element={<Products />} />
        <Route path='/seller/upload' element={<UploadProducts />} />
        <Route path='/buyer/cart' element={<Cart />} />
        <Route path='/product/view' element={<Product />} />
        <Route path='/buyer/profile' element={<BuyerProfile />} />
        <Route path='/seller/profile' element={<SellerProfile />} />
        <Route path='/feedback' element={<Feedback />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
