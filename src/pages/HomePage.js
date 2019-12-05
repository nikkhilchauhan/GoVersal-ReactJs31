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
    setPackageBrought(199);
    firebase
      .firestore()
      .collection('199-Package-Clicked')
      .add({
        Clicked: '199'
      });
  };
  const GetItNowTwo = () => {
    setPackageBrought(599);
    firebase
      .firestore()
      .collection('599-Package-Clicked')
      .add({
        Clicked: '599'
      });
  };
  const GetItNowThree = () => {
    setPackageBrought(999);
    firebase
      .firestore()
      .collection('999-Package-Clicked')
      .add({
        Clicked: '599'
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
              <h1 className='text-price'>$199</h1>
              <h1 className='text-price-cut'>$269</h1>
              <p className='text-flat-fee'>Flat fee</p>
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
                ~ Press Release
                <br />
                ~ App Description Copywriting
                <br />
                ~ Guaranteed 5 App Reviews
                <br />
                ~ Complete Analysis of App
                <br />
                ~ 500 Organic Twitter Followers
                <br />
                ~ 500 Organic Facebook Fans
                <br />
                ~ Live Extensive reporting
                <b />
              </p>
            </div>
          </div>
          {/* Pricing Table-2 */}
          <div className='col-lg-4 col-md-8 mb-2'>
            <div className='card bg-dark'>
              <h1 className='text-price'>$599</h1>
              <h1 className='text-price-cut'>$769</h1>
              <p className='text-flat-fee'>Flat fee</p>
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
                ~ Keyword Research
                <br />
                ~ UI/UX Testing On 20+ Devices
                <br />
                ~ App Description Copywriting
                <br />
                ~ Submission to 10+ sites
                <br />
                ~ Guaranteed 25 App Reviews
                <br />
                ~ 1 Video Reviews/Demos
                <br />
                ~ Professional App Screenshot Design
                <br />
                ~ Complete Analysis of App
                <br />
                ~ 1000 Organic Twitter Followers
                <br />
                ~ 1000 Organic Facebook Fans
                <br />
                ~ Live Extensive reporting
                <br />
              </p>
            </div>
          </div>
          {/* Pricing Table-3 */}
          <div className='col-lg-4 col-md-8'>
            <div className='card bg-dark'>
              <h1 className='text-price'>$999</h1>
              <h1 className='text-price-cut'>$1,069</h1>
              <p className='text-flat-fee'>Flat fee</p>
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
                ~ App Description Copywriting
                <br />
                ~ UI/UX Testing On 35+ Devices
                <br />
                ~ Professional App Screenshot Design
                <br />
                ~ Guaranteed 45 App Reviews
                <br />
                ~ Submission to 25+ sites
                <br />
                ~ 2 Video Reviews/Demos
                <br />
                ~ Complete Analysis of App
                <br />
                ~ Advertising on Targetted Sites
                <br />
                ~ Banner Ad Design
                <br />
                ~ Website Design &amp; Development
                <br />
                ~ 3000 Organic Twitter Followers
                <br />
                ~ 3000 Organic Facebook Fans
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
              With complex Machine Learning Alorithms & leading analytical
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
              We are having team of highly experienced copyrighter, who work
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
              Highly experienced graphic deginer work in collabration with
              Marketing mind to design give a professional look to your App
              store listing.
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
