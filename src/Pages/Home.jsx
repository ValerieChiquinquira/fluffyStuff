import React from 'react';
import  '../Styling/Home.css';

//Components
import Header from '../Components/Header';
import Footer from '../Components/Footer';

// import EventTypes from '../Components/EventTypes';
// import BookingLink from '../Components/BookingLink';
// import cottonCandyIcon from '../Images/cottonCandyIcon.svg';
// import PhotoBanner from '../Components/PhotoBanner';

//images
import img2_1 from "../Images/img2_1.jpg"



const Home = () => {
  return (
    <div>
        <Header/>
        <h1 className='full-row text-center '>Artisanal Cotton Candy Spinning Cart & More!</h1>
          <div className=' full-row '>
             
                <img src={img2_1} alt='cotton candy carts' className='img'/>
                        
          </div>
          <div className="full-row">
            {/* <img src={cottonCandyIcon} alt='outline of cotton candy on a stick' className='img50 '/> */}
            </div>
            
        <div className=' full-row '>
          
            <p className='textBlock '> Fluff & Stuff TX is the premier cotton candy spinning service in all of Texas. Guaranteed to put smiles
              on everyone's face and create long-lasting sweet memories.
            </p>
            <p className='textBlock'> Experts at providing cotton candy and treats to take any gathering to the next level. 
            Perfect for bringing families, friends, coworkers, and new people together.
            </p>
          </div>
            {/* <PhotoBanner/>
    
            <EventTypes/>
            <BookingLink/> */}

            <Footer/> 
    </div>
  )
}

export default Home