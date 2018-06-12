import React, { Component } from 'react';

import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'
import OurProducts from '../components/OurProducts.js'
import ShopNow from '../components/ShopNow.js'

import './Pages.css'

class Products extends Component {
  render() {
    return (
      <div className="pages-container">
        <Navbar/>
        <div className="pages-content">
          <OurProducts/>
          <ShopNow/>
        </div>
          <Footer/>
      </div>
    );
  }
}

export default Products
