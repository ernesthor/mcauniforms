import React, { Component } from 'react';

import NavbarProducts from '../componentsPages/NavbarProducts.js'
import Footer from '../components/Footer.js'

import PagesProduct from '../componentsPages/PagesProduct.js'

import './Pages.css'

class Products extends Component {
  render() {
    return (
      <div className="pages-container">
        <NavbarProducts/>
        <div className="pages-content">
          <PagesProduct/>
        </div>
          <Footer/>
      </div>
    );
  }
}

export default Products
