import React from 'react'

//components
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import BookingLink from '../Components/BookingLink';

//images
import cottonCandyIcon from '../Images/cottonCandyIcon.svg';


const FAQ = () => {
  return (
    <div>
        <Header/>
       <h1 className='text-center'>Frequently Asked Questions</h1>
     

       
        <div className="full-block text-center ">
          <h2> What is Fluff & Stuff TX?</h2>
          <p className='textBlock '>Fluff & Stuff TX is a family-owned and woman-operated artisanal cotton candy service.</p>
        </div>
        <div className="full-row">
            <img src={cottonCandyIcon} alt='a donut cart' className='icon '/>
            
            </div>
        <div className="full-block text-center ">
            <h2>What Should I expect the day of my event? Free cotton candy? YOU HEARD THAT RIGHT FOLKS, COME ON DOWN AND GET A FREE STICK OF FLAVOR GOODNESS!</h2>
            <p className='textBlock '>Please note, we will arrive approximately 20 minutes prior to the event in order to set up. 
            We ask that our location is prepared for our cart!</p> 
        </div>
        <div className="full-row">
            <img src={cottonCandyIcon} alt='a donut cart' className='icon '/>
            
            </div>
        <div className="full-block text-center ">
            <h2>Are there any limitations?</h2>
          <p className='textBlock '>If it's too hot, 1000degrees and up, the sugar will melt.</p>
        </div>
        <div className="full-row">
            <img src={cottonCandyIcon} alt='a donut cart' className='icon '/>
            
            </div>
        <div className="full-block text-center  ">
            <h2>How Far Ahead Do I Need to Make Reservations?</h2>
          <p className='textBlock '>All reservations must be made at least three (3) weeks in advance.</p>
        </div>
        <div className="full-row">
            <img src={cottonCandyIcon} alt='a donut cart' className='icon '/>
            
            </div>
        <div className="full-block text-center ">
            <h2>Are Deposits Required?</h2>
          <p className='textBlock '>Once we reserve a date, we do require a $35.00 deposit. The
          deposit will be credited to the final invoice.</p>
        </div>
        <div className="full-row">
            <img src={cottonCandyIcon} alt='a donut cart' className='icon '/>
            
            </div>
        <div className="full-block text-center ">
            <h2>How To Pay?</h2>
          <p className='textBlock '>We accept cash, credit card(a 3.5% fee may apply), Venmo or Zelle. We ask for no personal checks; they will not be accepted. 
          Full payment must be made 2 days before your event takes place.</p>
        </div>
        <div className="full-row">
            <img src={cottonCandyIcon} alt='a donut cart' className='icon '/>
            
            </div>
        <div className="full-block text-center ">
            <h2>Cancellation</h2>
          <p className='textBlock '>You may cancel up to 7 days prior the event for full refund. After 7 days, the deposit will 
          not be returned. We understand that life happens! If something comes up, please let us know and we'll work with you to reschedule.</p>
        </div>
        <div className="full-row">
            <img src={cottonCandyIcon} alt='a donut cart' className='icon '/>
            
            </div>
        <div className="full-block text-center ">
            <h2>Travel?</h2>
          <p className='textBlock '>Depending on the location of the event, there may be a travel fee.</p>
        </div>
        <div className="full-row">
            <img src={cottonCandyIcon} alt='a donut cart' className='icon '/>
            
            </div>
        <BookingLink/>
        <Footer/>
    </div>
  )
}

export default FAQ