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
            <a href="/products" className="btn left banner-btn"><Ionicon icon="ios-basket" fontSize="20px" color="#111" className="icons"/>&nbsp;Go to store</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner
