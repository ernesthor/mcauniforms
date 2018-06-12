import React, { Component } from 'react';

import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'
import Pitcher from '../components/Pitcher.js'
import ShopNow from '../components/ShopNow.js'

import './Pages.css'
class AboutUs extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Pitcher/>
        <Footer/>
      </div>
    );
  }
}

export default AboutUs
