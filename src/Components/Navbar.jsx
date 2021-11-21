import React, {useState}  from 'react'
import  logo from '../logo.svg'



function Navbar(){

const [nav,setnav] = useState(false);

const changeBackground= () => {
    if(window.scrollY >= 50){
        setnav(true);
    }
    else{
        setnav(false);
    }
}
    window.addEventListener('scroll', changeBackground);
    return (
        <nav className={nav ? 'nav active' : 'nav'}>
           <a href='https://tinkerhub.org/' className='logo'>
           <img src={logo} alt=''/>
      
           </a>
           <input type='checkbox' className='menu-btn' id='menu-btn'/>
           <label className='menu-icon' for='menu-btn'>
           <span className='nav-icon'></span>
           </label>
           <ul className='menu'>
           <li><a href='#'className='active'>Home</a></li>
           <li><a href='#features'className='active'>Events</a></li>
           <li><a href='#about'className='active'>Registration</a></li>
           <li><a href='#achv'className='active'>Achievements</a></li>
           <li><a href='#mission'className='active'>About</a></li>
           </ul>
        </nav>
    )
}

export default Navbar;