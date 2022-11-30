import React, {useState} from 'react';
import {Link} from 'react-router-dom';

//styling
import "../Styling/Header.css";

const Menu = () => {
   
  return (
  
    <nav className='menu'>
    
        <ul className='menu-ul'>
            <li> <Link to='/About' className='link'> About</Link></li>
            <li> <Link to='/Contact'className='link'> Contact</Link> </li>
            <li> <Link to='/Gallery'className='link'> Gallery</Link> </li>
            <li> <Link to='/Services'className='link'> Services</Link> </li>
            <li> <Link to='/Reservations'className='link'> Reservations</Link> </li>
            <li> <Link to='/FAQ'className='link'> FAQ</Link> </li>
        </ul>
      
    </nav>
  )
}

export default Menu