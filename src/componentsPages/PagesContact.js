import React, { Component } from 'react';
import Ionicon from 'react-ionicons'

import ShopMap from '../components/ShopMap.js'
import ShopMap0 from '../components/ShopMap0.js'
import ShopMap1 from '../components/ShopMap1.js'

import ContactForm from '../components/ContactForm.js'

import './componentPages.css'

class ContactUs extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="pcont-content">
        <h1 className="division-header"> Contact Us! </h1>
        <hr className="hr-header" width="15%"/>
        <div className="">
          <div className="">
            <div className="row">
              <div className="col-md-6 pcont-form">
              <h2 className="sub-header center"> <span className="blue">*</span> Be in touch. Inquire! <span className="blue">*</span> </h2>
                <ContactForm/>
              </div>
              <div className="col-md-6">
              <h2 className="sub-header pcont-upper center"> <span className="green">*</span> Store Hours <span className="green">*</span> </h2>
                <h4 className="pcont-upper pcont-text inline">Monday-Friday: </h4>
                <h4 className="pcont-time inline"> 9:00 A.M. - 6:00 P.M.</h4> <br/><br/>
                <h4 className="pcont-upper pcont-text inline">Saturday: </h4>
                <h4 className="pcont-time inline"> 10:00 A.M. - 4:00 P.M.</h4> <br/><br/>
                <h4 className="pcont-upper pcont-text inline">Sunday: </h4>
                <h4 className="pcont-time inline"> Closed </h4> <br/>
              </div>
            </div>
            <div className="row pcont-maps">
              <h2 className="sub-header center"> <span className="yellow">*</span> Visit Our Locations <span className="yellow">*</span></h2>
              <div className="col-md-4 pcont-mapdiv">
                <h4 className="pcont-address"> <Ionicon icon="ios-pin" fontSize="35px" color="#678b99" className="icons"/> Hollywood Terraces, K23 Sumulong Hwy, Sta. Cruz, Antipolo, 1870 Rizal </h4>
                <div className="pcont-map"><ShopMap/></div>
              </div>
              <div className="col-md-4 pcont-mapdiv">
                <h4 className="pcont-address"> <Ionicon icon="ios-pin" fontSize="35px" color="#a3c686" className="icons"/> Valenzuela Store 1, Fatima Main Near KFC , Valenzuela, 1440 NCR </h4>
                <div className="pcont-map"><ShopMap0/></div>
              </div>
              <div className="col-md-4 pcont-mapdiv">
                <h4 className="pcont-address"> <Ionicon icon="ios-pin" fontSize="35px" color="#ffd96b" className="icons"/> Valenzuela Store 2, Fatima Dambana , Valenzuela, 1440 NCR </h4>
                <div className="pcont-map"><ShopMap1/></div>
              </div>
          </div>
        </div>
        </div>
        </div>
      </div>
    );
  }
}

export default ContactUs
