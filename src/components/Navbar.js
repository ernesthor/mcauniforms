import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Ionicon from 'react-ionicons'

import './Components.css'

const mcalogo = '/images/mcalogo.png';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">
              <img src={mcalogo} className="navbar-logo"/>
            </a>
            <button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbarContent"
            aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
              <Ionicon icon="md-menu" fontSize="35px" color="#678b99" className="icons"/>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="nav navbar-nav">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="/cart"><Ionicon icon="md-cart" fontSize="15px" color="#678b99" className="icons"/>Cart</a></li>
              <li><a href="/login"><Ionicon icon="md-arrow-dropright-circle" fontSize="15px" color="#678b99" className="icons"/> Log in</a></li>
              <li><a href="/register"><Ionicon icon="md-add-circle" fontSize="15px" color="#678b99" className="icons"/>Sign Up</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar
