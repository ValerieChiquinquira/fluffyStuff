import React from 'react'
import {Link} from 'react-router-dom';

//images
import logo from "../Images/logo.png";

//styling
import "../Styling/Header.css";


const Logo = () => {
  return (
    <div className="logo">
        
             <Link to='/' className='link '>  <img src={logo} alt='Fluff and stuff logo' className=' med-logo' /></Link>
        
       
    </div>

  )
}

export default Logo