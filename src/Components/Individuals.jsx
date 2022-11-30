import React from 'react'
import {Link} from 'react-router-dom';

//styles
import "../Styling/Functional.css"


const Individuals = () => {
  return (
    <div className='rectangle blue borders'>
        <div className='col'>
            <Link to='/Services'className='link round-border'> Hand-spun Cotton Candy</Link> 
        </div>
        <div className='col'>
             <Link to='/Services'className='link round-border'> Popcorn Poppering</Link> 
        </div>
        <div className='col'>
            <Link to='/Services'className='link round-border'> Displays</Link> 
        </div>
        <div className='col '>
          <Link to='/Services'className='link round-border'> Candy Machines</Link> 
        </div>
        
            
       
    </div>
  )
}

export default Individuals