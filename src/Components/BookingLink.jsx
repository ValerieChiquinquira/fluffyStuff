import React from 'react'
import {Link} from 'react-router-dom';

import '../Styling/Functional.css';


const BookingLink = () => {
  return (
    <div className='full-row'> 
    
     <Link to='/Reservations'className='link button'> Book Now!</Link> 
    </div>
  )
}

export default BookingLink