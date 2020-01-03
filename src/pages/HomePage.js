import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Reviews from '../layouts/Reviews';
import BrandScan from '../img/brand/scantosheet.webp';
import BrandOyo from '../img/brand/oyo.webp';
import BrandLearncodeonline from '../img/brand/learncodeonline.webp';
import BrandTouchvpn from '../img/brand/touchvpn.webp';
import BrandRush from '../img/brand/rush.webp';
import BrandPass from '../img/brand/passwordgen.webp';
import Guarantee from '../layouts/Guarantee';
import firebase from '../Firebase';

export default function HomePage() {
  const [fullName, setFullName] = useState('');
  const [emailId, setEmailId] = useState('');
  const [appUrl, setAppUrl] = useState('');
  const [packageBrought, setPackageBrought] = useState();

  const product = {
    price: packageBrought,
    name: 'Goversal - ' + packageBrought + ' Package',
    description: 'Make your App successful'
  };

  function PayPal({ product }) {
    const [paidFor, setPaidFor] = useState(false);
    const [error, setError] = useState(null);
    const paypalRef = useRef();

    useEffect(() => {
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: product.description,
                  amount: {
                    currency_code: 'USD',
                    value: product.price
                  }
                }
              ]
            });
          },
          onApprove: async (data, actions) => {
            setPaidFor(true);
            Checkout();
          },
          onError: err => {
            setError(err);
            Checkout();
          }
        })
        .render(paypalRef.current);
    }, [product.description, product.price]);

    if (paidFor) {
      return (
        <div>
          <h5>
            Congrats, our team will get in touch with you within 8-12 hrs.
          </h5>
        </div>
      );
    }

    return (
      <div>
        {error && <div>Uh oh, an error occurred! {error.message}</div>}
        <div ref={paypalRef} />
      </div>
    );
  }

  const GetItNowOne = () => {
    setPackageBrought(179);
    firebase
      .firestore()
      .collection('179-Package-Clicked')
      .add({
        Clicked: '179'
      });
  };
  const GetItNowTwo = () => {
    setPackageBrought(279);
    firebase
      .firestore()
      .collection('279-Package-Clicked')
      .add({
        Clicked: '279'
      });
  };
  const GetItNowThree = () => {
    setPackageBrought(479);
    firebase
      .firestore()
      .collection('479-Package-Clicked')
      .add({
        Clicked: '479'
      });
  };
  const Checkout = () => {
    if (fullName === '' || emailId === '' || appUrl === '') {
      alert('Please fill all required fields!...');
    } else {
      firebase
        .firestore()
        .collection('Checkout')
        .add({
          Name: fullName,
          Email: emailId,
          AppUrl: appUrl,
          PackageBrought: packageBrought
        });
      setFullName('');
      setEmailId('');
    }
  };
  return (
    <div>
      <section className='container mt-5'>
        <h1 className='l-heading text-center'>
          Let's Make Your App "Successful".
        </h1>
        <p className='lead text-center'>
          AFFORDABLE. RELIABLE. POWERFUL. INCREASE SALES. GUARANTEED RESULTS.
        </p>
      </section>
      <section id='pricing-table' className='container text-center'>
        <div className='row justify-content-center'>
          {/* Pricing Table-1 */}
          <div className='col-lg-4 col-md-8 mb-2'>
            <div className='card bg-dark'>
              <h1 className='text-price'>$179</h1>
              <h1 className='text-price-cut'>$199</h1>
              <p className='text-flat-fee'>Delivery 3-5 days</p>
              <div
                className='btn-get-now-1 btn-get-now'
                data-toggle='modal'
                data-target='#PaymentModal'
                data-whatever='@mdo'
                onClick={GetItNowOne}
              >
                <Link to='/'>Get it now!</Link>
              </div>

              <p className='text-package-content'>
                ~ Textual App Review
                <br />
                ~ App Description Copywriting
                <br />
                ~ Keyword Research & Integration
                <br />
                ~ Complete Analysis of your App
                <br />~ Live Extensive Reporting
              </p>
            </div>
          </div>
          {/* Pricing Table-2 */}
          <div className='col-lg-4 col-md-8 mb-2'>
            <div className='card bg-dark'>
              <h1 className='text-price'>$279</h1>
              <h1 className='text-price-cut'>$349</h1>
              <p className='text-flat-fee'>Delivery 10-15 days</p>
              <div
                className='btn-get-now-2 btn-get-now'
                data-toggle='modal'
                data-target='#PaymentModal'
                data-whatever='@mdo'
                onClick={GetItNowTwo}
              >
                <Link to='/'>Get it now!</Link>
              </div>
              <p className='text-package-content'>
                ~ Press Release
                <br />
                ~ Submission to 15+ sites
                <br />
                ~ Texual App Review
                <br />
                ~ Keyword Research & Integration
                <br />
                ~ App Description Copywriting
                <br />
                ~ Complete Analysis of your App
                <br />
                ~ Automated UI/UX & Performance Testing
                <br />~ Live Extensive reporting
              </p>
            </div>
          </div>
          {/* Pricing Table-3 */}
          <div className='col-lg-4 col-md-8'>
            <div className='card bg-dark'>
              <h1 className='text-price'>$479</h1>
              <h1 className='text-price-cut'>$599</h1>
              <p className='text-flat-fee'>Delivery 20-25 days</p>
              <div
                className='btn-get-now-3 btn-get-now'
                data-toggle='modal'
                data-target='#PaymentModal'
                data-whatever='@mdo'
                onClick={GetItNowThree}
              >
                <Link to='/'>Get it now!</Link>
              </div>
              <p className='text-package-content'>
                ~ Press Release
                <br />
                ~ Submission to 35+ sites
                <br />
                ~ App Walkthrough Video(2-3 mins)
                <br />
                ~ Dedicated Email Campaign(5000 subscriber)
                <br />
                ~ Landing Page Design & Development
                <br />
                ~ Texual App Review
                <br />
                ~ Professional App Screenshot Design
                <br />
                ~ Keyword Research & Integration
                <br />
                ~ App Description Copywriting
                <br />
                ~ Complete Analysis of your App
                <br />
                ~ Automated UI/UX & Performance Testing
                <br />
                ~ CEO Interview/Success Story(500-600 words)
                <br />~ Live Extensive reporting
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Trusted By Top Brands */}
      <section id='trusted-by-top-brands' className='container mt-3'>
        <div className='row text-center'>
          <div className='col-12'>
            <h1>Trusted by Today's Top Brands</h1>
          </div>
        </div>
        <div className='row brand-items'>
          <div className='brand-item'>
            <img src={BrandScan} alt='Scantosheet' />
          </div>
          <div className='brand-item'>
            <img src={BrandOyo} alt='Oyo Rooms' />
          </div>
          <div className='brand-item'>
            <img src={BrandTouchvpn} alt='Touch Vpn' />
          </div>
          <div className='brand-item'>
            <img src={BrandLearncodeonline} alt='LearnCodeOnline' />
          </div>
          <div className='brand-item'>
            <img src={BrandRush} alt='SquarTapRush' />
          </div>
          <div className='brand-item'>
            <img src={BrandPass} alt='PasswordGenerator' />
          </div>
        </div>
      </section>
      {/* Explaination */}
      <section id='explaination' className='container mt-5'>
        <div className='row text-center mb-3'>
          <div className='col-12'>
            <h1>- We follow Modern Marketing Strategy -</h1>
          </div>
        </div>
        <div className='row pl-5'>
          <div className='col-lg-6 col-md-6'>
            <p className='explain-heading'>
              <i className='fas fa-chart-line icon'></i>Increase App/Play Store
              Ranking
            </p>
            <p className='lead'>
              With complex Machine Learning Algorithms & leading analytical
              tools, our team works on store Optimization for your App
              constantly to see how the App ranks.
            </p>
          </div>
          <div className='col-lg-6 col-md-6'>
            <p className='explain-heading'>
              <i className='fas fa-newspaper icon'></i>
              Press Outreach for your App
            </p>
            <p className='lead'>
              Our clients have already been featured on TechCrunch, CNN,
              CNNMoney, 148Apps, AppAdvice, TUAW, TheAppleGoogle and other
              leading publications.
            </p>
          </div>
        </div>
        <div className='row pl-5'>
          <div className='col-lg-6 col-md-6'>
            <p className='explain-heading'>
              <i className='fas fa-download icon'></i>More User
              Acquisition/Installs
            </p>
            <p className='lead'>
              With the help of AI & Nuro Marketing our team finds out the best
              crowd to target and results in getting more user and more App
              installs.
            </p>
          </div>
          <div className='col-lg-6 col-md-6'>
            <p className='explain-heading'>
              <i className='fas fa-dollar-sign icon'></i>
              Increase your In-App Purchases
            </p>
            <p className='lead'>
              We are having team of highly experienced copywriter, who work
              along with developer to build best strategy to increase your
              In-App Purchases.
            </p>
          </div>
        </div>
        <div className='row pl-5'>
          <div className='col-lg-6 col-md-6'>
            <p className='explain-heading'>
              <i className='fas fa-eye icon'></i>Professional App/Play Store
              Look
            </p>
            <p className='lead'>
              Highly experienced graphic designer work in collaboration with
              marketing mind to give a professional design to your app store
              listings.
            </p>
          </div>
          <div className='col-lg-6 col-md-6'>
            <p className='explain-heading'>
              <i className='fas fa-thumbs-up icon'></i>
              Complete Social Media Marketing
            </p>
            <p className='lead'>
              We handle your social media presence on Facebook, Twitter and
              other platforms. Your App will be promoted across these platforms
              to drive traffic & make it a brand.
            </p>
          </div>
        </div>
      </section>
      <Reviews />
      <Guarantee />
      {/* Payment Modal */}
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
                Payment - limited time offer!
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
                    Full Name*
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='recipient-name'
                    placeholder='John Doe'
                    onChange={e => {
                      setFullName(e.target.value);
                    }}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='recipient-name' className='col-form-label'>
                    Email-Id*
                  </label>
                  <input
                    type='email'
                    placeholder='email@company.com'
                    className='form-control'
                    id='recipient-name'
                    onChange={e => {
                      setEmailId(e.target.value);
                    }}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='recipient-name' className='col-form-label'>
                    App URL*
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='recipient-name'
                    placeholder='https://'
                    onChange={e => {
                      setAppUrl(e.target.value);
                    }}
                  />
                </div>
              </form>
            </div>
            <div className='px-5'>
              <PayPal product={product} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
