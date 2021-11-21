import React from 'react'
import vision from '../images/vision.svg';
import mission from '../images/mission.svg';
function Vision(props) {
  return (
    <div>
      <div className='spacer' id='mission' ></div>

      <div id='presentaion'>
        <h1 id='presentation-heading'> About Us </h1>
        <p className='presentaion-p'>We are a community of tinkerers, makers, policy geeks & students and are working towards mapping and empowering people who share a passion to innovate. At TinkerHub, we take pride in learning on our own and from peers. That's right! We also have a fun team of super cool mentors who take you from beginner to super-coder and collaborator - with tons of help from you, of course!  </p>
        <div className='presentaion-image'>
          <img src={props.image} alt='' />
        </div>
        <div id='present'>
          <div id='box'>
          <div>
            <img src={vision} alt='' />
            </div>
            <div  className='s-b-text'>
            <h2 style={{color: "#323232"}}>Vision</h2>
            <p>The world is changing, and we want India to be ready. We're here to make sure that everyone has access to the knowledge required to set the course for a better future.</p>
          </div>
          </div>
          <div id='box'>
          <div >
          <img src={mission} alt='' />
          </div>
          <div  className='s-b-text'>
          <h2 style={{color: "#323232"}}> Mission</h2>
          <p>The world is changing, and we want India to be ready. We're here to make sure that everyone has access to the knowledge required to set the course for a better future.</p>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vision;
