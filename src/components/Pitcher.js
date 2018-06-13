import React, { Component } from 'react';
import './Components.css'

const pitcheruni = '/images/pitcher-uni.png';
const pitchermeds = '/images/pitcher-meds.png';
const pitcheracc = '/images/pitcher-acc.png';

class Pitcher extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="pitcher-content">
          <h1 className="division-header"> Grab your school needs </h1>
          <hr className="hr-header" width="15%"/>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
              <div className="pitcher-container">
                <div className="row pitcher-uni">
                  <img src={pitcheruni} className="pitcher-img"/>
                  <p className="pitcher-text center"> Complete School Attire? </p>
                </div>
                <div className="row uni-header-cont">
                <h2 className="pitcher-header center"> School Uniforms </h2>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
              <div className="pitcher-container">
                <div className="row pitcher-meds">
                  <img src={pitchermeds} className="pitcher-img"/>
                  <p className="pitcher-text center"> Laboratory Needs? </p>
                </div>
                <div className="row meds-header-cont">
                  <h2 className="pitcher-header center"> Medical Supplies </h2>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
              <div className="pitcher-container">
                <div className="row pitcher-acc">
                  <img src={pitcheracc} className="pitcher-img"/>
                  <p className="pitcher-text center"> Other School Needs? </p>
                </div>
                <div className="row acc-header-cont">
                  <h2 className="pitcher-header center"> Accesories </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pitcher
