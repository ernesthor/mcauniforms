import React, { Component } from 'react';
import Ionicon from 'react-ionicons';

import './Components.css';

const mca = '/images/mca.png';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container-fluid footer-content">
          <div className="row">
            <div className="col-md-4 footer-division">
              <img src={mca} className="footer-logo"/><br/>
              <h4 className="inline"><Ionicon icon="ios-pin" fontSize="35px" color="#fafafa" className="icons"/>Address:</h4> <br/>
              <ul>
                <li><h5 className="inline">&nbsp;<strong>Antipolo Branch</strong>: Hollywood Terraces, K23 Sumulong Hwy, Sta. Cruz, Antipolo, 1870 Rizal</h5><br/></li>
                <li><h5 className="inline">&nbsp;<strong>Valenzuela Fatima Main</strong>:  Valenzuela Store 1, Fatima Main Near KFC , Valenzuela, 1440 NCR </h5><br/></li>
                <li><h5 className="inline">&nbsp;<strong>Valenzuela Fatima Dambana</strong>: Valenzuela Store 2, Fatima Dambana , Valenzuela, 1440 NCR </h5><br/></li>
              </ul>

              <h4 className="inline"><Ionicon icon="ios-phone-portrait" color="#fafafa" fontSize="35px" className="icons"/>Contact No.:</h4>
              <h5 className="inline">&nbsp;0947 406 6554</h5>
            </div>
            <div className="col-md-4 footer-division">
              <h2>Store Hours</h2>
              <h5><strong>Monday-Friday:</strong> 9:00 A.M. - 6:00 P.M.</h5>
              <h5><strong>Saturday:</strong> 10:00 A.M. - 4:00 P.M.</h5>
              <h5><strong>Sunday:</strong> Closed</h5>
            </div>
            <div className="col-md-4 footer-division">
              <h2>Follow Us</h2>
              <a href="https://www.facebook.com/MCAOfficialStore/"><Ionicon icon="logo-facebook" color="#fafafa" fontSize="35px" className="icons"/></a><h5 className="icons-text">&nbsp;Facebook</h5>
            </div>
          </div>
          <div className="row">
            <span><hr/></span>
              <div className="col-md-6 center">
                <span className="footer-copy">MCA Uniforms &#169; {new Date().getFullYear()}&nbsp;&nbsp;&nbsp;</span>
              </div>
              <div className="col-md-6 center">
                <span className="footer-copy">Designed by: <strong> ThorTechTips </strong> </span>
              </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer
