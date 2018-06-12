import React, { Component } from 'react';

import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'
import Banner from '../components/Banner.js'
import Pitcher from '../components/Pitcher.js'
import OurProducts from '../components/OurProducts.js'
import ShopNow from '../components/ShopNow.js'
import ContactUs from '../components/ContactUs.js'

import './Pages.css'
class Home extends Component {
  render() {
    return (
      <div className="pages-container">
        <Navbar/>
        <div className="pages-content">
          <Banner/>
          <Pitcher/>
          <OurProducts/>
          <ShopNow/>
          <ContactUs/>
        </div>
          <Footer/>
      </div>
    );
  }
}

export default Home
