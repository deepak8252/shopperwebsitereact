import React from 'react'
import "./newsletter.css"
const Newsletter = () => {
  return (
    <div className='newsletter'>
        <h1>get exclusive offer on your email</h1>
        <p>subscribe to our news letter updated</p>
        <div>
            <input type="email" placeholder='your email id' />
            <button>subscribe</button>
        </div>
    </div>
  )
}

export default Newsletter