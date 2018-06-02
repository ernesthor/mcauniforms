import React, { Component } from 'react';
import Ionicon from 'react-ionicons'
import './Components.css'

import ShopMap from './ShopMap.js'

class ShopNow extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="shop-content">
            <h2 className="division-header"> Shop Now </h2>
              <div className="col-md-6 shop-text">
                <h2> Online Store </h2>
                <p className="">There are a lot of items available on our shop. Visit it now!</p>
                <button type="button" className="btn left"><Ionicon icon="md-cart" fontSize="20px" className="icons"/>&nbsp;Go to store</button>
              </div>
              <div className="col-md-6 shop-map">
              <h2> Visit Our Locations </h2>
                <ShopMap/>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShopNow
