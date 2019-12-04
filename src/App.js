import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import './css/bootstrap/bootstrap.min.css';
import './App.css';
import Navbar from './layouts/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TrackPage from './pages/TrackPage';
import ContactPage from './pages/ContactPage';
import Footer from './layouts/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route exact path='/track'>
          <TrackPage />
        </Route>

        <Route exact path='/about'>
          <AboutPage />
        </Route>
        <Route exact path='/contact'>
          <ContactPage />
        </Route>
        <Redirect to='/' />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
