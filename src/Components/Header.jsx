import React from 'react';
import Navbar from './Navbar'; 



function Header(){
    return (
        <div id='main'>
           <Navbar/>
           <div id='head'>
           <h1>
           <span>WIT TinkerHub</span> The Power of women
           </h1>
           <p className='details'>We women, the power of tech </p>
           {/* <a href='#' className='cv-btn'> Download</a> */}
           </div>
        </div>
    )
}

export default Header;