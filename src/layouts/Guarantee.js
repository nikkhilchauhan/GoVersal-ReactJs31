import React from 'react';
import TickIcon from '../img/tick-icon.png';

export default function Guarantee() {
  return (
    <section id='goversal-guarantee bg-light' className='container'>
      <div className='row text-center'>
        <div className='col-12'>
          <h2 className='guarantee-h1'>GoVersal Guarantee</h2>
          <hr />
        </div>
      </div>
      <div className='row text-center'>
        <div className='col-lg-6 div-col-md-6'>
          <p>
            <img src={TickIcon} alt='Tick' /> We offer Money Back Guarantee.
          </p>
          <p>
            <img src={TickIcon} alt='Tick' /> App marketing with maximum reach.
          </p>
        </div>
        <div className='col-lg-6 div-col-md-6'>
          <p>
            <img src={TickIcon} alt='Tick' /> 100% Organic coverage & more
            installs.
          </p>
          <p>
            <img src={TickIcon} alt='Tick' /> Customer satisfaction - our #1
            priority.
          </p>
        </div>
      </div>
    </section>
  );
}
