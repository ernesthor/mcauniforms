import React, { Component } from 'react';
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'
import Banner from '../components/Banner.js'
import AboutUs from '../components/AboutUs.js'
import CarouselImage from '../components/Carousel.js'
import ShopNow from '../components/ShopNow.js'
import ContactUs from '../components/ContactUs.js'

import './Pages.css'
class Home extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Banner/>
        <AboutUs/>
        <CarouselImage/>
        <ShopNow/>
        <ContactUs/>
        <Footer/>
      </div>
    );
  }
}

export default Home
