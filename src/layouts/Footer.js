import React from 'react';
import PaypalTrust from '../img/paypal-trust.png';
import { Link } from 'react-router-dom';
import Logo from '../img/logo-white.png';

export default function Footer() {
  return (
    <section id='footer' className='bg-dark'>
      <div className='container py-3'>
        <div className='row text-center text-white'>
          <div className='col-lg-6 col-md-6'>
            <img src={Logo} alt='GoVersal' />
            <p className='px-5'>
              We work alongside brands and apps to elevate them to the top
              charts through data-driven user acquisition & vigorous split
              testing system. Our mission is to leverage technology and data
              science to maximize your app’s organic users.
            </p>
          </div>
          <div className='col-lg-6 col-md-6'>
            <h5>Quick Links</h5>
            <div className='px-5'>
              <ul>
                <li>
                  <Link to='/about' className='text-white'>
                    About Us
                  </Link>
                </li>
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
