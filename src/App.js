import './App.css';
import Navbar from './components/navbar/Navbar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopCategory from './pages/ShopCategory.jsx';
import Product from './pages/Product.jsx';
import Shop from './pages/Shop.jsx';
import Cart from './pages/Cart.jsx';
import LoginSignup from './pages/LoginSignup.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory category="mens"/>} />
          <Route path='/womens' element={<ShopCategory category="womens"/>} />
          <Route path='/kids' element={<ShopCategory  category="kids"/>} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
          <Route path='/product' element={<Product />} >
               <Route path=':productId' element={<Product/>}/>
          </Route>
        </Routes>
        <Footer />

      </BrowserRouter>
      

     
    </div>
  );
}

export default App;
