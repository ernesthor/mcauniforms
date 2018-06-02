import React, { Component } from 'react';
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'
import Jumbotron from '../components/Jumbotron.js'
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
        <Jumbotron title="MCA Uniforms" subtitle="One-stop shop for your school supplies!"/>
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
