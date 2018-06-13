import React, { Component } from 'react';
import './componentPages.css'

const pitcheruni = '/images/pitcher-uni.png';
const pitchermeds = '/images/pitcher-meds.png';
const pitcheracc = '/images/pitcher-acc.png';

class Pitcher extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h1 className="division-header"> About Us </h1>
          <hr className="hr-header" width="15%"/>
          <div className="">
            <h2 className="sub-header center"> History </h2>
            <p className="about-hist">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt felis vestibulum, suscipit justo id, pellentesque nulla. Quisque pretium volutpat laoreet.
              Praesent nec nunc nec risus placerat convallis vitae eget nibh. Quisque cursus molestie convallis. Pellentesque ligula enim, ullamcorper sit amet scelerisque vel, porta vitae dui. Ut ut placerat dolor.
              Quisque et nisi nec est rhoncus vestibulum. Praesent id ornare diam, eget luctus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue sapien neque, eu condimentum nisi pellentesque non.
            </p>
          </div>
          <div className="about-content">
            <h2 className="sub-header center"> Grab Your School Needs </h2>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
              <div className="about-container">
                <div className="row about-uni">
                  <img src={pitcheruni} className="about-img"/>
                  <p className="about-text center"> Complete School Attire? </p>
                </div>
                <div className="row uni-header-cont">
                <h2 className="about-header center"> School Uniforms </h2>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
              <div className="about-container">
                <div className="row about-meds">
                  <img src={pitchermeds} className="about-img"/>
                  <p className="about-text center"> Laboratory Needs? </p>
                </div>
                <div className="row meds-header-cont">
                  <h2 className="about-header center"> Medical Supplies </h2>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
              <div className="about-container">
                <div className="row about-acc">
                  <img src={pitcheracc} className="about-img"/>
                  <p className="about-text center"> Other School Needs? </p>
                </div>
                <div className="row acc-header-cont">
                  <h2 className="about-header center"> Accesories </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <h2 className="sub-header center"> Schools </h2>
              <p className="about-hist center">
                We&#39;re offering uniforms for these schools, Variety are from SHS to College!
              </p>
              <ul>
                <li className="about-list center"><a href="http://www.fatima.edu.ph"> Our Lady of Fatima - Main Valenzuela </a></li>
                <li className="about-list center"><a href="http://www.fatima.edu.ph"> Our Lady of Fatima - Antipolo </a></li>
              </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Pitcher
