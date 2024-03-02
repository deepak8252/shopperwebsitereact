import React, { useContext } from 'react'
import "./cartitems.css"
import { Shopcontext } from '../../context/Shopcontext';
import remove_icon from "../Assets/cart_cross_icon.png"
const Cartitems = () => {
    const {all_product,cartItems,removeFromCart, getTotalCartAmount}=useContext(Shopcontext)
  return (
    <div className='cart-items'>
   <div className="cartitems-format-main">
    <p>products</p>
    <p>title</p>
    <p>price</p>
    <p>quantity</p>
    <p>total</p>
    <p>remove</p>

   </div>
   <hr />
  {
    all_product.map((e)=>{
   if(cartItems[e.id]>0){
    return  <div>
    <div className="cartitems-format cartitems-format-main">
        <img src={e.image} alt="" className='carticon-producticon' />
        <p>{e.name}</p>
        <p>${e.new_price}</p>
      <button className='cart-items-qty'>{cartItems[e.id]}</button>
      <p>${e.new_price*cartItems[e.id]}</p>
      <img src={remove_icon} className='cartitems-remove-icon' onClick={()=>{removeFromCart(e.id)}} alt="" />
    </div>
    <hr />
   </div>
   }
   return null
    })
  }
  <div className="cartitems-down">
    <div className="cartitems-total">
      <h1>cart total</h1>
      <div>
        <div className="cartitems-total-items">
          <p>sub total</p>
          <p>${getTotalCartAmount()}</p>
        </div>
        <hr />
        <div className="cartitems-total-items">
          <p>shiping fee</p>
          <p>free</p>
        </div>
        <hr />
   
      <div className="cartitems-total-items"> 
      <h3>total</h3>
      <h3>${getTotalCartAmount()}</h3>
      </div>
      </div>
      <button>proceed to checkout</button>
    </div>
    <div className="cartitems-promo-code">
      <p>if you have a promocode enter here </p>
      <div className="cartitems-promo-box">
        <input type="text" placeholder='promocode' />
        <button>submit</button>
      </div>
    </div>
  </div>

    </div>
  )
}

export default Cartitems