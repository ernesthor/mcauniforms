import React, { Component } from 'react';

import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'
import ContactUs from '../components/ContactUs.js'

import './Pages.css'

class Contact extends Component {
  render() {
    return (
      <div className="pages-container">
        <Navbar/>
        <div className="pages-content">
          <ContactUs/>
        </div>
          <Footer/>
      </div>
    );
  }
}

export default Contact