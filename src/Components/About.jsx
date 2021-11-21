import React from 'react'

function About(props) {
  return (
    <div id='happening'>
    <div id='about'>
     <div className='about-image'>
       <img src={props.image} alt=''/>
     </div>
       <div className='about-text'>
         <h2> {props.title} </h2>
         <p>We are live, come join us in this beautiful event.</p>
         <button>{props.button}</button>
       </div>
    </div>
    </div>
  );
}

export default About;
