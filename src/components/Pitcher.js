import React, { Component } from 'react';
import './Components.css'

const pitchersample = '/images/pitchersample.png';

class Pitcher extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="pitcher-content">
          <h1 className="division-header"> Grab your school needs </h1>
            <div className="col-md-4">
              <div className="row pitcher-uni">
                <img src={pitchersample} className="pitcher-img"/>
                <p className="pitcher-text center"> From Type A to NSTP Uniform </p>
              </div>
              <div className="row uni-header-cont">
              <h2 className="pitcher-header sub-header center"> School Uniforms </h2>
              </div>
            </div>
            <div className="col-md-4">
              <div className="row pitcher-meds">
                <img src={pitchersample} className="pitcher-img"/>
                <p className="pitcher-text center"> Laboratory needs? </p>
              </div>
              <div className="row meds-header-cont">
                <h2 className="pitcher-header sub-header center"> Medical Supplies </h2>
              </div>
            </div>
            <div className="col-md-4">
              <div className="row pitcher-acc">
                <img src={pitchersample} className="pitcher-img"/>
                <p className="pitcher-text center"> Other school needs? </p>
              </div>
              <div className="row acc-header-cont">
                <h2 className="pitcher-header sub-header center"> Accesories </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pitcher
