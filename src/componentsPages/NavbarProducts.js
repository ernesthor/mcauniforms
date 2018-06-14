import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Ionicon from 'react-ionicons'

import './componentPages.css'

const mcalogo = '/images/mcalogo.png';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">
              <img src={mcalogo} className="navbar-logo"/>
            </a>
            <button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbarContent"
            aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
              <Ionicon icon="md-menu" fontSize="35px" color="#fafafa" className="icons"/>
            </button>
            <input type="text" placeholder="search..."/><a href="#"><Ionicon icon="md-search" fontSize="35px" color="#fafafa" className="icons"/></a>
          </div>
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="nav navbar-nav navbar-right">
              <li><a href="/">Home</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/cart"><Ionicon icon="md-cart" fontSize="15px" color="#fafafa" className="icons"/>Cart</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar
