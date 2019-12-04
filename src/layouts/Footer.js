import React from 'react';
import PaypalTrust from '../img/paypal-trust.png';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <section id='footer' className='bg-dark'>
      <div className='container py-3'>
        <div className='row text-center text-white'>
          <div className='col-lg-6 col-md-6'>
            <h5>Who are we?</h5>
            <p className='px-5'>
              We are a bunch of extremely passionate people who live and breathe
              Apps. Our expert marketing team will help your Apps get the
              coverage by promoting them the right way.
            </p>
          </div>
          <div className='col-lg-6 col-md-6'>
            <h5>Quick Links</h5>
            <div className='px-5'>
              <ul>
                <li>
                  <Link to='/contact' className='text-white'>
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to='/' className='text-white'>
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link to='/' className='text-white'>
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='row text-center text-white'>
          <div className='col-12'>
            <img
              src={PaypalTrust}
              alt='Paypal-trust'
              style={{ width: '220px' }}
            />
          </div>
        </div>
        <div className='row text-center text-white'>
          <div className='col-12'>Copyright &copy;2019 goversal Inc.</div>
        </div>
      </div>
    </section>
  );
}
