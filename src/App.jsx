import { BrowserRouter, Routes, Route} from "react-router-dom"
import {useEffect, useState } from "react"
import { CartProvider, useCart } from "react-use-cart";
import Nav from "./components/nav";
import Home from "./pages/home";
import Register from "./pages/register";
import Ppage from "./pages/ppage";
import Footer from "./pages/footer";
import CartModal from "./pages/cartmodal";
import CartContext from "./pages/cartContex";
import Magnifier from "./pages/magnfiermodal";
import UserProfile from "./user/profile";
import Profile from "./user/profile";
import Checkout from "./checkout";
// import UserProvider from '../src/context/usercontex';
function App() {


  return (
    <>
    
    <BrowserRouter> 
    {/* <UserProvider> */}
    <CartProvider>
   <Nav />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/nav" element={<Nav />} />
    <Route path="register" element={<Register />} />
    <Route path="ppage/:id" element={<Ppage />}></Route>
    <Route path="/cartmodal" element={<CartModal />}></Route>
    <Route path="/magnfiermodal" element={<Magnifier />}></Route>
    <Route path="/user/userprofile" element={<UserProfile />}></Route>
    <Route path="/checkout" element={<Checkout />}></Route>
 

    </Routes>

        <Footer />
        </CartProvider>
        {/* </UserProvider> */}
    </BrowserRouter>
    

    </>
  )
}

export default App;
