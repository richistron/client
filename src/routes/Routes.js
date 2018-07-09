import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from '../components/pages/HomePage';
import LoginPage from '../components/pages/LoginPage';

class Routes extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default Routes;

