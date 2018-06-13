import React, { Component } from 'react';

import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'

import PagesAbout from '../componentsPages/PagesAbout.js'

import './Pages.css'

class AboutUs extends Component {
  render() {
    return (
      <div className="pages-container">
        <Navbar/>
        <div className="pages-content">
          <PagesAbout/>
        </div>
          <Footer/>
      </div>
    );
  }
}

export default AboutUs
