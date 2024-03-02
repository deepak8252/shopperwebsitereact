import React from 'react'
import "./offer.css";
import exclusive_img from "../Assets/exclusive_image.png"
const Offer = () => {
  return (
    <div className='offers'>
        <div className="offer-left">
  <hl>exclusive</hl>
  <h1>offers for you</h1>
  <p>only on best  sellers products</p>
  <button>check now</button>

        </div>
        <div className="offer-right">
  <img src={exclusive_img} alt="" />
        </div>
    </div>
  )
}

export default Offer