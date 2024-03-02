import React from 'react'
import "./footer.css";
import fotter_logo from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pineterest_icon from "../Assets/pintester_icon.png";
import whtasapp_icon from "../Assets/whatsapp_icon.png"

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={fotter_logo} alt="" />
            <p>shopper</p>
        </div>
        <ul className='footerlinks'>
         <li>company</li>
         <li>products</li>
         <li>offices</li>
         <li>about</li>
         <li>contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icon-container">
            <img src={instagram_icon} alt="" />
            </div>
            <div className="footer-icon-container">
            <img src={pineterest_icon} alt="" />
            </div>
            <div className="footer-icon-container">
             <img src={whtasapp_icon} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>copy right @ 2024 all right reserved</p>
        </div>
    </div>
  )
}

export default Footer