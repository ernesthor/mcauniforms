import React, { Component } from 'react';
import './Components.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const carousel2 = '/images/carousel-img-2.jpg'
const carousel3 = '/images/carousel-img-3.jpg'
const carousel4 = '/images/carousel-img-4.jpg'
const carousel5 = '/images/carousel-img-5.jpg'
const carousel6 = '/images/carousel-img-6.jpg'
const carousel7 = '/images/carousel-img-7.jpg'


class CarouselImage extends Component {
  render() {
    return (
      <div>
        <div className="carousel-content">
          <h1 className="division-header">Products</h1>
          <Carousel autoPlay={true}  showThumbs={false} showStatus={false} transitionTime={1000} infiniteLoop={true}>
            <div>
              <img src={carousel2}/>
            </div>
            <div>
              <img src={carousel3}/>
            </div>
            <div>
              <img src={carousel4}/>
            </div>
            <div>
              <img src={carousel5}/>
            </div>
            <div>
              <img src={carousel6}/>
            </div>
            <div>
              <img src={carousel7}/>
            </div>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default CarouselImage
