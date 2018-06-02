import React, { Component } from 'react';
import './Components.css'

class AboutUs extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="about-content">
          <h1 className="division-header"> About Us </h1>
            <div className="col-md-6">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt felis vestibulum, suscipit justo id, pellentesque nulla. Quisque pretium volutpat laoreet.
                Praesent nec nunc nec risus placerat convallis vitae eget nibh. Quisque cursus molestie convallis. Pellentesque ligula enim, ullamcorper sit amet scelerisque vel, porta vitae dui. Ut ut placerat dolor.
                Quisque et nisi nec est rhoncus vestibulum. Praesent id ornare diam, eget luctus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue sapien neque, eu condimentum nisi pellentesque non.
              </p>
            </div>
            <div className="col-md-6">
              <h2> Another Division </h2>
              <p>Some Picture</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs
