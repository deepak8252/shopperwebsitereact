import React, { useContext } from 'react'
import "./productdisplay.css";
import starIcon from "../Assets/star_icon.png"
import stardull from "../Assets/star_dull_icon.png"
import { Shopcontext } from '../../context/Shopcontext';
const Productdisplay = (props) => {
    const {product}=props;
  const {addtoCart}=useContext(Shopcontext)
  return (
    <div className='productdisplay'>
   <div className="productdisplay-left">
    <div className="product-display-img-list">
        <img src={product.image} alt="#img" />
        <img src={product.image} alt="#img" />
        <img src={product.image} alt="#img" />
        <img src={product.image} alt="#img" />
    </div>
    <div className="product-display-image">
        <img className='productdisplay-main-img' src={product.image} alt="" />
    </div>
   </div>
   <div className="productdisplay-right">
    <h1>{product.name}</h1>
    <div className="productdisplay-right-star">
   <img src={starIcon} alt="" />
   <img src={starIcon} alt="" />
   <img src={starIcon} alt="" />
   <img src={starIcon} alt="" />
   <img src={stardull} alt="" />
  <p>(122)</p>
    </div>
    <div className="productdisplay-rightprice">
        <div className="productdisply-rightprice-old">
      ${" "}{product.old_price}
        </div>
        <div className="productdisply-rightprice-new">
           ${" "}{product.new_price}
            </div>
    </div>
    <div className="productdisplay-right-description">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolore hic sit ullam, doloribus saepe! Aliquam deleniti labore et aperiam debitis quis, quibusdam, placeat vero veritatis dolorem assumenda! Repellat, sit?
    </div>
    <div className="productdisplay-right-size">
        <h1>select size</h1>
        <div className="productdisplay-right-sizes">
            <div>s</div>
            <div>m</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
        </div>
    </div>
    <button onClick={()=>{addtoCart(product.id)}}>add to cart</button>
    <p className='productdisplay-right-category'>
      <span>category: </span> women ,  T-shirts , crop top</p>
      <p className='productdisplay-right-category'>
      <span>tags: </span> modern ,latest</p>
   </div>
    </div>
  )
}

export default Productdisplay