import React from 'react'

//components
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import BookingLink from '../Components/BookingLink';
import EventTypes from '../Components/EventTypes';
import Individuals from '../Components/Individuals';
import PhotoBanner from '../Components/PhotoBanner';

//images
import cottonCart from '../Images/cottonCart.jpg';
import popcornCart from '../Images/popcornCart.jpg';
import candyCart from '../Images/candyCart.jpg';
import cottonCandyIcon from '../Images/cottonCandyIcon.svg';

//styling
import '../Styling/Services.css'


const Services = () => {
  return (
    
    <div>

        <Header/>
        <h1 className='text-center'>Services</h1>
  
          <div className='full-row '>
            <p className='text-center '> Fluff & Stuff TX is all about creating life-long memories.
             Apart from a semi-customizable cotton candy cart and popcorn maker,
              and our unparalleled aesthetic, we specialize in maximizing your sense of taste to forge long-lasting memories. 
            </p>
          </div>
        
        <Individuals/>

        <PhotoBanner/>
        <h2> Fluff and Stuff TX Cotton Candy Spinning</h2>
        
                <div className="full-row ">
                    <img src={cottonCart} alt='a cotton candy cary with pink cotton candy' className='img50'/>
                <div className="col ">
                    <h2> Fluff and Stuff TX Cotton Candy Spinning</h2>
                        <p className='textBlock '>
                            Book our one of a kind cotton candy spinning service for your next event! 
                            Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Expedita nesciunt officiis sequi ab ipsum ex adipisci, 
                            ullam maiores? Autem voluptatibus eum animi nihil ad possimus, in temporibus incidunt velit ea.
                         </p>
                        <PhotoBanner/> 
                {/* col */}
                </div> 
                {/*full row  */}
                </div>
           

              <div className="full-row ">

                    <div className='text-center'>
                        <h3> Cotton Candy Flavors</h3>
                        <ul>
                        <li>Banana</li>
                        <li>Blueberry</li>
                        <li>Bubble Gum</li>
                        <li>Pina Colada</li>
                        <li>Guava</li>
                        <li>Orange</li>
                        <li>Pineapple</li>
                        <li>Strawberry</li>
                        <li>Tropical Punch</li>
                        <li>Tutti Fruity</li>
                        <li>Watermelon</li>
                        </ul>
                    </div>
                    {/* text center */}

              <div className='text-center' >
                <h3> Cotton Candy Toppings</h3>
                <ul >
                  <li>Vanilla Sprinkles</li>
                  <li>Non pareils</li>
                  <li>Pink Sugar</li>
                  <li>Edible Glitter</li>
                  <li>Assorted Pop Rocks Flavor </li>
                </ul>
              {/* text-center */}
              </div>
                {/* full-row */}
              </div>

       

        <h2> PopCorn</h2> 
            <div className='full-row '>
                <img src={popcornCart} alt='a donut cart' className='img50'/>

                  <p className="textBlock"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores laboriosam omnis dolorum at sapiente! Eos labore est 
                    laboriosam suscipit repudiandae vitae iste assumenda aperiam ab cumque? Inventore, blanditiis possimus? Animi.</p>
            {/* full-row */}
            </div>
            
      
        <h2>Candy Carts</h2>

            <div className='full-row '>

                <img src={candyCart} alt='a donut cart' className='img50'/>
                    <p className='textBlock'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, ducimus necessitatibus. Quod necessitatibus deleniti totam sit, 
                  , natus quis, provident assumenda nemo recusandae ut illo officiis expedita voluptate! Sapiente, tenetur!</p>
            </div>
       

        <h2> Party Packages</h2>
                <div className='full-row'>
                  <img src={cottonCart} alt='a donut cart' className='img50'/>

                        <div className='col'>
                                <p className='textBlock'>
                                    Fluff and Stuff TX is dedicated to making every dream come true. That's why we have packages you can choose from, ranging from weekend get-togethers to the bash of the year. We have packages 
                                    for all your needs!
                                </p>

                                <p className='textBlock'>
                                    So we put together all of our great services so you can easily figure out what works for you   
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, ratione nihil, perspiciatis facere at, maiores voluptate nostrum 
                                    sunt in eligendi omnis alias nulla consequuntur aspernatur quisquam eaque fugit laudantium quos?    
                                </p>  

                        </div>
                </div>


            <div className="full-row">
                <img src={cottonCandyIcon} alt='a cotton candy icon' className='icon '/>
            </div>
           
          <div className='full-row'>  
          
              <div className='col text-center '>
                <h3 className='underline'> The Fluffy Packages</h3>
                  <p className='textBlock'>This lovely packages is best suited for kids parties, luncheons, bridal showers, baby showers 
                    and any small gathering! Perfect for intimate gatherings.</p> 
                <h4> Time Duration</h4>
                  <small> 60 minutes</small>
                <h4> How Many Flavors?</h4>
                  <small> Two Flavors</small>
                <h4> How Many Cones?</h4>
                  <small> 60</small>
                <h4> Cost?</h4>
                  <small>$250</small>
                  <BookingLink/>
              </div>
              <div className="col">
                <img src={cottonCart} alt='a donut cart' className='img50'/>
                
              </div>
              
          </div>    

            <div className="full-row">
                <img src={cottonCandyIcon} alt='a cotton candy outline' className='icon '/>
            
            </div>

            <div className='full-row'> 
                <div className='col text-center'>
                    <h3 className='underline'> The Celebration</h3>

                    <p className='textBlock'> 
                    This one is perfect for styled birthday parties, grand openings, 
                    and brand-launch parties. Big enough to forge connections and small enough to 
                    create long-lasting memories.
                    </p>
                    <h4> Time Duration</h4>
                    <small> 120 minutes</small>
                    <h4> How Many Flavors?</h4>
                    <small> Three flavors</small>
                    <h4> How Many Cones?</h4>
                    <small> 80 </small>
                    <h4> Cost?</h4>
                    <small> $400</small>

                     <BookingLink/>
                </div>     
                <div className="col">
                    <img src={cottonCart} alt='a donut cart' className='img50'/>
                     
                </div>
          </div>

          <div className="full-row">
            <img src={cottonCandyIcon} alt='a cotton candy outline' className='icon'/>    
         </div>


        <div className="full-row">
                <div className='col text-center'>
                    <h3 className='underline'> The Sweet & Salty</h3>
                    <p className='textBlock'> This package will satisfy everyone's salty and sweet cravings! This is our first package to include our very own popcorn maker.
                        This combo will have something for everyone and is frequently requested for birthday and holiday parties.
                    </p>
                    <h4> Time Duration</h4>
                    <small> 120 minutes</small>
                        <h4> How Many Flavors?</h4>
                        <small> Four</small>
                        <h4> How Many Cones?</h4>
                        <small> 80</small>
                        <h4> How many bags of popcorn?</h4>
                        <small> 80 </small>
                        <h4> Cost?</h4>
                        <small> $525</small>
                         <BookingLink/>
                    </div>
                    <div className="col">
                        <img src={cottonCart} alt='a donut cart' className='img50'/>
                       
                    </div>
                </div>


          <div className="full-row">
            <img src={cottonCandyIcon} alt='a donut cart' className='icon'/>
          
            </div>
        <div className="full-row">

        <div className='col text-center'>
              <h3 className='underline '> The Big Affair</h3>
                <p className='textBlock'> This is one is the biggest, grandest, fairest of them all! This one comes with two cotton candy machines, popcorn maker, and Chiara backdrop walls.
                The Big Affair packages has been incredibly successful at fundraisers, school events, grand openings, store anniversaries, weddings, corporate get-togethers, and family reunions.
                  </p>

                    <h4> Time Duration</h4>
                      <small> Three Hours</small>
                      <h4> How Many Flavors?</h4>
                        <small> Five</small>
                      <h4> How Many Cones?</h4>
                        <small>200 </small>
                        <h4> How many bags of popcorn?</h4>
                        <small> 150</small>
                      <h4> Cost?</h4>
                      <small> $825</small>

                     <BookingLink/>
            </div>
            <div className="col">
                <img src={popcornCart} alt='a donut cart' className='img50'/>
             
            </div>
            
        </div>

        <EventTypes/>
        <BookingLink/>
        <Footer/> 
        
   </div>
   
  )
}

export default Services