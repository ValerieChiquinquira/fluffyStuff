import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import PhotoGallery from './Pages/PhotoGallery';
import Reservations from './Pages/Reservations';
import Services from './Pages/Services';
import FAQ from './Pages/FAQ';


function App() {
  return (
   <div>
  <>
     <Routes>
     
      <Route path='/' element={<Home />}/>
   
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Gallery' element={<PhotoGallery/>}/>
      <Route path='/Reservations' element={<Reservations/>}/>
      <Route path='/Services' element={<Services/>}/>
      <Route path='/FAQ' element={<FAQ/>}/>
    </Routes>
  </>
   </div>
 
   
    
 
  );
}

export default App;
