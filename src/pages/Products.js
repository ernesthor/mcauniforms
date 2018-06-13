import React, { Component } from 'react';

import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'

import PagesProduct from '../componentsPages/PagesProduct.js'

import './Pages.css'

class Products extends Component {
  render() {
    return (
      <div className="pages-container">
        <Navbar/>
        <div className="pages-content">
          <PagesProduct/>
        </div>
          <Footer/>
      </div>
    );
  }
}

export default Products
