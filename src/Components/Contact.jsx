import React from 'react'

function Contact(props) {
  return (
    <div id='contact'>
    <h3> Query? Just ping us! </h3>
    <div className='contact-input'>
    <input type='email' placeholder='example@gmail.com'/>
    <a href='#contact'>Contact</a>
    </div>
   </div>
  );
}

export default Contact;
