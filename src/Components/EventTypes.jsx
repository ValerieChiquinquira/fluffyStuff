import React from 'react'
import {Link} from 'react-router-dom';

//images

//styles
import "../Styling/Functional.css"

// import cottonCandyIcon from "../Images/cottonCandyIcon.png";

// import cottonCandyIcon from "../Images/cottonCandyIcon.svg";


const EventTypes = () => {
  return (
    <div className='rectangle'>
        <div className=' col  '>
            <Link to='/Services'className='link round-border'></Link> 
            {/* <Link to='/Services'className='link full-row  round-border'> Image place holder</Link>  */}
            <p>  Baby showers!</p>
        </div>
        <div className='red col'>
             <Link to='/Services'className='link round-border'> </Link> 
             <p> Birthday Celebrations!</p>
        </div>
        <div className='red col'>
            <Link to='/Services'className='link round-border'> </Link> 
            <p>Sporting Events!</p>
        </div>
        <div className='red col'>
          <Link to='/Services'className='link round-border'> </Link> 
          <p>Family Reunions! </p>
        </div>
    
    </div>
  )
}

export default EventTypes