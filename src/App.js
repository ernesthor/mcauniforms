import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { Provider } from 'react-redux'

import logo from './logo.svg';
import './App.css';
import store from './store'

import Home from './pages/Home.js'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
        <div>
          <Route exact path ="/" component={Home}/>
        </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
