import React, { Component } from 'react';
import Ionicon from 'react-ionicons';

import './Components.css';

const mcalogo = '/images/mcalogo.png';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container-fluid footer-content">
          <div className="row">
            <div className="col-md-4 footer-division">
              <img src={mcalogo} className="footer-logo"/><br/>
              <h4 className="inline"><Ionicon icon="ios-pin" fontSize="35px" className="icons"/>Address:</h4>
              <h5 className="inline">&nbsp;Hollywood Terraces, K23 Sumulong Hwy, Sta. Cruz, Antipolo, 1870 Rizal</h5><br/>
              <h4 className="inline"><Ionicon icon="ios-phone-portrait" fontSize="35px" className="icons"/>Contact No.:</h4>
              <h5 className="inline">&nbsp;0947 406 6554</h5>
            </div>
            <div className="col-md-4 footer-division">
              <h2>Store Hours</h2>
              <h5>Monday-Friday: 9:00 A.M. - 6:00 P.M.</h5>
              <h5>Saturday: 10:00 A.M. - 4:00 P.M.</h5>
              <h5>Sunday: Closed</h5>
            </div>
            <div className="col-md-4 footer-division">
              <h2>Follow Us</h2>
              <Ionicon icon="logo-facebook" fontSize="35px" className="icons"/><h5 className="icons-text">&nbsp;Facebook</h5>
            </div>
          </div>
          <div className="row">
            <span className="center"><hr/></span>
            <span className="text-muted">MCA Uniforms &#169; {new Date().getFullYear()}</span>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer
