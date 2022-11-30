import React from 'react'
import {Link} from 'react-router-dom';

//components

import PhotoBanner from './PhotoBanner';

//images

//styles

import "../Styling/Footer.css";


const Footer = () => {
  return (
    <div className='footer '>
        <div className='col '>
            <ul >
                <li> Flavors</li>
                <li> Toppings</li>
                <li> Packages</li>
                <li> <Link to='/Services'className='link'> Services</Link> </li>
               
                <li> <Link to='/FAQ'className='link'> FAQ</Link> </li>
                <li> Tips & Tricks</li>
            </ul>
        </div>
        <div className='col'>
        <ul className=''>
                
                <li> <Link to='/Gallery'className='link'> <PhotoBanner/></Link> </li>
            </ul>
        </div>
        <div className='col '>
        <ul className=''>
             
            <li> <Link to='/Contact'className='link'> Contact</Link> </li>
            <li> Connect</li>
            <li> <Link to='/Reservations'className='link'> Reservations</Link> </li>
            <li> <Link to='/About' className='link'> About</Link></li>
            
            
        </ul>
        </div>
        
    </div>
  )
}

export default Footer