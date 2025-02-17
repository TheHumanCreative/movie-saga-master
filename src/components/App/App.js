import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';

// components 
import Home from '../Home/Home'; // making the components linked to App.js
import Details from '../Details/Details';
import Edit from '../Edit/Edit';

class App extends Component {
  // Renders the entire app on the DOM
  render() {  // routes created for the navigation of the App and its components.
    return (
      <Router>
        <div className="App">
          <h1>Movies and Genres</h1>
          <Route exact path="/" component={Home} /> 
          <Route path="/details/:id" component={Details} />
          <Route path="/edit/:id" component={Edit} />
        </div>
      </Router>
    );
  }
}

export default (App);
