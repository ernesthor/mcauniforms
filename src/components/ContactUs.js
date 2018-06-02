import React, { Component } from 'react';
import './Components.css'

import ContactForm from './ContactForm.js'

class ContactUs extends Component {
  render() {
    return (
      <div>
        <div className="container contact-content">
          <div className="contact-form">
            <h2 className="center"> Contact Us! </h2>
            <ContactForm />
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs
