import React, { useState } from 'react';
import Guarantee from '../layouts/Guarantee';
import firebase from '../Firebase';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const sendToFirebase = () => {
    if (name === '' || email === '') {
      alert('Please fill all required fields!...');
    } else {
      firebase
        .firestore()
        .collection('Contact-Us')
        .add({
          Name: name,
          Email: email,
          Message: message
        });
      setName('');
      setEmail('');
      setMessage('');
      alert('Successfully submited...');
    }
  };
  return (
    <div className='mt-5'>
      <section id='contact-form'>
        <div className='container'>
          <h1>Contact Us</h1>
          <p>
            Please fill out the from below to contact us or email us at
            <span style={{ fontWeight: 'bold' }}> support@goversal.com</span>
          </p>
          <div className='form-group'>
            <label htmlFor='name'>Name*</label>
            <input
              type='text'
              name='name'
              id='name'
              onChange={e => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email*</label>
            <input
              type='email'
              name='email'
              id='email'
              onChange={e => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='message'>Message</label>
            <textarea
              type='text'
              name='message'
              id='message'
              onChange={e => {
                setMessage(e.target.value);
              }}
            ></textarea>
          </div>

          <button type='submit' className='btn' onClick={sendToFirebase}>
            Submit
          </button>
        </div>
      </section>
      <Guarantee />
    </div>
  );
}
