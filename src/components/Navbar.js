import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Components.css'

const mcalogo = '/images/mcalogo.png';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">
              <img src={mcalogo} className="navbar-logo"/>
            </a>
            <button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbarContent"
            aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar
