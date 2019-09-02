import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';

// components 
import Home from '../Home/Home';
import Details from '../Details/Details';
import Edit from '../Edit/Edit';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <div className="App">
          <p>Movies and Genres</p>
          <Route exact path="/" component={Home} /> 
          {/* <Route path="/details" component={Details} /> */}
          <Route path="/details/:id" component={Details} />
          <Route path="/edit/:id" component={Edit} />
        </div>
      </Router>
    );
  }
}

export default (App);
