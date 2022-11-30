import React from 'react'


//components
// import EventTypes from '../Components/EventTypes';
// import BookingLink from '../Components/BookingLink';
import Footer from '../Components/Footer'
import Header from '../Components/Header'

//images

import BioCart from '../Images/BioCart.jpg';

//styling

import '../Styling/About.css';


const About = () => {
  return (
    <div>

     <Header/>
      <h1 className='text-center'> Learn More About Fluff & Stuff TX</h1>
      

      <div className='full-row '>
        <div className='small-container '>
        <img src={BioCart} alt='cotton candy cart with people in front' className='img50 '/>
          
        </div>
      
      <div className='small-container '>
       <h2>Homemade and Home spun!</h2> 
        <p className=''>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iusto similique ex distinctio iure perspiciatis 
          temporibus suscipit molestiae commodi modi itaque mollitia excepturi, illum dolor ullam saepe quod voluptate rem?
        </p>
        <p className=''>
        Fluff and Stuff TX is homemade and home spun. Its creation was centered around me trying to keep my two daughters happy, entertained, and out of trouble. 
        I started it in my garage and my first customers were my little girls and my mom (my harshest and most supportive critics).
        With a lot effort, a lot of love, and lots of hard work and determination, we've been able to grow and share the love with Houston.
      
        </p>
        <p className=''>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolor dolore quisquam, excepturi sequi, culpa accusamus suscipit pariatur
           praesentium cupiditate dolorem quidem? Magnam impedit assumenda similique maxime rem dolores quibusdam.
        </p>
      </div>
    </div>
    {/* <EventTypes/>
      <BookingLink/> */}
  
       
      <Footer/>
    </div>
    
  )
}

export default About