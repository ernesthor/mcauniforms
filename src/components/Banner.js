import React, { Component } from 'react';
import Ionicon from 'react-ionicons'
import './Components.css'

class Banner extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="banner banner-fluid">
          <div className="container">
            <h1 className="banner-header banner-content">MCA Uniforms</h1>
            <p className="banner-slogan">One-stop shop for your school supplies!</p>
            <button type="button" className="btn left banner-btn"><Ionicon icon="md-cart" fontSize="20px" color="#678b99" className="icons"/>&nbsp;Go to store</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner
