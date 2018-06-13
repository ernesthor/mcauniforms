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
              <li><a href="#">Product Home</a></li>
              <li><a href="#">School Uniforms</a></li>
              <li><a href="#">Maritime</a></li>
              <li><a href="#">Senior High School</a></li>
              <li><a href="#">Medical Supplies</a></li>
              <li><a href="#">School Supplies</a></li>
            </ul>
          </div>
          <div className="col-md-6 product-slider">
            <Carousel autoPlay={true}  showThumbs={false} showStatus={false} transitionTime={1000} interval={5000} infiniteLoop={true}>
              <div>
                <img src={carfiller1}/>
              </div>
              <div>
                <img src={carfiller2}/>
              </div>
            </Carousel>
          </div>
          <div className="col-md-3 product-display">
            <p className="sub-header center"> Best quality. Best price </p>
          </div>
        </div>
        <div className="row lower">
          <div className="row product-section">
            <h2 className="sub-header center"> Product Items </h2>
          </div>
          <div className="row product-items">
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6 product-container">
                <div className="product-catalog">
                  <div className="product-imgcont">
                    <img src={polo1} className="product-img"/>
                  </div>
                  <h3 className="product-desc center"> Black Polo </h3>
                  <h5 className="product-price center inline"> P 250 </h5>
                  <button className="product-btn inline"> Add to Cart </button>
                </div>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 product-container">
              <div className="product-catalog">
                <div className="product-imgcont">
                  <img src={pants1} className="product-img"/>
                </div>
                <h3 className="product-desc center"> Black Pants </h3>
                <h5 className="product-price center inline"> P 350 </h5>
                <button className="product-btn inline"> Add to Cart </button>
              </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6 product-container">
              <div className="product-catalog">
                <div className="product-imgcont">
                  <img src={polo2} className="product-img"/>
                </div>
                <h3 className="product-desc center"> White Polo </h3>
                <h5 className="product-price center inline"> P 250 </h5>
                <button className="product-btn inline"> Add to Cart </button>
              </div>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 product-container">
              <div className="product-catalog">
                <div className="product-imgcont">
                  <img src={pants2} className="product-img"/>
                </div>
                <h3 className="product-desc center"> Jogging Pants </h3>
                <h5 className="product-price center inline"> P 200 </h5>
                <button className="product-btn inline"> Add to Cart </button>
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
