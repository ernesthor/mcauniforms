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
        <h1 className="division-header"> Shop Now </h1>
        <hr className="hr-header" width="15%"/>
        <div className="shop-background">
          <div className="shop-content">
            <div className="row">
              <div className="col-md-6">
                <h2 className="shop-header shop-upper header-margin"><span className="blue">*</span> Online Store <span className="blue">*</span> </h2>
                <p className="shop-text shop-upper">There are a lot of items available on our shop. Visit it now!</p>
                <a href="/products" className="shop-btn btn left shop-upper"><Ionicon icon="ios-basket" fontSize="20px" color="#111" className="icons"/>&nbsp;Go to store</a>
              </div>
              <div className="col-md-6">
              <h2 className="shop-header shop-upper header-margin"> <span className="green">*</span> Store Hours <span className="green">*</span> </h2>
                <h4 className="shop-upper shop-text inline">Monday-Friday: </h4>
                <h4 className="shop-time inline"> 9:00 A.M. - 6:00 P.M.</h4> <br/><br/>
                <h4 className="shop-upper shop-text inline">Saturday: </h4>
                <h4 className="shop-time inline"> 10:00 A.M. - 4:00 P.M.</h4> <br/><br/>
                <h4 className="shop-upper shop-text inline">Sunday: </h4>
                <h4 className="shop-time inline"> Closed </h4> <br/>
              </div>
            </div>
            <div className="row row-maps">
              <h2 className="shop-header shop-lower center"> <span className="yellow">*</span> Visit Our Locations <span className="yellow">*</span></h2>
              <div className="col-md-4 shop-mapdiv">
                <h4 className="shop-address"> <Ionicon icon="ios-pin" fontSize="35px" color="#678b99" className="icons"/> Hollywood Terraces, K23 Sumulong Hwy, Sta. Cruz, Antipolo, 1870 Rizal </h4>
                <div className="shop-map"><ShopMap/></div>
              </div>
              <div className="col-md-4 shop-mapdiv">
                <h4 className="shop-address"> <Ionicon icon="ios-pin" fontSize="35px" color="#a3c686" className="icons"/> Valenzuela Store 1, Fatima Main Near KFC , Valenzuela, 1440 NCR </h4>
                <div className="shop-map"><ShopMap0/></div>
              </div>
              <div className="col-md-4 shop-mapdiv">
                <h4 className="shop-address"> <Ionicon icon="ios-pin" fontSize="35px" color="#ffd96b" className="icons"/> Valenzuela Store 2, Fatima Dambana , Valenzuela, 1440 NCR </h4>
                <div className="shop-map"><ShopMap1/></div>
              </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default ShopNow
