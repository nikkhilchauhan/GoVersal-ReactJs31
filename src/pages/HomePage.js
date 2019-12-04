import React from 'react';
import { Link } from 'react-router-dom';
import Reviews from '../layouts/Reviews';
import BrandScan from '../img/brand/scantosheet.webp';
import BrandOyo from '../img/brand/oyo.webp';
import BrandLearncodeonline from '../img/brand/learncodeonline.webp';
import BrandTouchvpn from '../img/brand/touchvpn.webp';
import BrandRush from '../img/brand/rush.webp';
import BrandPass from '../img/brand/passwordgen.webp';
import Guarantee from '../layouts/Guarantee';
import PaymentModal from '../components/PaymentModal';

export default function HomePage() {
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
              <p className='text-flat-fee'>Flat fee</p>
              <div
                className='btn-get-now-1 btn-get-now'
                data-toggle='modal'
                data-target='#PaymentModal'
                data-whatever='@mdo'
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
              <p className='text-flat-fee'>Flat fee</p>
              <div
                className='btn-get-now-2 btn-get-now'
                data-toggle='modal'
                data-target='#PaymentModal'
                data-whatever='@mdo'
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
                ~ Submission to 5+ sites
                <br />
                ~ Guaranteed 10 App Reviews
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
              <p className='text-flat-fee'>Flat fee</p>
              <div
                className='btn-get-now-3 btn-get-now'
                data-toggle='modal'
                data-target='#PaymentModal'
                data-whatever='@mdo'
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
                ~ Guaranteed 25 App Reviews
                <br />
                ~ Submission to 20+ sites
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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam,
              earum?
            </p>
          </div>
          <div className='col-lg-6 col-md-6'>
            <p className='explain-heading'>
              <i className='fas fa-newspaper icon'></i>
              Press Outreach for your App
            </p>
            <p className='lead'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam,
              earum?
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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam,
              earum?
            </p>
          </div>
          <div className='col-lg-6 col-md-6'>
            <p className='explain-heading'>
              <i className='fas fa-dollar-sign icon'></i>
              Increase your In-App Purchases
            </p>
            <p className='lead'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam,
              earum?
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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam,
              earum?
            </p>
          </div>
          <div className='col-lg-6 col-md-6'>
            <p className='explain-heading'>
              <i className='fas fa-thumbs-up icon'></i>
              Complete Social Media Marketing
            </p>
            <p className='lead'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam,
              earum?
            </p>
          </div>
        </div>
      </section>
      <Reviews />
      <Guarantee />
      <PaymentModal />
    </div>
  );
}
