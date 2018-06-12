import React, { Component } from 'react';

import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'

import './Pages.css'

class E404 extends Component {
  render() {
    return (
      <div>
        <Navbar/>
          <div>
            Error404: Go Back to <a href="/">MCA Uniforms</a>
          </div>
        <Footer/>
      </div>
    );
  }
}

export default E404
