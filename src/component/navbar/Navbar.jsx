import React, { useContext, useRef, useState } from 'react'
import "./navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png"
import { Link } from 'react-router-dom';
import { Shopcontext } from '../../context/Shopcontext';
import nav_icon from "../Assets/dropdown_icon.png"
const Navbar = () => {
    const [menu,setMenu]=useState("shop")
    const {getTotalCartItems}=useContext(Shopcontext);
    const menuRef=useRef();
    const dropdown_toggle=(e)=>{
menuRef.current.classList.toggle('nav-menu-visible');
e.target.classList.toggle("open")

    }
  return (
    <div className='navbar'>
  <div className="nav_logo">
    <img src={logo} alt="logo" />
    <p>shopper</p>
  </div>
  <img src={nav_icon} className='nav-dropdown' alt="icon" onClick={dropdown_toggle} />
  <ul className="navmenu" ref={menuRef}>
  <li onClick={()=>setMenu("shop")} > <Link style={{textDecoration:"none"}} to={"/"}>shop {menu==="shop"?<hr />:<></>}</Link> </li>
  <li onClick={()=>setMenu("men")}><Link style={{textDecoration:"none"}} to="mens"> men {menu==="men"?<hr />:<></>}</Link></li>
  <li onClick={()=>setMenu("women")}><Link style={{textDecoration:"none"}} to="/womens"> women {menu==="women"?<hr />:<></>}</Link></li>
  <li onClick={()=>setMenu("kids")}> <Link style={{textDecoration:"none"}} to="/kids">kids {menu==="kids"?<hr />:<></>}</Link></li>
  </ul>
  <div className="nav-logincart">
    <Link to='/login'>
    <button>login</button>
    </Link>
    <Link to='/cart'>
    <img src={cart_icon} alt="cart" />
    </Link>
    <div className="navcart-count">
        {getTotalCartItems()}
    </div>
    
  </div>
    </div>
  )
}

export default Navbar