import React from 'react';

export default function PaymentModal() {
  return (
    <div>
      <div
        className='modal fade'
        id='PaymentModal'
        tabIndex='-1'
        role='dialog'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='exampleModalLabel'>
                Payment
              </h5>
              <button
                type='button'
                className='close'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div className='modal-body'>
              <form>
                <div className='form-group'>
                  <label htmlFor='recipient-name' className='col-form-label'>
                    Full Name:
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='recipient-name'
                    placeholder='John Doe'
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='recipient-name' className='col-form-label'>
                    Email-Id:
                  </label>
                  <input
                    type='email'
                    placeholder='email@company.com'
                    className='form-control'
                    id='recipient-name'
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='recipient-name' className='col-form-label'>
                    App URL:
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='recipient-name'
                    placeholder='https://'
                  />
                </div>
              </form>
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-secondary'
                data-dismiss='modal'
              >
                Close
              </button>
              <button type='button' className='btn btn-primary'>
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
