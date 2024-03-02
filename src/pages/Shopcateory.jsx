import React, { useContext } from 'react'
import "./css/shopcateogery.css"
import { Shopcontext } from '../context/Shopcontext';

import Item from '../component/item/Item';
const Shopcateory = (props) => {
   const {all_product}=useContext(Shopcontext)
  return (
    <div>
      <img src={props.banner} alt="banner" className='shop-categorybanner'/>
      <div className="shopcateogery-indexsort">
        <p>
          <span>showing 1 - 12 out of 36 products</span>
        </p>
        <div className="shopcateogery-sort">
          sort by <img src="" alt="" />

        </div>
      </div>
      <div className="shopcateogery-products">
        {
           all_product.map((item,i)=>{
            if(props.category===item.category){
              return <Item  key={i} id={item.id} 
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
              /> 
            }
            return null

        })
        }

      </div>
      <div className="shopcateogery-loadmore">
        explore more
      </div>
    </div>
  )
}

export default Shopcateory