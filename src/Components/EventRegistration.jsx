import React from 'react'

function EventRegistration(props) {
  return (
    <div id='register'>
    <div id='about'>
       <div className='register-text'>
         <h2> {props.title} </h2>
         <p>Wonderful events are on the way, so why waiting!... go on grab your chance.</p>
         <button>{props.button}</button>
       </div>
       <div className='about-image'>
       <img src={props.image} alt=''/>
     </div>
    </div>
    </div>
  );
}

export default EventRegistration;
