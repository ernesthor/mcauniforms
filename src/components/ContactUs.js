import React, { Component } from 'react';
import './Components.css'

import ContactForm from './ContactForm.js'

class ContactUs extends Component {
  render() {
    return (
      <div>
        <div className="container contact-content">
          <h1 className="division-header"> Contact Us! </h1>
          <div className="col-md-6 contact-form">
            <h2 className="sub-header"> Be in touch. Inquire! </h2>
            <ContactForm />
          </div>
          <div className="col-md-6 contact-hours">
          <h2 className="sub-header"> About </h2>
          <p className="about-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt felis vestibulum, suscipit justo id, pellentesque nulla. Quisque pretium volutpat laoreet.
            Praesent nec nunc nec risus placerat convallis vitae eget nibh. Quisque cursus molestie convallis. Pellentesque ligula enim, ullamcorper sit amet scelerisque vel, porta vitae dui. Ut ut placerat dolor.
            Quisque et nisi nec est rhoncus vestibulum. Praesent id ornare diam, eget luctus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue sapien neque, eu condimentum nisi pellentesque non.
          </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs
