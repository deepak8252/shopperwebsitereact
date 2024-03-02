import React, { useContext } from 'react'
import { Shopcontext } from '../context/Shopcontext'
import { useParams } from 'react-router-dom';
import Breadcrums from '../component/breadcrums/Breadcrums';
import Productdisplay from '../component/productdisplay/Productdisplay';
import Description from '../component/description/Description';
import Relatedproduct from '../component/relatedproduct/Relatedproduct';

const Product = () => {
  const {all_product}=useContext(Shopcontext);
  const {productId}=useParams();
  const product=all_product.find((e)=>e.id===Number(productId))
  return (
    <div>
      <Breadcrums product={product}/>
      <Productdisplay product={product}/>
      <Description/>
      <Relatedproduct/>
    </div>
  )
}

export default Product