  import React, { Component } from 'react';
import './Components.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProductAvailable = '/images/ProductAvailable.jpg'
const ProductSchoolUni = '/images/ProductSchoolUni.jpg'
const ProductSHS = '/images/ProductSHS.jpg'
const ProductsMartime = '/images/ProductsMartime.jpg'


const polo1 = '/images/product1-1.png'
const pants1 = '/images/product1-2.png'
const polo2 = '/images/product2-1.png'
const pants2 = '/images/product2-2.png'


class OurProducts extends Component {
  render() {
    return (
      <div>
        <div className="product-content container-fluid">
          <h1 className="division-header">Products</h1>
          <hr className="hr-header" width="15%"/>
          <div className="col-md-5 product-slider">
            <Carousel autoPlay={true}  showThumbs={false} showStatus={false} transitionTime={1000} interval={5000} infiniteLoop={true}>
              <div>
                <img src={ProductAvailable}/>
              </div>
              <div>
                <img src={ProductSchoolUni}/>
              </div>
              <div>
                <img src={ProductSHS}/>
              </div>
              <div>
                <img src={ProductsMartime}/>
              </div>
            </Carousel>
          </div>
          <div className="col-md-7 product-display">
            <p className="sub-header center"> Best quality. Best price </p>
              <div className="row">
                <div className="col-md-6 product-container">
                  <div className="product-catalog">
                    <div className="product-imgcont">
                      <img src={polo1} className="product-img"/>
                    </div>
                    <h3 className="product-desc center"> Black Polo </h3>
                    <h5 className="product-price center inline"> P 250 </h5>
                    <button className="product-btn inline"> Add to Cart </button>
                  </div>
                </div>
                <div className="col-md-6 product-container">
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
                <div className="col-md-6 product-container">
                <div className="product-catalog">
                  <div className="product-imgcont">
                    <img src={polo2} className="product-img"/>
                  </div>
                  <h3 className="product-desc center"> White Polo </h3>
                  <h5 className="product-price center inline"> P 250 </h5>
                  <button className="product-btn inline"> Add to Cart </button>
                </div>
                </div>
                <div className="col-md-6 product-container">
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
    );
  }
}

export default OurProducts
