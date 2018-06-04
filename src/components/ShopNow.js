import React, { Component } from 'react';
import Ionicon from 'react-ionicons'
import './Components.css'

import ShopMap from './ShopMap.js'
import ShopMap0 from './ShopMap0.js'
import ShopMap1 from './ShopMap1.js'

class ShopNow extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="shop-content shop-content-fluid">
          <h1 className="division-header"> Shop Now </h1>
            <div className="row">
              <div className="col-md-6 shop-text">
                <h2 className="sub-header"> Online Store </h2>
                <p className="shop-text">There are a lot of items available on our shop. Visit it now!</p>
                <button type="button" className="btn left"><Ionicon icon="md-cart" fontSize="20px" className="icons"/>&nbsp;Go to store</button>
              </div>
              <div className="col-md-6 shop-map">
              <h2 className="sub-header"> Store Hours </h2>
                <h4>Monday-Friday: 9:00 A.M. - 6:00 P.M.</h4>
                <h4>Saturday: 10:00 A.M. - 4:00 P.M.</h4>
                <h4>Sunday: Closed</h4>
              </div>
            </div>
            <div className="row">
              <h2 className="sub-header center"> Visit Our Locations </h2>
              <div className="col-md-4 shop-map">
                <h4 className="shop-address"> <Ionicon icon="ios-pin" fontSize="35px" className="icons"/> Hollywood Terraces, K23 Sumulong Hwy, Sta. Cruz, Antipolo, 1870 Rizal </h4>
                <ShopMap/>
              </div>
              <div className="col-md-4 shop-map">
                <h4 className="shop-address"> <Ionicon icon="ios-pin" fontSize="35px" className="icons"/> Shop Address &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h4>
                <ShopMap0/>
              </div>
              <div className="col-md-4 shop-map">
                <h4 className="shop-address"> <Ionicon icon="ios-pin" fontSize="35px" className="icons"/> Shop Address &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </h4>
                <ShopMap1/>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default ShopNow
