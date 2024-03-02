import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/navbar/Navbar';
import Shop from './pages/Shop';
import Cart from "./pages/Cart";
import Shopcateory from "./pages/Shopcateory"
import Product from "./pages/Product"
import Loginsignpage from "./pages/Loginsignpage"
import Footer from './component/footer/Footer';
import men_bainner from "./component/Assets/banner_mens.png"
import women_bainner from "./component/Assets/banner_women.png";
import kids_banner from "./component/Assets/banner_kids.png"
function App() {
  return (
    <div >
    
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/mens' element={<Shopcateory banner={men_bainner} category="men"/>}/>
      <Route path='/womens' element={<Shopcateory  banner={women_bainner} category="women"/>}/>
      <Route path='/kids' element={<Shopcateory  banner={kids_banner} category="kid"/>}/>
      <Route path='/product' element={<Product/>}>
         <Route path=':productId' element={<Product/>}/>
      </Route>
      <Route path='/login' element={<Loginsignpage/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
