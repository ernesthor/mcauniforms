import React, { Component } from 'react';

import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'

import './Pages.css'

class E404 extends Component {
  render() {
    return (
      <div className="pages-container">
        <Navbar/>
        <div className="pages-content">
          <div className="container">
            <h1> Log In Page </h1>
            <h3> Page not Found!</h3>
            <h5>The page is under construction</h5>
            <p>Go Back to <a href="/">MCA Uniforms</a></p>
          </div>
        </div>
          <Footer/>
      </div>
    );
  }
}

export default E404
