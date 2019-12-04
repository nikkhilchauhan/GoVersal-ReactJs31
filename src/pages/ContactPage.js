import React from 'react';
import Guarantee from '../layouts/Guarantee';

export default function ContactPage() {
  return (
    <div className='mt-5'>
      <section id='contact-form'>
        <div className='container'>
          <h1>Contact Us</h1>
          <p>
            Please fill out the from below to contact us or email us at
            <span style={{ fontWeight: 'bold' }}> support@goversal.com</span>
          </p>
          <form action='/'>
            <div className='form-group'>
              <label htmlFor='name'>Name</label>
              <input type='text' name='name' id='name' />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input type='email' name='email' id='email' />
            </div>
            <div className='form-group'>
              <label htmlFor='message'>Message</label>
              <textarea type='text' name='message' id='message'></textarea>
            </div>
            <button type='submit' className='btn'>
              Submit
            </button>
          </form>
        </div>
      </section>
      <Guarantee />
    </div>
  );
}
