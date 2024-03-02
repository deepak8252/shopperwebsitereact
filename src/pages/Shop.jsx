import React from 'react'
import Hero from '../component/hero/Hero'
import Popular from '../component/popular/Popular'
import Offer from '../component/offer/Offer'
import Newcollection from '../component/newcollection/Newcollection'
import Newsletter from '../component/newsletter/Newsletter'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offer/>
      <Newcollection/>
      <Newsletter/>
    </div>
  )
}

export default Shop