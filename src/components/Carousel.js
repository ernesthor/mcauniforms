import React, { Component } from 'react';
import './Components.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const carousel1 = '/images/CarouselTemp1.jpg'
const carousel2 = '/images/CarouselTemp2.jpg'
const carousel3 = '/images/CarouselTemp3.jpg'

class CarouselImage extends Component {
  render() {
    return (
      <div>
        <div className="carousel-content">
          <h1 className="division-header">Products</h1>
          <Carousel autoPlay={true} showThumbs={false} showStatus={false} transitionTime={1000} infiniteLoop={true}>
            <div>
              <img src={carousel1} className="carousel-img" />
            </div>
            <div>
              <img src={carousel2} className="carousel-img"/>
            </div>
            <div>
              <img src={carousel3} className="carousel-img"/>
            </div>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default CarouselImage
