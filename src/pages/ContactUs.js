import React, { Component } from 'react';

import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'

import PagesContact from '../componentsPages/PagesContact.js'

import './Pages.css'

class Contact extends Component {
  render() {
    return (
      <div className="pages-container">
        <Navbar/>
        <div className="pages-content">
          <PagesContact/>
        </div>
          <Footer/>
      </div>
    );
  }
}

export default Contact
