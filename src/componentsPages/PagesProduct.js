import React, { Component } from 'react';
import './componentPages.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const carfiller1 = '/images/carfiller1.jpeg'
const carfiller2 = '/images/carfiller2.jpeg'

const polo1 = '/images/product1-1.png'
const pants1 = '/images/product1-2.png'
const polo2 = '/images/product2-1.png'
const pants2 = '/images/product2-2.png'


class OurProducts extends Component {
render() {
  return (
    <div>
      <div className="pageprod-content container-fluid">
        <div className="row upper">
          <div className="col-md-3 pageprod-navbar">
            <ul>
              <a href="#"><h2 className="pageprod-header">Product Home</h2></a>
              <li><a href="#">School Uniforms</a></li>
              <li><a href="#">Maritime</a></li>
              <li><a href="#">Senior High School</a></li>
              <li><a href="#">Medical Supplies</a></li>
              <li><a href="#">School Supplies</a></li>
            </ul>
          </div>
          <div className="col-md-6 pageprod-slider">
            <Carousel autoPlay={true}  showThumbs={false} showStatus={false} transitionTime={1000} interval={5000} infiniteLoop={true}>
              <div>
                <img src={carfiller1} className="filler"/>
              </div>
              <div>
                <img src={carfiller2} className="filler"/>
              </div>
            </Carousel>
          </div>
          <div className="col-md-3 pageprod-display">
            <p className="pageprod-header center"> Best quality. Best price </p>
          </div>
        </div>
        <div className="row lower">
          <div className="row pageprod-section">
            <h2 className="sub-header center"> Product Items </h2>
          </div>
          <div className="row pageprod-items">
            <div className="row">
              <div className="col-xs-4 col-sm-4 col-md-4 pageprod-container">
                <div className="pageprod-catalog">
                  <div className="pageprod-imgcont">
                    <img src={polo1} className="pageprod-img"/>
                  </div>
                  <h3 className="pageprod-desc center"> Black Polo </h3>
                  <h5 className="pageprod-price center inline"> P 250 </h5>
                  <button className="pageprod-btn inline"> Add to Cart </button>
                </div>
              </div>
              <div className="col-xs-4 col-sm-4 col-md-4 pageprod-container">
                <div className="pageprod-catalog">
                  <div className="pageprod-imgcont">
                    <img src={pants1} className="pageprod-img"/>
                  </div>
                  <h3 className="pageprod-desc center"> Black Pants </h3>
                  <h5 className="pageprod-price center inline"> P 350 </h5>
                  <button className="pageprod-btn inline"> Add to Cart </button>
                </div>
              </div>
              <div className="col-xs-4 col-sm-4 col-md-4 pageprod-container">
                <div className="pageprod-catalog">
                  <div className="pageprod-imgcont">
                    <img src={polo1} className="pageprod-img"/>
                  </div>
                  <h3 className="pageprod-desc center"> Black Polo </h3>
                  <h5 className="pageprod-price center inline"> P 250 </h5>
                  <button className="pageprod-btn inline"> Add to Cart </button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-4 col-sm-4 col-md-4 pageprod-container">
              <div className="pageprod-catalog">
                <div className="pageprod-imgcont">
                  <img src={polo2} className="pageprod-img"/>
                </div>
                <h3 className="pageprod-desc center"> White Polo </h3>
                <h5 className="pageprod-price center inline"> P 250 </h5>
                <button className="pageprod-btn inline"> Add to Cart </button>
              </div>
              </div>
              <div className="col-xs-4 col-sm-4 col-md-4 pageprod-container">
                <div className="pageprod-catalog">
                  <div className="pageprod-imgcont">
                    <img src={pants2} className="pageprod-img"/>
                  </div>
                  <h3 className="pageprod-desc center"> Jogging Pants </h3>
                  <h5 className="pageprod-price center inline"> P 200 </h5>
                  <button className="pageprod-btn inline"> Add to Cart </button>
                </div>
              </div>
              <div className="col-xs-4 col-sm-4 col-md-4 pageprod-container">
                <div className="pageprod-catalog">
                  <div className="pageprod-imgcont">
                    <img src={polo1} className="pageprod-img"/>
                  </div>
                  <h3 className="pageprod-desc center"> Black Polo </h3>
                  <h5 className="pageprod-price center inline"> P 250 </h5>
                  <button className="pageprod-btn inline"> Add to Cart </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
}

export default OurProducts
