import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { Provider } from 'react-redux'

import logo from './logo.svg';
import './App.css';
import store from './store'

import Home from './pages/Home.js'
import AboutUs from './pages/AboutUs.js'
import ContactUs from './pages/ContactUs.js'
import Products from './pages/Products.js'
import Cart from './pages/Cart.js'
import SignUp from './pages/SignUp.js'
import LogIn from './pages/LogIn.js'
import E404 from './pages/404.js'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
        <div>
          <Route exact path ="/" component={Home}/>
          <Route exact path ="/mca-admin" component={LogIn}/>
          <Route exact path ="/about" component={AboutUs}/>
          <Route exact path ="/contact" component={ContactUs}/>
          <Route exact path ="/products" component={Products}/>
          <Route exact path ="/cart" component={E404}/>
          <Route exact path ="/register" component={E404}/>
          <Route exact path ="/404" component={E404}/>
        </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
