import React from 'react'
import trohy from '../images/trophy.svg';
import trohy2 from '../images/trophy2.svg';
import trohy3 from '../images/trophy3.svg';
function Presentation(props) {
  return (
    <div>
      <div className='spacer' id='achv' ></div>

      <div id='presentaion'>
        <h1 id='presentation-heading'> Achievements </h1>
        <div className='presentaion-image'>
          <img src={props.image} alt='' />
        </div>
        <div id='present'>
          <div id='box'>
            <img src={trohy} alt='' /><br />
            <p>We empower ourselves and let others empower too.</p>
          </div>
          <div id='box'>
            <img src={trohy2} alt='' /><br />
            <p>Many of us are already placed in some top companies.</p>
          </div>
          <div id='box'>
            <img src={trohy3} alt='' /><br />
            <p>Some of us have gained incredible awards.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
