import React from 'react'

//components
import Menu from '../Components/Menu';
import Logo from '../Components/Logo';
// import Title from '../Components/Title';

//images


//styles

import "../Styling/Header.css";

const Header = () => {
  return (
    <div className='header'>
        
        <Logo/>
        {/* <Title/> */}
        <Menu/> 
         
    </div>
  )
}

export default Header