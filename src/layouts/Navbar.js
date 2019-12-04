import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/logo.png';

export default function Navbar() {
  return (
    <div id='navbar'>
      <div className='container'>
        <nav className='navbar navbar-expand-lg navbar-light'>
          <Link className='navbar-brand' to='/'>
            <img src={Logo} alt='' />
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item active'>
                <Link className='nav-link' to='/'>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/about'>
                  About
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/contact'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
