import React from 'react'

//images
import cottonCart from '../Images/cottonCart.jpg';
import popcornCart from '../Images/popcornCart.jpg';
import candyCart from '../Images/candyCart.jpg';
import img2 from '../Images/img2.jpg';
import img3 from '../Images/img3.jpg';

//styling
import  '../Styling/PhotoBanner.css';

const PhotoBanner = () => {
  return (
    <div className= 'full-row'>

      <img src={popcornCart} alt='a donut cart' className='square'/>
      <img src={cottonCart} alt='a donut cart' className='square'/>
      <img src={candyCart} alt='a donut cart' className='square'/>
      <img src={img2} alt='a donut cart' className='square'/>
      <img src={img3} alt='a donut cart' className='square'/>
      <img src={img3} alt='a donut cart' className='square'/>
    </div>
  )
}

export default PhotoBanner