import React from 'react'
import "./breadcrum.css";
import arrow_icon from "../Assets/arrow.png"
const Breadcrums = (props) => {
    const {product}=props
  return (
    <div className='breadcrum'>
Home <img src={arrow_icon} alt="arrow" />SHOP <img src={arrow_icon} alt="arrow" />{product.category} <img src={arrow_icon} alt="arrow" />{product.name}
    </div>
  )
}

export default Breadcrums