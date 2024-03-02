import React from 'react'
import "./Hero.css"
import handIcon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import heroimg from "../Assets/hero_image.png"
const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
       <h2>new Arrivals only</h2>
      <div>
      <div className="hero-hand-icon">
        <p>new</p>
        <img src={handIcon} alt="" />
       </div>
       <p>collection</p>
       <p>for every one</p>
      </div>
       <div className="hero-latest-btn">
        <div>latest collection</div>
        <img src={arrow_icon} alt="" />
       </div>
        </div>
        <div className="hero-right">
  <img src={heroimg} alt="hero" />
        </div>
    </div>
  )
}

export default Hero